sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.clienti",
		settings : {
			id : "clienti"
		},
		async: true
	}).placeAt("content");
});