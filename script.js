var particleSystem = null;
    var stage = null;

   
    window.addEventListener('load', function () {
    
      stage = new createjs.Stage('myCanvas');

      
      particleSystem = new particlejs.ParticleSystem();

      
      stage.addChild(particleSystem.container);

      
      particleSystem.importFromJson(

        {
    "bgColor": "#00000",
    "width": 4000,
    "height": 4000,
    "emitFrequency": 3000,
    "startX": 1500,
    "startXVariance": "3000",
    "startY": 2500,
    "startYVariance": "3000",
    "initialDirection": 0,
    "initialDirectionVariance": 360,
    "initialSpeed": 1,
    "initialSpeedVariance": "0",
    "friction": -0.01,
    "accelerationSpeed": 0,
    "accelerationDirection": 0,
    "startScale": "0.01",
    "startScaleVariance": "0",
    "finishScale": "0",
    "finishScaleVariance": "0.5",
    "lifeSpan": "200",
    "lifeSpanVariance": "0",
    "startAlpha": 0.6,
    "startAlphaVariance": 0,
    "finishAlpha": "0",
    "finishAlphaVariance": 0,
    "shapeIdList": [
        "circle"
    ],
    "startColor": {
        "hue": 25,
        "hueVariance": 20,
        "saturation": 0,
        "saturationVariance": 0,
        "luminance": 40,
        "luminanceVariance": 100
    },
    "blendMode": true,
    "alphaCurveType": "0",
    "VERSION": "1.0.0"
    }
       
      );

      
      createjs.Ticker.framerate = 60;
      
      createjs.Ticker.timingMode = createjs.Ticker.RAF;
     
      createjs.Ticker.addEventListener('tick', handleTick);
    });

    function handleTick() {
     
      particleSystem.update();

      
      stage.update();
    }
