const dataset = [
  {
    name: "Getting Started",
    id: "gettingStarted",
    route: "/gettingStarted/overviewPage",
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
        name: "Payment APIs",
        id: "paymentAPIs",
        route: "/webIntegration/paymentAPIs",
        children: [
          {
            name: "Purchase API",
            id: "purchaseAPI",
            route: "/webIntegration/paymentAPIs/purchaseAPI",
            children: [
              {
                name: "URLs",
                id: "URLs",
                route: "/webIntegration/paymentAPIs/purchaseAPI/URLs"
              }, {
                name: "Checksum Format",
                id: "checksumFormat",
                route: "/webIntegration/paymentAPIs/purchaseAPI/checksumFormat"
              }, {
                name: "Request Parameters",
                id: "requestParameters",
                route: "/webIntegration/paymentAPIs/purchaseAPI/requestParameters"
              }, {
                name: "Response Checksum",
                id: "responseChecksum",
                route: "/webIntegration/paymentAPIs/purchaseAPI/responseChecksum"
              }, {
                name: "Response Parameters",
                id: "responseParameters",
                route: "/webIntegration/paymentAPIs/purchaseAPI/responseParameters"
              }, {
                name: "Error Codes",
                id: "errorCodes",
                route: "/webIntegration/paymentAPIs/purchaseAPI/errorCodes"
              }
            ]
          }
        ]
      }, {
        name: "Refund API",
        id: "refundAPI",
        route: "/webIntegration/refundAPI",
        children: [
          {
            name: "URLs",
            id: "URLs",
            route: "/webIntegration/refundAPI/URLs"
          }, {
            name: "Checksum Format",
            id: "checksumFormat",
            route: "/webIntegration/refundAPI/checksumFormat"
          }, {
            name: "Request Parameters",
            id: "requestParameters",
            route: "/webIntegration/refundAPI/requestParameters"
          }, {
            name: "Response Parameters",
            id: "responseParameters",
            route: "/webIntegration/refundAPI/responseParameters"
          }, {
            name: "Error Codes",
            id: "errorCodes",
            route: "/webIntegration/refundAPI/errorCodes"
          }
        ]
      }
    ]
  }
];
export default dataset
