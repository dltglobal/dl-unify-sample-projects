var express = require('express');
const cors = require('cors');
const app = express();
var axios = require('axios');

const INVOKE_CHAIN_CODE_URL = "https://fabric-dlgateway.devdlt.com/api/2.0/";


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use(cors());
app.options('*', cors());


app.get('/api/queryallcars', async function (req, res) {
    try {
        const body = {
            userName: "ayushyachitransh@gmail.com",
            chaincodeName: "fabcarchaincode",
            args: ["A091"],
            functionName: "queryCar",
            channelName: "redirecttesting",
            networkName: "test5"
        };

        var raw = JSON.stringify(body);
        axios({
            url: INVOKE_CHAIN_CODE_URL + 'fab_invokeChaincode',
            method: 'post',
            data: raw,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '5d93e6fe-b6c6-44dd-8589-be0c4c666771'
            }
        }).then((response) => {
            console.log(`Transaction has been evaluated, result is: ${JSON.stringify(response.data)}`);
            axios({
                url: INVOKE_CHAIN_CODE_URL + 'fab_getTransactionInfoByTransactionId?userName=ayushyachitransh@gmail.com&transactionId=' + response.data.transactionId + '&channelName=redirecttesting&networkName=test5',
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '5d93e6fe-b6c6-44dd-8589-be0c4c666771'
                }
            }).then((final_response) => {
                console.log(`Transaction result is: ${JSON.stringify(final_response.data)}`);
                res.status(200).json({ response: final_response.data });
            });
        });
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({ error: error });
        process.exit(1);
    }
});
app.get('/api/query/:car_index', async function (req, res) {
    try {
        const body = {
            userName: "ayushyachitransh@gmail.com",
            chaincodeName: "fabcarchaincode",
            args: [req.params.car_index],
            functionName: "queryCar",
            channelName: "redirecttesting",
            networkName: "test5"
        };

        var raw = JSON.stringify(body);
        axios({
            url: INVOKE_CHAIN_CODE_URL + 'fab_invokeChaincode',
            method: 'post',
            data: raw,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '5d93e6fe-b6c6-44dd-8589-be0c4c666771'
            }
        }).then((response) => {
            console.log(`Transaction has been evaluated, result is: ${JSON.stringify(response.data)}`);
            axios({
                url: INVOKE_CHAIN_CODE_URL + 'fab_getTransactionInfoByTransactionId?userName=ayushyachitransh@gmail.com&transactionId=' + response.data.transactionId + '&channelName=redirecttesting&networkName=test5',
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '5d93e6fe-b6c6-44dd-8589-be0c4c666771'
                }
            }).then((final_response) => {
                console.log(`Transaction result is: ${JSON.stringify(final_response.data)}`);
                res.status(200).json({ response: response.data });
            });
        });
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({ error: error });
        process.exit(1);
    }
});
app.post('/api/addcar/', async function (req, res) {
    try {
        const body = {
            userName: "ayushyachitransh@gmail.com",
            chaincodeName: "fabcarchaincode",
            args: Object.keys(req.body).map(function (_) { return req.body[_]; }),
            functionName: "createCar",
            channelName: "redirecttesting",
            networkName: "test5",
            chaincodeVersion: 1
        };

        var raw = JSON.stringify(body);
        axios({
            url: INVOKE_CHAIN_CODE_URL + 'fab_invokeChaincode',
            method: 'post',
            data: raw,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '5d93e6fe-b6c6-44dd-8589-be0c4c666771'
            }
        }).then((response) => {
            console.log(`Transaction has been evaluated, result is: ${JSON.stringify(response.data)}`);
            axios({
                url: INVOKE_CHAIN_CODE_URL + 'fab_getTransactionInfoByTransactionId?userName=ayushyachitransh@gmail.com&transactionId=' + response.data.transactionId + '&channelName=redirecttesting&networkName=test5',
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '5d93e6fe-b6c6-44dd-8589-be0c4c666771'
                }
            }).then((final_response) => {
                console.log(`Transaction result is: ${JSON.stringify(final_response.data)}`);
                res.status(200).json({ response: final_response.data });
            });

        });
    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
    }
})
app.post('/api/changeowner/', async function (req, res) {
    try {
        const body = {
            userName: "ayushyachitransh@gmail.com",
            chaincodeName: "fabcarchaincode",
            args: Object.keys(req.body).map(function (_) { return req.body[_]; }),
            functionName: "changeCarOwner",
            channelName: "redirecttesting",
            networkName: "test5"
        };

        var raw = JSON.stringify(body);
        axios({
            url: INVOKE_CHAIN_CODE_URL + 'fab_invokeChaincode',
            method: 'post',
            data: raw,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '5d93e6fe-b6c6-44dd-8589-be0c4c666771'
            }
        }).then((response) => {
            console.log(`Transaction has been evaluated, result is: ${JSON.stringify(response.data)}`);
            axios({
                url: INVOKE_CHAIN_CODE_URL + 'fab_getTransactionInfoByTransactionId?userName=ayushyachitransh@gmail.com&transactionId=' + response.data.transactionId + '&channelName=redirecttesting&networkName=test5',
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '5d93e6fe-b6c6-44dd-8589-be0c4c666771'
                }
            }).then((final_response) => {
                console.log(`Transaction result is: ${JSON.stringify(final_response.data)}`);
                res.status(200).json({ response: final_response.data });
            });
        });
    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
})

app.get('/health', function (req, res, next) {
    res.json({ status: 'UP' });
});
app.listen(8004);
