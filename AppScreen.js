  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _regenerator = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  _$$_REQUIRE(_dependencyMap[3]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[5]);
  var _reactRedux = _$$_REQUIRE(_dependencyMap[6]);
  var _reactNative = _$$_REQUIRE(_dependencyMap[7]);
  var _reactNativeSplashScreen = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _reactNativeNavigationBarColor = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _reactNativeSizeMatters = _$$_REQUIRE(_dependencyMap[10]);
  var _reactNativeConfig = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _auditCheck = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _alertModal = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _rootStack = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _darkTheme = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _lightTheme = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[16]));
  var _NetworkConnectivity = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[17]));
  var _localization = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[18]));
  var _utils = _$$_REQUIRE(_dependencyMap[19]);
  var _loader = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[20]));
  var _inAppPopup = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[21]));
  var _index = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[22]));
  var _index2 = _$$_REQUIRE(_dependencyMap[23]);
  var _constant = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[24]));
  var _errorReportingModule = _$$_REQUIRE(_dependencyMap[25]);
  var _actions = _$$_REQUIRE(_dependencyMap[26]);
  var _BottomSheet = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[27]));
  var _UpdateModel = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[28]));
  var _helperFunctions = _$$_REQUIRE(_dependencyMap[29]);
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  var AppScreen = function AppScreen() {
    var dispatch = (0, _reactRedux.useDispatch)();
    var userMode = (0, _reactRedux.useSelector)(function (state) {
      var _state$auth, _state$auth$userInfo;
      return state == null ? undefined : (_state$auth = state.auth) == null ? undefined : (_state$auth$userInfo = _state$auth.userInfo) == null ? undefined : _state$auth$userInfo.ui_mode;
    });
    var shouldShowErrorModal = (0, _reactRedux.useSelector)(function (state) {
      return state.localData.shouldShowErrorModal;
    });
    var forceUpdateResponse = (0, _reactRedux.useSelector)(function (state) {
      var _state$auth2;
      return state == null ? undefined : (_state$auth2 = state.auth) == null ? undefined : _state$auth2.forceUpdateResponse;
    });
    var _useState = (0, _react.useState)(userMode === 'DARK' ? true : userMode !== 'LIGHT'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      dark = _useState2[0],
      setDark = _useState2[1];
    var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      androidAppIntegrityStatus = _useState4[0],
      setAndroidAppIntegrityStatus = _useState4[1];
    var appIntegrityRetryAttempts = (0, _react.useRef)(3);
    var appIntegrityRetryIntervals = (0, _react.useRef)(1000);
    var appIntegrityRetryCount = (0, _react.useRef)(0);
    var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      showForceUpdateDialog = _useState6[0],
      setShowForceUpdateDialog = _useState6[1];
    var theme = dark ? _darkTheme.default : _lightTheme.default;
    (0, _react.useEffect)(function () {
      onClose();
      (function _callee() {
        return _regenerator.default.async(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _regenerator.default.awrap(_auditCheck.default.versionChecker(dispatch));
            case 2:
            case "end":
              return _context.stop();
          }
        }, null, null, null, Promise);
      })();
      _reactNativeSplashScreen.default.hide();
      dispatch((0, _actions.forceUpdateRequest)());
      return function () {
        onClose();
      };
    }, []);
    (0, _react.useEffect)(function () {
      setShowForceUpdateDialog((0, _helperFunctions.checkIfForceUpdateRequired)(forceUpdateResponse));
    }, [forceUpdateResponse]);
    (0, _react.useEffect)(function () {
      adobeCall();
    }, []);
    var adobeCall = function adobeCall() {};
    (0, _react.useEffect)(function () {
      setDark(userMode === 'DARK' ? true : userMode !== 'LIGHT');
    }, [userMode]);
    (0, _react.useEffect)(function () {
      try {
        (0, _reactNativeNavigationBarColor.default)(theme.colors.background.body.primary, !dark);
      } catch (e) {
        console.log('changeNavigationBarColor - ' - e);
      }
    }, [dark]);
    (0, _react.useEffect)(function () {
      if (androidAppIntegrityStatus === _constant.default.appIntegrityStatus.LOADING) {
        if ((0, _utils.isAndroid)() && _auditCheck.default.isAppIntegrityEnabled()) {
          callAndroidPlayIntegrity();
        } else if ((0, _utils.isIos)() && _auditCheck.default.isAppIntegrityEnabled()) {
          try {
            _reactNative.NativeModules.AppIntegrityModule.call(function (level1) {
              var level1Res = Object.values(level1).filter(function (obj) {
                return obj;
              }).length === 0;
              _auditCheck.default.IsJailBrokenV2().then(function (level2) {
                var level2Res = Object.values(level2).filter(function (obj) {
                  return obj;
                }).length === 0;
                if (level1Res === true || level2Res === true) {
                  setAndroidAppIntegrityStatus(_constant.default.appIntegrityStatus.SUCCESS);
                } else {
                  playIntegrityResponseHasError({
                    level1: level1,
                    level2: level2
                  });
                }
              }).catch(function (e) {
                playIntegrityResponseHasError(e);
              });
            });
          } catch (e) {
            playIntegrityResponseHasError(e);
          }
        } else {
          setAndroidAppIntegrityStatus(_constant.default.appIntegrityStatus.SUCCESS);
        }
      }
    }, [androidAppIntegrityStatus]);
    var isInternetReachable = function isInternetReachable(_isInternetReachable) {
      _isInternetReachable && setAndroidAppIntegrityStatus(function (preValue) {
        return preValue !== _constant.default.appIntegrityStatus.SUCCESS ? _constant.default.appIntegrityStatus.LOADING : preValue;
      });
    };
    var playIntegrityResponse = function playIntegrityResponse(res) {
      var appIntegrityRes = res;
      if (res.status === 'success') {
        try {
          appIntegrityRes = (res == null ? undefined : res.res) && JSON.parse(res == null ? undefined : res.res);
          if (appIntegrityRes.accountDetails.appLicensingVerdict === _constant.default.androidAppIntegrityResponse.LICENSED && appIntegrityRes.appIntegrity.appRecognitionVerdict === _constant.default.androidAppIntegrityResponse.PLAY_RECOGNIZED && _constant.default.androidAppIntegrityResponse.DEVICE_INTEGRITY.every(function (deviceIntegrity) {
            return appIntegrityRes.deviceIntegrity.deviceRecognitionVerdict.includes(deviceIntegrity);
          })) {
            setAndroidAppIntegrityStatus(_constant.default.appIntegrityStatus.SUCCESS);
          } else {
            playIntegrityResponseHasError(res);
          }
        } catch (_unused) {
          playIntegrityResponseHasError(res);
        }
      } else {
        playIntegrityResponseHasError(res);
      }
    };
    var playIntegrityResponseHasError = function playIntegrityResponseHasError(res) {
      appIntegrityRetryCount.current++;
      if (appIntegrityRetryCount.current === appIntegrityRetryAttempts.current || (0, _utils.isIos)()) {
        var errorCode = "" + new Date().getTime();
        setAndroidAppIntegrityStatus(_constant.default.appIntegrityStatus.FAILED);
        _errorReportingModule.errorModule.log("PlayIntegrityResponse * " + errorCode + " * " + JSON.stringify(res), false, true);
        dispatch((0, _index2.showErrorModal)({
          showError: true,
          message: "Error Code: " + errorCode,
          fullWidth: false,
          showCancelIcon: false,
          placement: 'bottom'
        }));
      } else if (appIntegrityRetryCount.current <= appIntegrityRetryAttempts.current) {
        setTimeout(function () {
          callAndroidPlayIntegrity();
        }, appIntegrityRetryIntervals.current);
      }
    };
    var callAndroidPlayIntegrity = function callAndroidPlayIntegrity() {
      var PlayIntegrity = _reactNative.NativeModules.PlayIntegrity;
      PlayIntegrity && PlayIntegrity.callPlayIntegrityAPI && PlayIntegrity.callPlayIntegrityAPI({
        DECRYPTION_KEY: _reactNativeConfig.default.DECRYPTION_KEY,
        VERIFICATION_KEY: _reactNativeConfig.default.VERIFICATION_KEY
      }, playIntegrityResponse);
    };
    var onClose = function onClose() {
      dispatch((0, _index2.showErrorModal)({
        showError: false,
        message: ''
      }));
    };
    return _react.default.createElement(_nativeBase.NativeBaseProvider, {
      theme: theme
    }, (androidAppIntegrityStatus === _constant.default.appIntegrityStatus.LOADING || androidAppIntegrityStatus === null) && _react.default.createElement(_loader.default, {
      skipBack: true
    }), (_auditCheck.default.IsEmulator() || _auditCheck.default.IsJailBroken()) && androidAppIntegrityStatus === _constant.default.appIntegrityStatus.FAILED || androidAppIntegrityStatus === _constant.default.appIntegrityStatus.FAILED ? _react.default.createElement(_alertModal.default, {
      errorMsg: _auditCheck.default.IsEmulator() ? _localization.default.emulatorErrorObj : _localization.default.jailbrokenErrorObj
    }) : androidAppIntegrityStatus === _constant.default.appIntegrityStatus.SUCCESS && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_rootStack.default, null), _react.default.createElement(_inAppPopup.default, null)), _react.default.createElement(_nativeBase.StatusBar, {
      backgroundColor: theme.colors.background.body.primary,
      barStyle: dark ? 'light-content' : 'dark-content'
    }), shouldShowErrorModal && _react.default.createElement(_index.default, {
      onClose: onClose
    }), _react.default.createElement(_NetworkConnectivity.default, {
      isInternetReachable: isInternetReachable
    }), showForceUpdateDialog && _react.default.createElement(_BottomSheet.default, {
      visible: showForceUpdateDialog,
      isHandle: false,
      sheetHeight: (0, _reactNativeSizeMatters.mvs)(345)
    }, _react.default.createElement(_UpdateModel.default, null)));
  };
  var _default = AppScreen;
  exports.default = _default;
