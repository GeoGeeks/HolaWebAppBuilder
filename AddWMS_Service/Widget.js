define(['dojo/_base/declare', 'jimu/BaseWidget', "dijit/form/Button", "dojo/dom","esri/layers/WMSLayer","esri/layers/WMSLayerInfo", "dojo/domReady!"],
  function (declare, BaseWidget, Button, dom,WMSLayer,WMSLayerInfo) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-miwidget',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      // postCreate: function() {
      //   this.inherited(arguments);
      //   console.log('postCreate');
      // },

      startup: function () {
       // esriConfig.defaults.io.proxyUrl = "http://fheredia.esrico.local/proxy/proxy.ashx";
       esriConfig.defaults.io.corsEnabledServers.push("http://sig.jbb.gov.co");
        this.inherited(arguments);
        this.mapIdNode.innerHTML = 'map id:' + this.map.id;
        console.log('startup');
        var widget = this;//en js cuando se usa el objeto this se esta haciendo referencia al contexto del objeto, por esta razon se crea para este caso 
        //una variable que tendra el contexto
        
        var myButton = new Button({
          onClick: function () {
           widget.alerta();
          }
        }, "miBoton").startup();
      },
      alerta: function(){
        //alert("hola Mundo");
       var miWMSLayer = new WMSLayer(this.config.servicioWms);//aqui funciona el objeto this, en la linea 24 se creo la variable y en la 29 se usa, al momento d
       //invocar el metodo el contexto no es del boton es del objeto invocador
       miWMSLayer.visibleLayers = ["ctie1985c"];
       this.map.addLayers([miWMSLayer]);
       miWMSLayer.on("error", function (response){
        console.log("Error: %s", response.error.message);
      });
      }

      // onOpen: function(){
      //   console.log('onOpen');
      // },

      // onClose: function(){
      //   console.log('onClose');
      // },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });