function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var arrowLeft = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwb2x5Z29uIHBvaW50cz0iMzAuOCw0NS43IDkuMSwyNCAzMC44LDIuMyAzMi4yLDMuNyAxMS45LDI0IDMyLjIsNDQuMyAgIi8+PC9nPjwvc3ZnPg==';

var arrowRight = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTEuOCw0NS43IDEwLjQsNDQuMyAzMC44LDI0IDEwLjQsMy43IDExLjgsMi4zIDMzLjUsMjQgICIvPjwvZz48L3N2Zz4=';

var Button = {
  position: 'absolute',
  top: '85%',
  fontSize: 0,
  letterSpacing: -5000,
  background: 'center no-repeat',
  backgroundColor: '#f1f1f1',
  backgroundSize: 20,
  width: 40,
  height: 40,
  padding: 10,
  boxShadow: '0px 1px 5px #000',
  borderRadius: '50%',
  border: 0,
  display: 'block',
  cursor: 'pointer',
  transition: 'all .3s ease'
};
var ButtonHover = {
  backgroundColor: '#ddd'
};
var ButtonLeft = {
  left: 10,
  backgroundImage: "url(" + arrowLeft + ")"
};
var ButtonRight = {
  right: 10,
  backgroundImage: "url(" + arrowRight + ")"
};

var definePositionButton = function definePositionButton(buttonPosition, buttonDirection, ButtonDirectionSide) {
  var positions = ['default', 'default-outer', 'center', 'center-outer'];
  if (buttonPosition !== undefined && !positions.includes(buttonPosition)) return;

  if (buttonDirection && (buttonPosition === 'default-outer' || buttonPosition === 'center-outer')) {
    ButtonDirectionSide[buttonDirection] -= 25;
  }

  if (buttonDirection && (buttonPosition === 'center' || buttonPosition === 'center-outer')) {
    ButtonDirectionSide.top = '40%';
  }
};

var ArrowButton = function ArrowButton(_ref) {
  var handleClick = _ref.handleClick,
      buttonDirection = _ref.buttonDirection,
      buttonPosition = _ref.buttonPosition,
      buttonBgColor = _ref.buttonBgColor;

  var _useState = React.useState(false),
      hoverButton = _useState[0],
      setHoverButton = _useState[1];

  var ButtonDirectionSide = buttonDirection === 'left' ? ButtonLeft : ButtonRight;
  definePositionButton(buttonPosition, buttonDirection, ButtonDirectionSide);

  var styleButtons = _extends({}, Button, ButtonDirectionSide);

  if (buttonBgColor && buttonBgColor["default"]) styleButtons.backgroundColor = buttonBgColor["default"];

  if (hoverButton) {
    if (buttonBgColor && buttonBgColor.hover) ButtonHover.backgroundColor = buttonBgColor.hover;
    styleButtons = _extends({}, styleButtons, ButtonHover);
  }

  var handleHoverButton = function handleHoverButton() {
    setHoverButton(!hoverButton);
  };

  return React__default.createElement("button", {
    style: styleButtons,
    onMouseEnter: handleHoverButton,
    onMouseOut: handleHoverButton,
    onClick: handleClick
  });
};

ArrowButton.defaultProps = {
  buttonDirection: 'left'
};

var Container = {
  margin: 20,
  position: 'relative'
};
var SelectedImage = {
  width: '100%',
  height: 500,
  marginBottom: 8,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};
var Carousel = {
  position: 'relative'
};
var Images = {
  display: 'flex',
  maxWidth: '100%',
  overflowX: 'hidden'
};
var borderSize = 3;
var ImageSelected = {
  border: borderSize + "px solid"
};
var Image = {
  marginRight: 10,
  height: 150,
  minWidth: 150,
  border: borderSize + "px solid #ffa70000",
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

var ReactFancyVitrine = function ReactFancyVitrine(_ref) {
  var images = _ref.images,
      containerWidth = _ref.containerWidth,
      borderColorSelected = _ref.borderColorSelected,
      buttonPosition = _ref.buttonPosition,
      buttonBgColor = _ref.buttonBgColor,
      className = _ref.className;

  var _useState = React.useState(0),
      selectedImageIndex = _useState[0],
      setSelectedImageIndex = _useState[1];

  var _useState2 = React.useState(),
      selectedImage = _useState2[0],
      setSelectedImage = _useState2[1];

  var carouselItemsRef = React.useRef([]);
  React.useEffect(function () {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(0, images.length);
      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  var handleSelectedImageChange = function handleSelectedImageChange(newIdx) {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);

      if (carouselItemsRef !== null && carouselItemsRef !== void 0 && carouselItemsRef.current[newIdx]) {
        var _carouselItemsRef$cur;

        carouselItemsRef === null || carouselItemsRef === void 0 ? void 0 : (_carouselItemsRef$cur = carouselItemsRef.current[newIdx]) === null || _carouselItemsRef$cur === void 0 ? void 0 : _carouselItemsRef$cur.scrollIntoView({
          inline: 'center',
          behavior: 'smooth'
        });
      }
    }
  };

  var handleRightClick = function handleRightClick() {
    if (images && images.length > 0) {
      var newIdx = selectedImageIndex + 1;

      if (newIdx >= images.length) {
        newIdx = 0;
      }

      handleSelectedImageChange(newIdx);
    }
  };

  var handleLeftClick = function handleLeftClick() {
    if (images && images.length > 0) {
      var newIdx = selectedImageIndex - 1;

      if (newIdx < 0) {
        newIdx = images.length - 1;
      }

      handleSelectedImageChange(newIdx);
    }
  };

  return React__default.createElement("div", {
    style: _extends({}, Container, {
      width: containerWidth
    }),
    className: className
  }, React__default.createElement("div", {
    style: _extends({}, SelectedImage, {
      backgroundImage: "url(" + (selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.url) + ")"
    })
  }), React__default.createElement("div", {
    style: Carousel
  }, React__default.createElement("div", {
    style: Images
  }, images && images.map(function (image, idx) {
    var imageStyle = _extends({}, Image, {
      backgroundImage: "url(" + image.url + ")"
    });

    if (selectedImageIndex === idx) {
      imageStyle = _extends({}, imageStyle, ImageSelected, {
        borderColor: borderColorSelected
      });
    }

    if (images.length - 1 === idx) {
      imageStyle = _extends({}, imageStyle, {
        marginRight: 0
      });
    }

    return React__default.createElement("div", {
      onClick: function onClick() {
        return handleSelectedImageChange(idx);
      },
      style: imageStyle,
      key: image.id,
      ref: function ref(el) {
        return carouselItemsRef.current[idx] = el;
      }
    });
  }))), React__default.createElement(ArrowButton, {
    buttonDirection: 'left',
    buttonBgColor: buttonBgColor,
    buttonPosition: buttonPosition,
    handleClick: handleLeftClick
  }), React__default.createElement(ArrowButton, {
    buttonDirection: 'right',
    buttonBgColor: buttonBgColor,
    buttonPosition: buttonPosition,
    handleClick: handleRightClick
  }));
};

ReactFancyVitrine.defaultProps = {
  containerWidth: 600,
  borderColorSelected: '#732400',
  buttonPosition: 'bottom'
};

module.exports = ReactFancyVitrine;
//# sourceMappingURL=index.js.map
