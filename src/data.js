const Data = {
  "gettingStarted": {
    "overview": {
      "desc": "Welcome to the Developers Guide. With our range of developer friendly APIs and easy to integrate code kits, you can start accepting payments on your website in no time.  Currently, we offer three products to help you accept digital payments on your website.",
      "compulsary": [
        "Jio Money Payment Gateway ",
        "JioMoney will help you in setting up the payment page. The customer is redirected from your website to JioMoney payment page where he/she can complete the transaction by choosing provided payment options such as include debit/credit cards, net banking, other wallets and UPI",
        "Jio Money Payment Gateway for PCI-DSS compliant Merchants ",
        "Merchants need to collect the customer card details on their own website and post them to JioMoney. JioMoney processes the transaction at the backend. The customer would not be stopped at JioMoney payment page. Only PCI-DSS compliant merchants are applicable to avail this product.",
        "Jio Money Wallet",
        "In this mode, the customer first selects ‘Pay using JioMoney’ option on the merchant’s website. On selecting, the customer is redirected from merchant’s website to JioMoney’s website where he/she can use JioMoney wallet balance to complete the payment.  In case of insufficient balance, the customer can load the balance from the saved debit/credit cards or net banking to complete the transaction in the same payment flow."
      ]
    },
    "onBoardingProcess": [
      "Completed the signup process on our merchant portal here", "Received clientID, merchantID and Checksum key from our sales team"
    ],
    "howDoesThePaymentProcessWork ": {
      "desc": "On the payment checkout page of the merchant’s website, the merchant collects information about the purchase of the customer.\nThe merchant then redirects the customer to the Jio Money wallet page by making\nan HTTPS POST request to our server. \n\n\n\n \n\n\n\n \n\n\n\nIn the merchant initiated POST REQUEST, one of the\nmandatory parameters is named as checksum. The details of this hash\nparameter have been covered in the later section. But it is absolutely\ncritical for the merchant to calculate the checksum correctly and post to\nus in the request. When the transaction POST REQUEST hits the Jio Money server, a new transaction entry is created in the Jio Money Database. Jio\nMoney creates a unique transaction id  to\nidentify the transaction at our end. This identifier is known as the JioMoney\nTransaction ID. \n\n\n\n \n\n\n\nWith the POST REQUEST, customer would be re-directed to Jio\nMoney’s payment page. Customer pays the amount using his/her wallet balance. If there is an insufficient balance,  he/she can chose other options such as  Credit Card, Debit Card, Net Banking, UPI etc to complete the transaction in the same\npayment flow. The customer goes through the necessary\nauthorization/authentication process at bank’s login page, and the bank gives\nthe success/failure response back to Jio Money. \n\n\n\n \n\n\n\nJioMoney marks the transaction status on\nthe basis of response received from Bank. JioMoney provides the final transaction response string to the merchant through a POST RESPONSE. The parameters in this response are covered in the subsequent sections. \n\n\n\nIn the POST RESPONSE sent by JioMoney, you\nwould receive the final status of the transaction. You will receive the checksum\nparameter here also. Similar to step 3, it is absolutely crucial to\nverify this checksum value at your end and then only accept/reject the order.\nThis is done to strictly avoid any tampering attempt by the user."
    }
  },
  "webIntegration": {
    "checkoutButton": {
      "desc": "The simplest way to accept payments is by\nembedding our checkout button on your website. Edit the General and Transactional level parameters to\ninitiate the transaction. Refer our Purchase API documentation to know more\nabout the individual parameters. You can\ncustomize the button by writing rules against. JM_Wallet_Button.",
      "meth": "\n\n\n<form\nname=\"payment\" method=\"POST\" class\n=”JM_Wallet_Button” action=\"https://testpg.rpay.co.in/reliance-webpay/v1.0/jiopayments\">\n\n\n\n\n<!--\nGeneral Info --> \n\n\n\n<input\ntype='hidden' name=\"version\" value=\"2.0\"/>\n\n\n\n\n<input\ntype='hidden' name=\"merchantid\" value=\"100001000014146\"/>\n\n\n\n\n<input\ntype='hidden' name=\"clientid\" value=\"10000002\"/>\n\n\n\n\n<input\ntype='hidden' name=\"merchantname\" value=\"TEST\"/>\n\n\n\n\n<input\ntype='hidden' name=\"channel\" value=\"WEB\"/>\n\n\n\n\n<input\ntype='hidden' name=\"returl\" value=\"http://61.16.175.3:8089/misimul/purchaseResult.jsp\"/>\n\n\n\n\n<input\ntype='hidden' name=\"checksum\" value=\"748db6f87766ce9f8aef0fe740c15ce658e614410f767a8b68a3e658f0bf05e8\"/>\n\n\n\n\n<input\ntype='hidden' name=\"token\" value=\"\"/>\n\n\n\n\n<!--\nTransaction Info --> \n\n\n\n<input\ntype='hidden' name=\"transaction.extref\" value=\"P8564G73I19I3P6\"/>\n\n\n\n\n<input\ntype='hidden' name=\"transaction.timestamp\" value=\"20170203173956\"/>\n\n\n\n\n<input\ntype='hidden' name=\"transaction.txntype\" value=\"PURCHASE\"/>\n\n\n\n\n<input\ntype='hidden' name=\"transaction.amount\" value=\"1.00\"/>\n\n\n\n\n<input\ntype='hidden' name=\"transaction.currency\" value=\"INR\"/>\n\n\n\n\n<input\ntype='hidden' name=\"subscriber.mobilenumber\" value=\"7738221020\"/>\n\n\n\n\n<input\ntype='hidden' name=\"subscriber.customerid\" value=\"7738221020\"/>\n\n\n\n\n<input\ntype='hidden' name=\"productdescription\" value=\"Product1\"/>\n\n\n\n\n<input\ntype='hidden' name=\"udf1\" value=\"u1\"/>\n\n\n\n\n<input\ntype='hidden' name=\"udf2\" value=\"u2\"/>\n\n\n\n\n<input\ntype='hidden' name=\"udf3\" value=\"u3\"/>\n\n\n\n\n<input\ntype='hidden' name=\"udf4\" value=\"u4\"/>\n\n\n\n\n<input\ntype='hidden' name=\"udf5\" value=\"u5\"/>\n\n\n\n\n<input\ntype=\"submit\" value=\"Jio Pay\" /> \n\n\n\n</form>\n\n\n",
      "desc2": "Once, you embed the checkout button, you\nwill have to generated the checksum in order to post along with the request. To\ngenerate the checksum, the request data is arranged in a pipe separated format\nwhich is then passed to HMAC-SHA256 along with the checksum key provided to\ngenerate the checksum \n\n\n\nSample checksum format on the right side \n\n\n\n<input type='hidden' name=\"checksum\"\nvalue=\"748db6f87766ce9f8aef0fe740c15ce658e614410f767a8b68a3e658f0bf05e8\"/>\n\n\n\nThe response message is sent to the returl specified in\nthe request message. The response is a browser response and will be posted as a\nkey-value pair and key name is response. \n\n\nThe response fields are pipe delimited with the\nchecksum being the last element. The checksum (HMAC-SHA256) is computed for all\nfields delimited by pipe (|) and appended to the end."
    },
    "integrationKits": {
      "desc": "Jio Money provides quick-integration kits\nin all major languages. Please refer following resources based on your tech\nstack. "
    }
  },
  "Apis": {
    "paymentApis": {
      "consistsApis": [
        "Purchase API to make payment requests to Jio Money Server ", "Refund API to make refund requests for completed purchase transactions "
      ],
      "desc": "Payment APIs consists of two APIs",
      "purchaseApi": {
        "desc": "This API allows merchant to post payment requests to Jio Money server. ",
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
              "text": "Version",
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
          "description": [
            {
              "text": "Version number should be 2.0",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "8 digit ClientID key as provided you by JioMoney team -Sample Value: 1000XXXXX",
              "datatype": ["Numeric"],
              "length": "8",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "15 digit MerchantID key as provided by Jio Money team -Sample Value: 100000005555501",
              "datatype": ["Numeric"],
              "length": "15",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "WEB for Desktop websites\n\n\nMOBILE for Mobile websites ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Token field should be kept empty in the request as well as in the checksum calculation",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Return response URL where the merchant wants to receive the response from JioMoney ",
              "datatype": ["URL"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum of the specific fields combined. Please see Checksum Generation section for the elements to be included for computing checksum.",
              "datatype": [
                "Alphanumeric", "special characters"
              ],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Order ID or  Unique transaction Id for tracking purposes to be provided by the merchant",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "20"
            }, {
              "text": "14 digit timestamp at which the transaction is originated (format: yyyyMMddHHmmss)",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": ""
            }, {
              "text": "Value/Amount of the transaction should be in two decimals",
              "datatype": [
                "Numeric", "special char"
              ],
              "length": "0",
              "minLength": "4",
              "maxLength": "112"
            }, {
              "text": "The value of this field should be : PURCHASE",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Default INR",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Mobile number of the customer",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Name of the Customer. It gets pre-filled in the signup form",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "50"
            }, {
              "text": "Email of the customer",
              "datatype": [
                "Alphanumeric", "special characters"
              ],
              "length": "0",
              "minLength": "0",
              "maxLength": "64"
            }, {
              "text": "Address Line1 of the customer.",
              "datatype": [
                "Alphanumeric", "special characters"
              ],
              "length": "0",
              "minLength": "0",
              "maxLength": "35"
            }, {
              "text": "Address Line2 of the customer.",
              "datatype": [
                "Alphanumeric", "special characters"
              ],
              "length": "0",
              "minLength": "0",
              "maxLength": "35"
            }, {
              "text": "City.",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "40"
            }, {
              "text": "State",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "20"
            }, {
              "text": "Postal Code",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "10"
            }, {
              "text": "Item Number",
              "datatype": [""],
              "length": "0-9",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Name or Description of the item purchased",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "45"
            }, {
              "text": "Name or Description of the item purchased",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "45"
            }, {
              "text": "Cost of the item in INR",
              "datatype": [""],
              "length": "0",
              "minLength": "4",
              "maxLength": "12"
            }, {
              "text": "Item quantity.",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Global note details",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "90"
            }, {
              "text": "Description about the product",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "45"
            }, {
              "text": "Additional parameters apart from those in request parameters can be passed in udf fields. For example Insurance company will pass policy number. Toll plaza will pass vehicle number etc. if udf fields are part of the request then same will echoed in the response. (characters more than max limit will get truncated)",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "20 for udf1 to udf4",
              "maxLength2": "100 for udf5"
            }
          ]
        },
        "responseChecksum": {
          "desc": "The response message is sent to the returl specified in the request message. The response is a browser response and will be posted as a key-value pair and key name is response. The response fields are pipe delimited with the checksum being the last element. The checksum (HMAC-SHA256) is computed for all fields delimited by pipe (|) and appended to the end.",
          "tags": [
            "ErrorCode",
            "ClientId",
            "MerchantId",
            "CustomerId",
            "MerchantTxnRefNum",
            "JioTxnRefNum",
            "TxnAmount",
            "Status",
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
          ]
        },
        "responseParameters": {
          "fieldName": [
            "ErrorCode",
            "ClientId",
            "MerchantId",
            "CustomerId",
            "TransactionRefNum",
            "JioTxnRefNum",
            "TxnAmount",
            "Status",
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
          "description": [
            {
              "text": "000 if successful, otherwise the response code will be as returned by the processor.\n\n\nPlease refer here for the complete list of response messages",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input ",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Transaction.extref from the input(MerchantTxnRefNum)",
              "datatype": ["AlphaNumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Provided by JioMoney",
              "datatype": ["AlphaNumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "If a processing error occurred",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "If ErrorCode is not empty",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Transaction time stamp recorded at our servers (format:yyyyMMddHHmmss)",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Last four digits are visible and the remaining are XXXX",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "DC/CC/NB/JM\n\n\n\nDC: Debit Card \n\n\nCC: Credit Card\n\n\n\nNB: Net Banking\n\n\n\nJM:  JIo Money",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "VISA/MASTER",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "HMAC-SHA256 checksum using response fields specified in Checksum generation Section",
              "datatype": ["AlphaNumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
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
      },
      "refundApi": {
        "desc": "Refund API allows merchants to process refund of payments back to the customer ",
        "urls": {
          "testUrl": "https://testpgpay.jiomoney.com/reliance-webpay/jiorefund",
          "productionUrl": "https://pp2pay.jiomoney.com/reliance-webpay/jiorefund"
        },
        "checksumCalculationFormat": {
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
          "description": [
            {
              "text": "Name of the API : REFUND in this case",
              "dataType": ["Alpha"],
              "minLength": "0",
              "maxLength": "16"
            }, {
              "text": "Time at which the transaction is originated in yyyyMMddHHmmss format",
              "dataType": ["Alphanumeric"],
              "minLength": "0",
              "maxLength": "29"
            }, {
              "text": "Version number that needs to be part of the request 2.0 in this case",
              "dataType": [
                "Alphanumeric", "special char"
              ],
              "minLength": "3",
              "maxLength": "7"
            }, {
              "text": "15 digit Merchant ID given by Reliance JioMoney",
              "dataType": ["Numeric"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Unique transaction ref number provided by the merchant to uniquely identify the refund transaction.",
              "dataType": ["Alphanumeric"],
              "minLength": "1",
              "maxLength": "20"
            }, {
              "text": "Refund amount.\n\n\n\nEg: 12.50 or 1000.00",
              "dataType": [
                "Numeric", "special char (.)"
              ],
              "minLength": "4",
              "maxLength": "13"
            }, {
              "text": "Original purchase transaction ref number received by the merchant from JioMoney in Purchase response.",
              "dataType": ["Alphanumeric"],
              "minLength": "12",
              "maxLength": "20"
            }, {
              "text": "Original purchase transaction timestamp received by the merchant from JioMoney in Purchase response.",
              "dataType": ["Alphanumeric"],
              "minLength": "0",
              "maxLength": "29"
            }, {
              "text": "Value should be passed as NA",
              "dataType": ["Alphanumeric"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum value computed from request parameters",
              "dataType": ["Alphanumeric"],
              "minLength": "0",
              "maxLength": "0"
            }
          ]
        },
        "responseChecksumFormat": {
          "tags": [
            "merchant_Id",
            "api_name",
            "timestamp",
            "tran_ref_no",
            "jm_tran_ref_no",
            "txn_amount",
            "txn_status",
            "error_code"
          ]
        },
        "responseParameters": {
          "fieldName": [
            {
              "text": "api_name"
            }, {
              "text": "api_status"
            }, {
              "text": "api_msg"
            }, {
              "text": "version"
            }, {
              "text": "timestamp"
            }, {
              "text": "merchant_id"
            }, {
              "text": "tran_ref_no"
            }, {
              "text": "txn_amount"
            }, {
              "text": "jm_tran_ref_no"
            }, {
              "text": "txn_status"
            }, {
              "text": "error_code"
            }, {
              "text": "mobile_no"
            }, {
              "text": "checksum"
            }
          ],
          "description": [
            {
              "text": "REFUND",
              "dataType": ["Alpha"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "1=Success/ 0= Failed",
              "dataType": ["Numeric"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "JIO Money Payment",
              "dataType": ["Alpha"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "dataType": ["Numeric"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "yyyyMMddHHmmss format",
              "dataType": ["-"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "dataType": ["Numeric"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As passed originally",
              "dataType": ["Alphanumeric"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "dataType": ["Numeric"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As passed originally",
              "dataType": ["Alphanumeric"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "SUCCESS/FAILED",
              "dataType": ["Alpha"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "000 for success and for other error codes please refer the error code section.",
              "dataType": ["Numeric"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "As in the input",
              "dataType": ["Numeric"],
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum value computed from response parameters",
              "dataType": ["Alphanumeric"],
              "minLength": "0",
              "maxLength": "0"
            }
          ]
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
      }
    },
    "nonPaymentApis": {
      "statusquery": {
        "desc": "This API is to verify status of a transaction with JioMoney. This API provides an additional layer of verification of a transaction post receiving browser response. This API needs to be called immediately after getting browser response. Merchants can verify the status and other parameters received in the response to check for any tampering by user.",
        "urls": {
          "testUrl": "https://testpg.rpay.co.in/reliance-webpay/v1.0/payment/status",
          "productionUrl": "https://testpg.rpay.co.in/reliance-webpay/v1.0/payment/status"
        },
        "checksumFormat": {
          "tags": ["CLIENT_ID", "MERCHANT_ID", "APINAME", "TRAN_REF_NO"]
        },
        "requestParameters": {
          "fieldName": [
            {
              "text": "VERSION",
              "mandatory": 1
            }, {
              "text": "API_NAME",
              "mandatory": 1
            }, {
              "text": "CLIENT_ID",
              "mandatory": 1
            }, {
              "text": "MERCHANT_ID",
              "mandatory": 1
            }, {
              "text": "TRAN_REF_NO",
              "mandatory": 1
            }, {
              "text": "CHECKSUM",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "API Version number.\n\n\nSample Value : 1.0",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Name of the API.\n\n  \nSample Value : STATUSQUERY\n\n  \n \n\n\n",
              "datatype": ["ALPHANUMERIC"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Client Id given by Reliance Jio Money\n\n\nSample Value : 12345678\n\n\n \n\n\n",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant Id given by Reliance Jio Money\n\n  \n \n\n\n",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Transaction extref number provided by the merchant\n  during the purchase transaction.\n\n  \nSample Value : 1RB4PL03X5VT\n\n  \n \n\n\n",
              "datatype": ["ALPHANUMERIC"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum Value for the above Checksum generation\n  format using the same Checksum seed.\n\n  \nSample Value : 57966c8f918451f71c8c",
              "datatype": ["ALPHANUMERIC"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
        },
        "responseChecksumFormat": {
          "desc": "No checksum in JioMoney response for this API"
        },
        "responseParameters": {
          "fieldName": [
            {
              "text": "VERSION",
              "mandatory": 0
            }, {
              "text": "API_NAME",
              "mandatory": 0
            }, {
              "text": "API_STATUS",
              "mandatory": 0
            }, {
              "text": "API_MSG",
              "mandatory": 0
            }, {
              "text": "CLIENT_ID",
              "mandatory": 0
            }, {
              "text": "MERCHANT_ID",
              "mandatory": 0
            }, {
              "text": "TRAN_REF_NO",
              "mandatory": 0
            }, {
              "text": "JM_TRAN_REF_NO",
              "mandatory": 0
            }, {
              "text": "TXN_AMOUNT",
              "mandatory": 0
            }, {
              "text": "TXN_TYPE",
              "mandatory": 0
            }, {
              "text": "TXN_STATUS",
              "mandatory": 0
            }
          ],
          "description": [
            {
              "text": "API Version number.",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Name of the API.(STATUSQUERY)",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "It shows whether the API request was success or\n  failure. 0 for Failure and 1 for Success",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Description for API_STATUS code.",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Client Id given by Reliance Jio Money",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant Id given by Reliance Jio Money",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Transaction extref number provided by the merchant\n  during the purchase transaction.",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Jio Money Transaction Reference Number.",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Transaction Amount.",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "JM: JioMoney, CC: Credit Card, DB: Debit Card, IB: Internet   Banking",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "SUCCESS or FAILURE",
              "datatype": [""],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
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
      "checkpaymentStatusApi": {
        "desc": "This API provides the status of the transaction. It is also useful as an additional layer of verification of a transaction. Merchants can verify the status and other parameters received in the response to check for tampering by user.",
        "urls": {
          "testUrl": "https://testbill.rpay.co.in:8443/Services/TransactionInquiry",
          "productionUrl": "https://pp2bill.jiomoney.com:8443/Services/TransactionInquiry"
        },
        "checksumFormat": {
          "tags": ["CHECKPAYMENTSTATUS", "timestamp", "mid"]
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
              "text": "MID",
              "mandatory": 1
            }, {
              "text": "Txntimestamp",
              "mandatory": 0
            }, {
              "text": "Checksum",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "It should always be CHECKPAYMENTSTATUS",
              "datatype": ["alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which request is triggered\n\n\n\n20170606144424",
              "datatype": ["numeric\n\n\nyyyyMMddHHmmss"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant id to be passed in the field\n\n\n100001000020437",
              "datatype": ["numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "To fetch transaction based on the timestamp provided. Threshold is 45 days prior to current dateTimestamp\n\n\n\n20170606144424",
              "datatype": ["numeric\n\n\nyyyyMMddHHmmss"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum should be passed along with request.",
              "datatype": ["alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
        },
        "responseParameters": {
          "fieldName": [
            {
              "text": "mid",
              "mandatory": 0
            }, {
              "text": "tran_ref_no",
              "mandatory": 0
            }, {
              "text": "jm_tran_ref_no",
              "mandatory": 0
            }, {
              "text": "txn_amount",
              "mandatory": 0
            }, {
              "text": "txn_time_stamp",
              "mandatory": 0
            }, {
              "text": "card_no",
              "mandatory": 0
            }, {
              "text": "txn_type",
              "mandatory": 0
            }, {
              "text": "card_type",
              "mandatory": 0
            }, {
              "text": "txn_status",
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
              "text": "error_code",
              "mandatory": 0
            }, {
              "text": "response_msg",
              "mandatory": 0
            }, {
              "text": "request_type",
              "mandatory": 0
            }
          ],
          "description": [
            {
              "text": "Merchant Id given by Reliance Jio Money ",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant transaction reference number",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "JioMoney transaction reference number",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Transaction Amount",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which transaction took place",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Last four digits are visible and the remaining are XXXX\n\n\n\nWhat will be card no when NB as transaction",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "DC/CC/NB/JM/WT",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "VISA/MASTER/Maestro/DIners",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "“SUCCESS”/”success”/”FAILED”/”failed”\n\n\nAwaited /Bounced",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "User defined field based on what is sent in the request",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "User defined field based on what is sent in the request",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "User defined field based on what is sent in the request",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "User defined field based on what is sent in the request",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "For successful transactions -000/Please refer the error codes given in table",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "“APPROVED”/”approved”\n  in case of successful transactions/Else decline reason from PG",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "PURCHASE/LOADMONEY/ P2P/ P2M/ AUTH/ CANCEL/ BILLPAYMENT/  REFUND",
              "datatype": ["String"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
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
      "getrequeststatus": {
        "desc": "To check the status of a requests like refund.",
        "urls": {
          "testUrl": "https://testbill.rpay.co.in:8443/Services/TransactionInquiry",
          "productionUrl": "https://pp2bill.jiomoney.com:8443/Services/TransactionInquiry"
        },
        "checksumFormat": {
          "tags": ["GETREQUESTSTATUS", "timestamp", "mid"]
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
              "text": "Mid",
              "mandatory": 1
            }, {
              "text": "Checksum",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "GETREQUESTSTATUS",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which request is triggered\n\n\nyyyyMMddHHmmss",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant id to be passed in the field",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum should be passed along with request.",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
        },
        "responseParameters": {
          "fieldName": [
            {
              "text": "api_status",
              "mandatory": 0
            }, {
              "text": "Api_msg",
              "mandatory": 0
            }, {
              "text": "Api_name",
              "mandatory": 0
            }, {
              "text": "Timestamp",
              "mandatory": 0
            }, {
              "text": "Jm_tran_ref_no",
              "mandatory": 0
            }, {
              "text": "tran_ref_no",
              "mandatory": 0
            }, {
              "text": "request_type",
              "mandatory": 0
            }, {
              "text": "refund_amount",
              "mandatory": 0
            }, {
              "text": "txn_amount",
              "mandatory": 0
            }, {
              "text": "txn_status",
              "mandatory": 0
            }
          ],
          "description": [
            {
              "text": " ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": " ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": " ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": " ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": " ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": " ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": " ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": " ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": " ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": " ",
              "datatype": [" "],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
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
      "getmdr": {
        "urls": {
          "testUrl": "https://testbill.rpay.co.in:8443/Services/TransactionInquiry",
          "productionUrl": "https:// pp2pay.rpay.co.in/reliance-webpay/v1.0/jiopayments"
        },
        "checksumFormat": {
          "tags": ["GETMDR", "timestamp", "mid"]
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
              "text": "Mid",
              "mandatory": 1
            }, {
              "text": "Checksum",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "GETREQUESTSTATUS",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which request is triggered\n\n\nyyyyMMddHHmmss",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant id to be passed in the field",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum should be passed along with request.",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
        },
        "responseParameters": {
          "fieldName": [
            {
              "text": "api_name",
              "mandatory": 1
            }, {
              "text": "Timestamp",
              "mandatory": 1
            }, {
              "text": "Mid",
              "mandatory": 1
            }, {
              "text": "Checksum",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "GETREQUESTSTATUS",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which request is triggered\n\n\nyyyyMMddHHmmss",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant id to be passed in the field",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum should be passed along with request.",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
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
      "gettransactiondetails": {
        "urls": {
          "testUrl": "https://testbill.rpay.co.in:8443/Services/TransactionInquiry",
          "productionUrl": "https://pp2bill.jiomoney.com:8443/Services/TransactionInquiry"
        },
        "checksumFormat": {
          "tags": ["GETMDR", "timestamp", "mid"]
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
              "text": "Mid",
              "mandatory": 1
            }, {
              "text": "Checksum",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "GETREQUESTSTATUS",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which request is triggered\n\n\nyyyyMMddHHmmss",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant id to be passed in the field",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum should be passed along with request.",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
        },
        "responseParameters": {
          "fieldName": [
            {
              "text": "api_name",
              "mandatory": 1
            }, {
              "text": "Timestamp",
              "mandatory": 1
            }, {
              "text": "Mid",
              "mandatory": 1
            }, {
              "text": "Checksum",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "GETREQUESTSTATUS",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which request is triggered\n\n\nyyyyMMddHHmmss",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant id to be passed in the field",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum should be passed along with request.",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
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
      "fetchtransactionaldetails": {
        "urls": {
          "testUrl": "https://testbill.rpay.co.in:8443/Services/TransactionInquiry",
          "productionUrl": "https://pp2bill.jiomoney.com:8443/Services/TransactionInquiry"
        },
        "checksumFormat": {
          "tags": ["GETMDR", "timestamp", "mid"]
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
              "text": "Mid",
              "mandatory": 1
            }, {
              "text": "Checksum",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "GETREQUESTSTATUS",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which request is triggered\n\n\nyyyyMMddHHmmss",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant id to be passed in the field",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum should be passed along with request.",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
        },
        "responseParameters": {
          "fieldName": [
            {
              "text": "api_name",
              "mandatory": 1
            }, {
              "text": "Timestamp",
              "mandatory": 1
            }, {
              "text": "Mid",
              "mandatory": 1
            }, {
              "text": "Checksum",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "GETREQUESTSTATUS",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which request is triggered\n\n\nyyyyMMddHHmmss",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant id to be passed in the field",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum should be passed along with request.",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
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
      "gettodaysdata": {
        "urls": {
          "testUrl": "https://testbill.rpay.co.in:8443/Services/TransactionInquiry",
          "productionUrl": "https://pp2bill.jiomoney.com:8443/Services/TransactionInquiry"
        },
        "checksumFormat": {
          "tags": ["GETMDR", "timestamp", "mid"]
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
              "text": "Mid",
              "mandatory": 1
            }, {
              "text": "Checksum",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "GETREQUESTSTATUS",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which request is triggered\n\n\nyyyyMMddHHmmss",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant id to be passed in the field",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum should be passed along with request.",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
        },
        "responseParameters": {
          "fieldName": [
            {
              "text": "api_name",
              "mandatory": 1
            }, {
              "text": "Timestamp",
              "mandatory": 1
            }, {
              "text": "Mid",
              "mandatory": 1
            }, {
              "text": "Checksum",
              "mandatory": 1
            }
          ],
          "description": [
            {
              "text": "GETREQUESTSTATUS",
              "datatype": ["Alpha"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Time at which request is triggered\n\n\nyyyyMMddHHmmss",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Merchant id to be passed in the field",
              "datatype": ["Numeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }, {
              "text": "Checksum should be passed along with request.",
              "datatype": ["Alphanumeric"],
              "length": "0",
              "minLength": "0",
              "maxLength": "0"
            }
          ]
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
      }
    }
  }
}
export default Data;
