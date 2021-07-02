sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
    "../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, History, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("sap.ui.demo.clienti.controller.Detail", {
		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
			var vrb = this.getView().byId('idclienti').getText();	
			var list,
			binding,
			filter;	
			list = this.getView().byId("productsTable2");
			
			var sQuery = vrb;
			filter = new sap.ui.model.Filter("IDCliente",FilterOperator.EQ , sQuery);
			
			binding = list.getBinding("items");
			binding.filter(filter,"Application");
			binding.refresh(true);



			var listx,
			binding,
			filter;	
			listx = this.getView().byId("productsTable3");
			
			var sQuery = vrb;
			filter = new sap.ui.model.Filter("IDCliente",FilterOperator.EQ , sQuery);
			
			binding = listx.getBinding("items");
			binding.filter(filter,"Application");
			binding.refresh(true);


		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("overview", {}, true);
			}

		},
	
		onPrint: function() {
			window.print();
		}
	});
});