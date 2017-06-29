const Data = {
  "introduction": {
    "overview": {
      "desc": "Welcome to JioMoney API documentation. You can start accepting digital payments using Jio Money wallet holders. ",
      "compulsary": ["Completed the signup process on our merchant portal here", "Received clientID, merchantID and Checksum key from our sales team"]
    },
    "paymentFlow": ["Customer is redirected from your website to JioMoney website after he/she selects “Pay using JioMoney” option ", "Customer lands on the JioMoney page and completes the transaction using JioMoney wallet balance ", "If there is not enough balance in the wallet, customer can load money from multiple other options such as credit/debit card, net banking, UPI etc. and finish the transaction in the same payment flow.  "]
  },
  "webIntegration": {
    "desc": "JioMoney uses REST to accept payment\nrequests from the merchant. The merchant makes POST requests to JioMoney to\nsend payment related information. In addition to the payment information, the\nmerchant also have to send Checksum in the request. Checksum ensures that payment\ninformation is not changed during the transmission.  ",
    "paymentApis": {
      "desc": "Payment APIs consists of two APIs",
      "purchaseApi": {
        "desc": "Using purchase API, the merchant can execute any purchase transaction on his/her website. ",
        "urls": {
          "testUrl": "https://testpg.rpay.co.in/reliance-webpay/v1.0/jiopayments",
          "productionUrl": "https://pp2pay.rpay.co.in/reliance-webpay/v1.0/jiopayments"
        },
        "checksumFormat": {
          "tags": [
            "ClientID",
            "Transaction Amount",
            "Order ID",
            "Channel",
            "MerchantID",
            "Token",
            "Return URL",
            "Timestamp",
            "PURCHASE",
            "Mobile Number",
            "Product Description",
            "UDF1",
            "UDF2",
            "UDF3",
            "UDF4",
            "UDF5",
            "Standing Instruction Flag"
          ]
        },
        "requestParameters": {
          "fieldName": [
            {
              "text": "Clientid",
              "mandatory": 1
            }, {
              "text": "Clientid",
              "mandatory": 1
            }, {
              "text": "Merchantid",
              "mandatory": 1
            }, {
              "text": "Channel",
              "mandatory": 1
            }, {
              "text": "Token",
              "mandatory": 1
            }, {
              "text": "Returl",
              "mandatory": 1
            }, {
              "text": "Checksum",
              "mandatory": 1
            }, {
              "text": "Transaction",
              "mandatory": 0
            }, {
              "text": "transaction.extref",
              "mandatory": 1
            }, {
              "text": "transaction.timestamp",
              "mandatory": 1
            }, {
              "text": "transaction.amount",
              "mandatory": 1
            }, {
              "text": "transaction.txntype",
              "mandatory": 1
            }, {
              "text": "transaction.currency",
              "mandatory": 1
            }, {
              "text": "Subscriber",
              "mandatory": 0
            }, {
              "text": "subscriber.mobilenumber",
              "mandatory": 1
            }, {
              "text": "subscriber.customername",
              "mandatory": 0
            }, {
              "text": "subscriber.email",
              "mandatory": 0
            }, {
              "text": "subscriber.addline1",
              "mandatory": 0
            }, {
              "text": "subscriber.addline2",
              "mandatory": 0
            }, {
              "text": "subscriber.city",
              "mandatory": 0
            }, {
              "text": "subscriber.state",
              "mandatory": 0
            }, {
              "text": "subscriber.zipcode",
              "mandatory": 0
            }, {
              "text": "CartItems[0..9]",
              "mandatory": 0
            }, {
              "text": "cartItems [0].sno",
              "mandatory": 0
            }, {
              "text": "cartItems [0].description",
              "mandatory": 0
            }, {
              "text": "cartItems [0].cost",
              "mandatory": 0
            }, {
              "text": "cartItems [0].quantity",
              "mandatory": 0
            }, {
              "text": "Globalnote",
              "mandatory": 0
            }, {
              "text": "productdescription",
              "mandatory": 0
            }, {
              "text": "udf1",
              "mandatory": 0
            }, {
              "text": "udf2",
              "mandatory": 0
            }, {
              "text": "udf3",
              "mandatory": 0
            }, {
              "text": "udf4",
              "mandatory": 0
            }, {
              "text": "udf5",
              "mandatory": 0
            }
          ],
          "dataType": [
            ["Numeric"],
            ["Numeric"],
            ["Numeric"],
            ["Alpha"],
            [
              "Alphanumeric ", "special characters"
            ],
            ["URL "],
            [
              "Alphanumeric ", "special characters"
            ],
            [""],
            ["Alphanumeric "],
            ["Numeric"],
            [
              "Numeric", "special char (.)"
            ],
            ["NA"],
            ["Alpha"],
            [""],
            [
              "numeric", "Special character"
            ],
            [
              "Alpha", "Special character"
            ],
            [
              "Alphanumeric ", "special characters"
            ],
            [
              "Alphanumeric ", "special characters"
            ],
            [
              "Alphanumeric ", "special characters"
            ],
            ["Alpha"],
            ["Alpha"],
            ["numeric"],
            [""],
            ["numeric"],
            ["Alphanumeric"],
            [
              "Numeric", "special char (.)"
            ],
            [""],
            [
              "Alphanumeric ", "special characters"
            ],
            ["Alphanumeric "],
            ["Alphanumeric "],
            ["Alphanumeric "],
            ["Alphanumeric "],
            ["Alphanumeric "],
            ["Alphanumeric "]
          ],
          "minValue": [
            " ",
            "8",
            "15",
            "3",
            "87",
            "",
            "65",
            "",
            "1",
            "14",
            "4",
            "NA",
            "3",
            "",
            "13",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "",
            "1",
            "NA",
            "4",
            "",
            "1",
            "0",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "maxValue": [
            "",
            "8",
            "15",
            "6",
            "87",
            " ",
            "65",
            " ",
            "20",
            "14",
            "12",
            "NA",
            "3",
            " ",
            "13",
            "50",
            "64",
            "35",
            "35",
            "40",
            "20",
            "10",
            " ",
            "1",
            "45",
            "12",
            " ",
            "90",
            "45",
            "30",
            "30",
            "30",
            "30",
            "100"
          ],
          "description": [
            "Version number should be 2.0",
            "It is internal field in JioMoney system for uniquely identifying each transaction.Sample Value: 1000XXXXX",
            "Unique value for identifying each merchant. Sample Value: 100000005555501",
            "If the channel is passed in the request message same will be considered for check sum validation Fixed Value: either WEB or MOBILE Sample Value: WEB/MOBILE ",
            "Token should be passed as blank value or empty string (both for creating checksum as well as request)",
            "Return response URL – Response will be sent from the server to the url which is specified in this field ( “returl” parameter)",
            "Checksum of the specific fields combined. Please see Checksum Generation section for the elements to be included for computing checksum.",
            "Refer to the below Transaction fields for specifics.",
            "Order ID, Unique transaction Id for tracking purposes (MerchantTxnRefNumber)",
            "Time at which the transaction is originated (format: yyyyMMddHHmmss)",
            "Value/Amount of the transaction should be in two decimals Sample Value: 12.50 or 1000.00",
            "Transaction Type (PURCHASE/REFUND)",
            "Default INR",
            "Refer to the below Subscriber fields for specifics",
            "It gets pre-filled in the login/signup form. It reduces no of customer inputs. Mobile number of the customer Sample Value: 919812345678",
            "It gets pre-filled in the signup form. It reduces no of customer inputs. Name of the Customer Sample Value: James Anthony",
            "Email of the customer",
            "Address Line1 of the customer.",
            "Address Line2 of the customer.",
            "City.",
            "State",
            "Postal Code",
            "JioMoney allows to show 10 items which were added to the shopping cart in the merchant’s site. Each item should represent with SrNo, description, cost and quantity fields.",
            "Item Number Any value from 0-9",
            "Name or Description of the item purchased ",
            "Cost of the item in INR Sample Value: 12.50 or 1000.00",
            "Item quantity.",
            "Global note details Sample Value: 10% CASHBACK ON HDFC NB",
            "Description about the product",
            "Apart from all the request parameters merchant want to pass extra parameters in the request, please pass that parameter value in udf fields. For example Insurance company will pass policy number. Toll plaza will pass vehicle number etc. if udf fields are part of the request then same will received in the response. (characters more than max limit will get truncated)"
          ]
        },
        "responseChecksum": {},
        "responseParameters": {
          "fieldName": [
            "ErrorCode",
            "ClientId",
            "MerchantId",
            "CustomerId",
            "TransactionRefNum",
            "JioTxnRefNum",
            "TxnAmount",
            "Status ",
            "ResponseMsg",
            "JioTxnTimeStamp",
            "CardNumber",
            "TxnType",
            "CardType",
            "subscriber.mobileno",
            "productdescription",
            "UDF1",
            "UDF2",
            "UDF3",
            "UDF4",
            "UDF5",
            "CheckSum"
          ],
          "dataType": [
            "Numeric",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " "
          ],
          "minValue": [
            "3",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " "
          ],
          "maxValue": [
            "3",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " "
          ],
          "description": [
            "000 is successful, otherwise the response code as returned by the processor",
            "As in the input",
            "As in the input",
            "As in the input",
            "Transaction.extref from the input(MerchantTxnRefNum)",
            "Provided by JioMoney",
            "As in the input",
            "If a processing error occurred",
            "If ErrorCode is not empty",
            "Transaction time stamp (format:yyyyMMddHHmmss)",
            "Last four digits are visible and the remaining are XXXX",
            "DC/CC/NB/JM",
            "VISA/MASTER",
            "As in the input",
            "As in the input",
            "As in the input",
            "As in the input",
            "As in the input",
            "As in the input",
            "As in the input",
            "HMAC-SHA256 checksum using response fields specified in Checksum generation Section"
          ]
        },
        "errorCodes": {
          "errorCode": [
            "000",
            "100",
            "101",
            "102",
            "103",
            "104",
            "105",
            "110",
            "120",
            "121",
            "122",
            "500",
            "501"
          ],
          "message": [
            "Approved",
            "Mandatory Parameter Missing",
            "Your Transaction cannot be processed",
            "Incorrect/Invalid Input Parameters",
            "Transaction.Extref Is Not Valid",
            "Transaction.Amount Is Not Valid",
            "Duplicate Transaction",
            "Not Authorised By User",
            "Unable To Process The Request. Please Try Again After Some Time!!!",
            "Merchant Is Unregistered",
            "Not Opted For JioMoney API Based Payment",
            "Failed",
            "Issuer Declined"
          ]
        }
      }
    },
    "refundApi": {
      "desc": "Refund API allows merchants to process refund of payments back to the customer ",
      "urls": {
        "testUrl": "https://testpg.rpay.co.in/reliance-webpay/v1.0/jiopayments",
        "productionUrl": "https:// pp2pay.rpay.co.in/reliance-webpay/v1.0/jiopayments"
      },
      "checksumFormat": {
        "tags": [
          "merchant_Id",
          "api_name",
          "timestamp",
          "tran_ref_no",
          "txn_amount",
          "org_jm_tran_ref_no",
          "org_txn_timestamp",
          "additional_info"
        ]
      },
      "requestParameters": {
        "fieldName": [
          {
            "text": "api_name",
            "mandatory": 1
          }, {
            "text": "Timestamp",
            "mandatory": 1
          }, {
            "text": "Version",
            "mandatory": 0
          }, {
            "text": "merchant_id",
            "mandatory": 1
          }, {
            "text": "tran_ref_no",
            "mandatory": 1
          }, {
            "text": "txn_amount",
            "mandatory": 1
          }, {
            "text": "org_jm_tran_ref_no",
            "mandatory": 1
          }, {
            "text": "org_txn_timestamp",
            "mandatory": 1
          }, {
            "text": "additional_info",
            "mandatory": 0
          }, {
            "text": "Checksum",
            "mandatory": 1
          }
        ],
        "dataType": [
          ["Alpha"],
          ["Alphanumeric"],
          [
            "Alphanumeric", "special char"
          ],
          ["Numeric"],
          ["Alphanumeric"],
          [
            "Numeric", "special char (.)"
          ],
          ["AlphaNumeric"],
          ["Alphanumeric"],
          ["Alphanumeric"],
          ["Alphanumeric"]
        ],
        "minValue": [
          "16",
          "29",
          "3",
          "15",
          "1",
          "4",
          "12",
          "29",
          "15",
          " "
        ],
        "maxValue": [
          "16",
          "29",
          "7",
          "15",
          "20",
          "13",
          "20",
          "29",
          "15",
          " "
        ],
        "description": [
          "Name of the API : REFUND in this case",
          "Time at which the transaction is originated in yyyyMMddHHmmss format",
          "Version number that needs to be part of the request\n2.0 in this case",
          "Merchant ID given by Reliance JioMoney",
          "Unique transaction ref number provided by the merchant to uniquely identify the refund transaction.",
          "Refund amount.\n Eg: 12.50 or 1000.00",
          "Original purchase transaction ref number received by the merchant from JioMoney in Purchase response.",
          "Original purchase transaction timestamp received by the merchant from JioMoney in Purchase response.",
          "Value should be pass NA",
          "Checksum value computed from request parameters"
        ]
      },
      "responseParameters": {
        "fieldName": [
          {
            "text": "",
            "mandatory": 0
          }
        ],
        "dataType": [
          [" "]
        ],
        "minValue": [" "],
        "maxValue": [" "],
        "description": [" "]
      },
      "errorCodes": {
        "errorCode": [
          "000",
          "130",
          "131",
          "132",
          "133",
          "134",
          "135",
          "136",
          "137",
          "138",
          "139"
        ],
        "message": [
          "Success",
          "Refund Is Not Allowed For Split Settlement Master Transaction",
          "Refund Not Allowed For This Transaction",
          "Full Refund Already Processed For This Transaction",
          "Invalid Input Parameter - Additional_Info",
          "Unable To Process The Refund Transaction",
          "Invalid Input Parameter - Org_Txn_Timestamp",
          "Invalid Input Parameter - Txn_Amount",
          "Refund Not Allowed - Invalid Merchant",
          "Invalid Input Parameter - Merchant_Id",
          "Refund Not Allowed For This Date"
        ]
      }
    },
    "categories": {
      "paymentApis": {
        "desc": "These APIs are used to make payment and refund transactions",
        "examples": ["Purchase API", "Refund API"]
      },
      "informationalApis": {
        "desc": "These APIs are used to get information about prior transactions ",
        "examples": ["Checkpaymentstatus API", "Getrequeststatus API"]
      }
    }
  }
}
export default Data;
