const dataset = [
  {
    name: "Getting Started",
    id: "gettingStarted",
    route: "/gettingStarted",
    children: [
      {
        name: "Overview",
        id: "overview",
        route: "/gettingStarted/overviewPage"
      }, {
        name: "On Boarding Process",
        id: "onBoardingProcess",
        route: "/gettingStarted/onBoardingProcess"
      }, {
        name: "How Does The Payment Process Work?",
        id: "howDoesThePaymentProcessWork",
        route: "/gettingStarted/howDoesThePaymentProcessWork"
      }
    ]
  }, {
    name: "Web Integration",
    id: "webIntegration",
    route: "/webIntegration",
    children: [
      {
        name: "Checkout Button",
        id: "checkoutButton",
        route: "/webIntegration/checkoutButton"
      }, {
        name: "Integration Kits",
        id: "integrationKits",
        route: "/webIntegration/integrationKits"
      }
    ]
  }, {
    name: "APIs",
    id: "APIs",
    route: "/APIs",
    children: [
      {
        name: "Payment APIs",
        id: "paymentApis",
        route: "/APIs/paymentApis",
        children: [
          {
            name: "Purchase API",
            id: "purchaseAPI",
            route: "/APIs/paymentApis/purchaseAPI",
            children: [
              {
                name: "URLs",
                id: "urls",
                route: "/APIs/paymentApis/purchaseAPI/urls"
              }, {
                name: "Checksum Format",
                id: "checksumFormat",
                route: "/APIs/paymentApis/purchaseAPI/checksumFormat"
              }, {
                name: "Request Parameters",
                id: "requestParameters",
                route: "/APIs/paymentApis/purchaseAPI/requestParameters"
              }, {
                name: "Response checksum",
                id: "responseChecksum",
                route: "/APIs/paymentApis/purchaseAPI/responseChecksum"
              }, {
                name: "Response Parameters",
                id: "responseParameters",
                route: "/APIs/paymentApis/purchaseAPI/responseParameters"
              }, {
                name: "Error Codes",
                id: "errorCodes",
                route: "/APIs/paymentApis/purchaseAPI/errorCodes"
              }
            ]
          }, {
            name: "Refund API",
            id: "refundAPI",
            route: "/APIs/paymentApis/refundAPI",
            children: [
              {
                name: "URLs",
                id: "urls",
                route: "/APIs/paymentApis/refundAPI/urls"
              }, {
                name: "Checksum Calculation Format",
                id: "checksumCalculationFormat",
                route: "/APIs/paymentApis/refundAPI/checksumCalculationFormat"
              }, {
                name: "Request Parameters",
                id: "requestParameters",
                route: "/APIs/paymentApis/refundAPI/requestParameters"
              }, {
                name: "Response Checksum Format",
                id: "responseChecksumFormat",
                route: "/APIs/paymentApis/refundAPI/responseChecksumFormat"
              }, {
                name: "Response Parameters",
                id: "responseParameters",
                route: "/APIs/paymentApis/refundAPI/responseParameters"
              }, {
                name: "Error Codes",
                id: "errorCodes",
                route: "/APIs/paymentApis/refundAPI/errorCodes"
              }
            ]
          }
        ]
      }, {
        name: "Non-Payment APIs",
        id: "nonPaymentAPIs",
        route: "/APIs/nonPaymentAPIs",
        children: [
          {
            name: "Statusquery",
            id: "statusquery",
            route: "/APIs/nonPaymentAPIs/statusquery",
            children: [
              {
                name: "URLs",
                id: "urls",
                route: "/APIs/nonPaymentAPIs/statusquery/urls"
              }, {
                name: "Checksum Format",
                id: "checksumFormat",
                route: "/APIs/nonPaymentAPIs/statusquery/checksumFormat"
              }, {
                name: "Request Parameters",
                id: "requestParameters",
                route: "/APIs/nonPaymentAPIs/statusquery/requestParameters"
              }, {
                name: "Response checksum Format",
                id: "responseChecksumFormat",
                route: "/APIs/nonPaymentAPIs/statusquery/responseChecksumFormat"
              }, {
                name: "Response Parameters",
                id: "responseParameters",
                route: "/APIs/nonPaymentAPIs/statusquery/responseParameters"
              }, {
                name: "Error Codes",
                id: "errorCodes",
                route: "/APIs/nonPaymentAPIs/statusquery/errorCodes"
              }
            ]
          }, {
            name: "Checkpayment Status API",
            id: "checkpaymentStatusApi",
            route: "/APIs/nonPaymentAPIs/checkpaymentStatusApi",
            children: [
              {
                name: "URLs",
                id: "urls",
                route: "/APIs/nonPaymentAPIs/checkpaymentStatusApi/urls"
              }, {
                name: "Checksum Format",
                id: "checksumFormat",
                route: "/APIs/nonPaymentAPIs/checkpaymentStatusApi/checksumFormat"
              }, {
                name: "Request Parameters",
                id: "requestParameters",
                route: "/APIs/nonPaymentAPIs/checkpaymentStatusApi/requestParameters"
              }, {
                name: "Response Parameters",
                id: "responseParameters",
                route: "/APIs/nonPaymentAPIs/checkpaymentStatusApi/responseParameters"
              }, {
                name: "Error Codes",
                id: "errorCodes",
                route: "/APIs/nonPaymentAPIs/checkpaymentStatusApi/errorCodes"
              }
            ]
          }, {
            name: "Getrequeststatus",
            id: "getrequeststatus",
            route: "/APIs/nonPaymentAPIs/getrequeststatus",
            children: [
              {
                name: "URLs",
                id: "urls",
                route: "/APIs/nonPaymentAPIs/getrequeststatus/urls"
              }, {
                name: "Checksum Format",
                id: "checksumFormat",
                route: "/APIs/nonPaymentAPIs/getrequeststatus/checksumFormat"
              }, {
                name: "Request Parameters",
                id: "requestParameters",
                route: "/APIs/nonPaymentAPIs/getrequeststatus/requestParameters"
              }, {
                name: "Response Parameters",
                id: "responseParameters",
                route: "/APIs/nonPaymentAPIs/getrequeststatus/responseParameters"
              }, {
                name: "Error Codes",
                id: "errorCodes",
                route: "/APIs/nonPaymentAPIs/getrequeststatus/errorCodes"
              }
            ]
          }, {
            name: "Getmdr",
            id: "getmdr",
            route: "/APIs/nonPaymentAPIs/getmdr",
            children: [
              {
                name: "URLs",
                id: "urls",
                route: "/APIs/nonPaymentAPIs/getmdr/urls"
              }, {
                name: "Checksum Format",
                id: "checksumFormat",
                route: "/APIs/nonPaymentAPIs/getmdr/checksumFormat"
              }, {
                name: "Request Parameters",
                id: "requestParameters",
                route: "/APIs/nonPaymentAPIs/getmdr/requestParameters"
              }, {
                name: "Response Parameters",
                id: "responseParameters",
                route: "/APIs/nonPaymentAPIs/getmdr/responseParameters"
              }, {
                name: "Error Codes",
                id: "errorCodes",
                route: "/APIs/nonPaymentAPIs/getmdr/errorCodes"
              }
            ]
          }, {
            name: "Gettransactiondetails",
            id: "gettransactiondetails",
            route: "/APIs/nonPaymentAPIs/gettransactiondetails",
            children: [
              {
                name: "URLs",
                id: "urls",
                route: "/APIs/nonPaymentAPIs/gettransactiondetails/urls"
              }, {
                name: "Checksum Format",
                id: "checksumFormat",
                route: "/APIs/nonPaymentAPIs/gettransactiondetails/checksumFormat"
              }, {
                name: "Request Parameters",
                id: "requestParameters",
                route: "/APIs/nonPaymentAPIs/gettransactiondetails/requestParameters"
              }, {
                name: "Response Parameters",
                id: "responseParameters",
                route: "/APIs/nonPaymentAPIs/getgettransactiondetailsmdr/responseParameters"
              }, {
                name: "Error Codes",
                id: "errorCodes",
                route: "/APIs/nonPaymentAPIs/gettransactiondetails/errorCodes"
              }
            ]
          }, {
            name: "Fetchtransactionaldetails",
            id: "fetchtransactionaldetails",
            route: "/APIs/nonPaymentAPIs/fetchtransactionaldetails",
            children: [
              {
                name: "URLs",
                id: "urls",
                route: "/APIs/nonPaymentAPIs/fetchtransactionaldetails/urls"
              }, {
                name: "Checksum Format",
                id: "checksumFormat",
                route: "/APIs/nonPaymentAPIs/fetchtransactionaldetails/checksumFormat"
              }, {
                name: "Request Parameters",
                id: "requestParameters",
                route: "/APIs/nonPaymentAPIs/fetchtransactionaldetails/requestParameters"
              }, {
                name: "Response Parameters",
                id: "responseParameters",
                route: "/APIs/nonPaymentAPIs/fetchtransactionaldetails/responseParameters"
              }, {
                name: "Error Codes",
                id: "errorCodes",
                route: "/APIs/nonPaymentAPIs/fetchtransactionaldetails/errorCodes"
              }
            ]
          },, {
            name: "Gettodaysdata",
            id: "gettodaysdata",
            route: "/APIs/nonPaymentAPIs/gettodaysdata",
            children: [
              {
                name: "URLs",
                id: "urls",
                route: "/APIs/nonPaymentAPIs/gettodaysdata/urls"
              }, {
                name: "Checksum Format",
                id: "checksumFormat",
                route: "/APIs/nonPaymentAPIs/gettodaysdata/checksumFormat"
              }, {
                name: "Request Parameters",
                id: "requestParameters",
                route: "/APIs/nonPaymentAPIs/gettodaysdata/requestParameters"
              }, {
                name: "Response Parameters",
                id: "responseParameters",
                route: "/APIs/nonPaymentAPIs/gettodaysdata/responseParameters"
              }, {
                name: "Error Codes",
                id: "errorCodes",
                route: "/APIs/nonPaymentAPIs/gettodaysdata/errorCodes"
              }
            ]
          }
        ]
      }
    ]
  }
];
export default dataset
