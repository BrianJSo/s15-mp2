const auctionsModel = require ('../models/auctions');
const usersModel = require('../models/users');
const watchedModel = require ('../models/watched');

exports.auction = function(req,res){
    res.render('create',{
        title: "Create Auction"
    })
};

exports.create = function(req, res){
    usersModel.getProfileByEmail(req.session.email, function(seller){
        auctionsModel.createAuction(seller._id, req.body.productName, req.body.description,
                                    req.body.delivery, req.body.contactNum, req.body.expiryDate,
                                    req.body.startingBid, req.body.increments, req.body.productImg, 
                                    function(result){
            if(result){
                res.send(result);
            } else {
                res.render('error',{ title:"ERROR", message:"could not create auction."})
            }
        });
    });
};

exports.getAuctionByID = function(req,res){
    auctionsModel.getAuctionByID(req.params.id, function(curAuction){
        if(curAuction){
            usersModel.getProfileByEmail(req.session.email, function(seller){
                watchedModel.isWatching(seller._id, req.params.id, function(result){

                    if(new Date(curAuction.expiryDate) > new Date()){
                        res.render('auction',{
                            title: curAuction.productName,
                            auction: curAuction,
                            isWatched: result
                        })
                    } else {
                        res.render('auctionclose',{
                            title: curAuction.productName,
                            auction: curAuction,
                            isWatched: result
                        })
                    }

                });
            });   
        } else {
            res.render('error',{ title:"ERROR", message:"auction does not exist."})
        }   
    }) 
};

exports.watch = function(req, res){
    usersModel.getProfileByEmail(req.session.email, function(currUser){
        auctionsModel.watchAuction(req.body._id, function(auction) {
            watchedModel.watchAuction(currUser._id, auction._id, function(result){
                if(result){
                    res.send(result);
                } else {
                    res.send("error");
                }
            })
        });
    });
};

exports.unwatch = function(req, res){
    usersModel.getProfileByEmail(req.session.email, function(currUser){
        auctionsModel.unwatchAuction(req.body._id, function(auction){
            watchedModel.unwatchAuction(currUser._id, auction._id, function(result){
                if(result){
                    res.send(result);
                } else {
                    res.send("error");
                }
            })
        })
    });
};

exports.bid = function(req, res) {
    usersModel.getProfileByEmail(req.session.email, function(currUser){
        const date = new Date();

        auctionsModel.getAuctionByID(req.body._id, function(auction) {         
            if (auction.highestBid < req.body.bidPrice){

                auctionsModel.bid(auction._id, req.body.bidPrice, currUser._id, date, function(result){
                    if(result){
                        res.send("success");
                    } else {
                        res.send("error");
                    }
                });
            }
        });
    });
};