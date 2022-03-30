(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MessageFormat = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function next() {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }

  /**
   * Parent class for errors.
   *
   * @remarks
   * Errors with `type: "warning"` do not necessarily indicate that the parser
   * encountered an error. In addition to a human-friendly `message`, may also
   * includes the `token` at which the error was encountered.
   *
   * @public
   */
  var DateFormatError = /*#__PURE__*/function (_Error) {
    _inherits(DateFormatError, _Error);

    var _super = _createSuper(DateFormatError);

    /** @internal */
    function DateFormatError(msg, token, type) {
      var _this;

      _classCallCheck(this, DateFormatError);

      _this = _super.call(this, msg);
      _this.token = token;
      _this.type = type || 'error';
      return _this;
    }

    return _createClass(DateFormatError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var alpha = function alpha(width) {
    return width < 4 ? 'short' : width === 4 ? 'long' : 'narrow';
  };

  var numeric = function numeric(width) {
    return width % 2 === 0 ? '2-digit' : 'numeric';
  };

  function yearOptions(token, onError) {
    switch (token.char) {
      case 'y':
        return {
          year: numeric(token.width)
        };

      case 'r':
        return {
          calendar: 'gregory',
          year: 'numeric'
        };

      case 'u':
      case 'U':
      case 'Y':
      default:
        onError("".concat(token.desc, " is not supported; falling back to year:numeric"), DateFormatError.WARNING);
        return {
          year: 'numeric'
        };
    }
  }

  function monthStyle(token, onError) {
    switch (token.width) {
      case 1:
        return 'numeric';

      case 2:
        return '2-digit';

      case 3:
        return 'short';

      case 4:
        return 'long';

      case 5:
        return 'narrow';

      default:
        onError("".concat(token.desc, " is not supported with width ").concat(token.width));
        return undefined;
    }
  }

  function dayStyle(token, onError) {
    var char = token.char,
        desc = token.desc,
        width = token.width;
    if (char === 'd') return numeric(width);else {
      onError("".concat(desc, " is not supported"));
      return undefined;
    }
  }

  function weekdayStyle(token, onError) {
    var char = token.char,
        desc = token.desc,
        width = token.width;

    if ((char === 'c' || char === 'e') && width < 3) {
      // ignoring stand-alone-ness
      var msg = "Numeric value is not supported for ".concat(desc, "; falling back to weekday:short");
      onError(msg, DateFormatError.WARNING);
    } // merging narrow styles


    return alpha(width);
  }

  function hourOptions(token) {
    var hour = numeric(token.width);
    var hourCycle;

    switch (token.char) {
      case 'h':
        hourCycle = 'h12';
        break;

      case 'H':
        hourCycle = 'h23';
        break;

      case 'k':
        hourCycle = 'h24';
        break;

      case 'K':
        hourCycle = 'h11';
        break;
    }

    return hourCycle ? {
      hour: hour,
      hourCycle: hourCycle
    } : {
      hour: hour
    };
  }

  function timeZoneNameStyle(token, onError) {
    // so much fallback behaviour here
    var char = token.char,
        desc = token.desc,
        width = token.width;

    switch (char) {
      case 'v':
      case 'z':
        return width === 4 ? 'long' : 'short';

      case 'V':
        if (width === 4) return 'long';
        onError("".concat(desc, " is not supported with width ").concat(width));
        return undefined;

      case 'X':
        onError("".concat(desc, " is not supported"));
        return undefined;
    }

    return 'short';
  }

  function compileOptions(token, onError) {
    switch (token.field) {
      case 'era':
        return {
          era: alpha(token.width)
        };

      case 'year':
        return yearOptions(token, onError);

      case 'month':
        return {
          month: monthStyle(token, onError)
        };

      case 'day':
        return {
          day: dayStyle(token, onError)
        };

      case 'weekday':
        return {
          weekday: weekdayStyle(token, onError)
        };

      case 'period':
        return undefined;

      case 'hour':
        return hourOptions(token);

      case 'min':
        return {
          minute: numeric(token.width)
        };

      case 'sec':
        return {
          second: numeric(token.width)
        };

      case 'tz':
        return {
          timeZoneName: timeZoneNameStyle(token, onError)
        };

      case 'quarter':
      case 'week':
      case 'sec-frac':
      case 'ms':
        onError("".concat(token.desc, " is not supported"));
    }

    return undefined;
  }

  function getDateFormatOptions(tokens) {
    var onError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (error) {
      throw error;
    };
    var options = {};
    var fields = [];

    var _iterator = _createForOfIteratorHelper(tokens),
        _step;

    try {
      var _loop = function _loop() {
        var token = _step.value;
        var error = token.error,
            field = token.field,
            str = token.str;

        if (error) {
          var dte = new DateFormatError(error.message, token);
          dte.stack = error.stack;
          onError(dte);
        }

        if (str) {
          var msg = "Ignoring string part: ".concat(str);
          onError(new DateFormatError(msg, token, DateFormatError.WARNING));
        }

        if (field) {
          if (fields.indexOf(field) === -1) fields.push(field);else onError(new DateFormatError("Duplicate ".concat(field, " token"), token));
        }

        var opt = compileOptions(token, function (msg, isWarning) {
          return onError(new DateFormatError(msg, token, isWarning));
        });
        if (opt) Object.assign(options, opt);
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return options;
  }

  var fields = {
    G: {
      field: 'era',
      desc: 'Era'
    },
    y: {
      field: 'year',
      desc: 'Year'
    },
    Y: {
      field: 'year',
      desc: 'Year of "Week of Year"'
    },
    u: {
      field: 'year',
      desc: 'Extended year'
    },
    U: {
      field: 'year',
      desc: 'Cyclic year name'
    },
    r: {
      field: 'year',
      desc: 'Related Gregorian year'
    },
    Q: {
      field: 'quarter',
      desc: 'Quarter'
    },
    q: {
      field: 'quarter',
      desc: 'Stand-alone quarter'
    },
    M: {
      field: 'month',
      desc: 'Month in year'
    },
    L: {
      field: 'month',
      desc: 'Stand-alone month in year'
    },
    w: {
      field: 'week',
      desc: 'Week of year'
    },
    W: {
      field: 'week',
      desc: 'Week of month'
    },
    d: {
      field: 'day',
      desc: 'Day in month'
    },
    D: {
      field: 'day',
      desc: 'Day of year'
    },
    F: {
      field: 'day',
      desc: 'Day of week in month'
    },
    g: {
      field: 'day',
      desc: 'Modified julian day'
    },
    E: {
      field: 'weekday',
      desc: 'Day of week'
    },
    e: {
      field: 'weekday',
      desc: 'Local day of week'
    },
    c: {
      field: 'weekday',
      desc: 'Stand-alone local day of week'
    },
    a: {
      field: 'period',
      desc: 'AM/PM marker'
    },
    b: {
      field: 'period',
      desc: 'AM/PM/noon/midnight marker'
    },
    B: {
      field: 'period',
      desc: 'Flexible day period'
    },
    h: {
      field: 'hour',
      desc: 'Hour in AM/PM (1~12)'
    },
    H: {
      field: 'hour',
      desc: 'Hour in day (0~23)'
    },
    k: {
      field: 'hour',
      desc: 'Hour in day (1~24)'
    },
    K: {
      field: 'hour',
      desc: 'Hour in AM/PM (0~11)'
    },
    j: {
      field: 'hour',
      desc: 'Hour in preferred cycle'
    },
    J: {
      field: 'hour',
      desc: 'Hour in preferred cycle without marker'
    },
    C: {
      field: 'hour',
      desc: 'Hour in preferred cycle with flexible marker'
    },
    m: {
      field: 'min',
      desc: 'Minute in hour'
    },
    s: {
      field: 'sec',
      desc: 'Second in minute'
    },
    S: {
      field: 'sec-frac',
      desc: 'Fractional second'
    },
    A: {
      field: 'ms',
      desc: 'Milliseconds in day'
    },
    z: {
      field: 'tz',
      desc: 'Time Zone: specific non-location'
    },
    Z: {
      field: 'tz',
      desc: 'Time Zone'
    },
    O: {
      field: 'tz',
      desc: 'Time Zone: localized'
    },
    v: {
      field: 'tz',
      desc: 'Time Zone: generic non-location'
    },
    V: {
      field: 'tz',
      desc: 'Time Zone: ID'
    },
    X: {
      field: 'tz',
      desc: 'Time Zone: ISO8601 with Z'
    },
    x: {
      field: 'tz',
      desc: 'Time Zone: ISO8601'
    }
  };

  var isLetter = function isLetter(char) {
    return char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z';
  };

  function readFieldToken(src, pos) {
    var char = src[pos];
    var width = 1;

    while (src[++pos] === char) {
      ++width;
    }

    var field = fields[char];

    if (!field) {
      var msg = "The letter ".concat(char, " is not a valid field identifier");
      return {
        char: char,
        error: new Error(msg),
        width: width
      };
    }

    return {
      char: char,
      field: field.field,
      desc: field.desc,
      width: width
    };
  }

  function readQuotedToken(src, pos) {
    var str = src[++pos];
    var width = 2;
    if (str === "'") return {
      char: "'",
      str: str,
      width: width
    };

    while (true) {
      var next = src[++pos];
      ++width;

      if (next === undefined) {
        var msg = "Unterminated quoted literal in pattern: ".concat(str || src);
        return {
          char: "'",
          error: new Error(msg),
          str: str,
          width: width
        };
      } else if (next === "'") {
        if (src[++pos] !== "'") return {
          char: "'",
          str: str,
          width: width
        };else ++width;
      }

      str += next;
    }
  }

  function readToken(src, pos) {
    var char = src[pos];
    if (!char) return null;
    if (isLetter(char)) return readFieldToken(src, pos);
    if (char === "'") return readQuotedToken(src, pos);
    var str = char;
    var width = 1;

    while (true) {
      var next = src[++pos];
      if (!next || isLetter(next) || next === "'") return {
        char: char,
        str: str,
        width: width
      };
      str += next;
      width += 1;
    }
  }
  /**
   * Parse an {@link http://userguide.icu-project.org/formatparse/datetime | ICU
   * DateFormat skeleton} string into a {@link DateToken} array.
   *
   * @remarks
   * Errors will not be thrown, but if encountered are included as the relevant
   * token's `error` value.
   *
   * @public
   * @param src - The skeleton string
   *
   * @example
   * ```js
   * import { parseDateTokens } from '@messageformat/date-skeleton'
   *
   * parseDateTokens('GrMMMdd', console.error)
   * // [
   * //   { char: 'G', field: 'era', desc: 'Era', width: 1 },
   * //   { char: 'r', field: 'year', desc: 'Related Gregorian year', width: 1 },
   * //   { char: 'M', field: 'month', desc: 'Month in year', width: 3 },
   * //   { char: 'd', field: 'day', desc: 'Day in month', width: 2 }
   * // ]
   * ```
   */


  function parseDateTokens(src) {
    var tokens = [];
    var pos = 0;

    while (true) {
      var token = readToken(src, pos);
      if (!token) return tokens;
      tokens.push(token);
      pos += token.width;
    }
  }

  /**
   * Returns a date formatter function for the given locales and date skeleton
   *
   * @remarks
   * Uses `Intl.DateTimeFormat` internally.
   *
   * @public
   * @param locales - One or more valid BCP 47 language tags, e.g. `fr` or `en-CA`
   * @param tokens - An ICU DateFormat skeleton string, or an array or parsed
   *   `DateToken` tokens
   * @param onError - If defined, will be called separately for each encountered
   *   parsing error and unsupported feature.
   * @example
   * ```js
   * import { getDateFormatter } from '@messageformat/date-skeleton'
   *
   * // 2006 Jan 2, 15:04:05.789 in local time
   * const date = new Date(2006, 0, 2, 15, 4, 5, 789)
   *
   * let fmt = getDateFormatter('en-CA', 'GrMMMdd', console.error)
   * fmt(date) // 'Jan. 02, 2006 AD'
   *
   * fmt = getDateFormatter('en-CA', 'hamszzzz', console.error)
   * fmt(date) // '3:04:05 p.m. Newfoundland Daylight Time'
   * ```
   */

  function getDateFormatter(locales, tokens, onError) {
    if (typeof tokens === 'string') tokens = parseDateTokens(tokens);
    var opt = getDateFormatOptions(tokens, onError);
    var dtf = new Intl.DateTimeFormat(locales, opt);
    return function (date) {
      return dtf.format(date);
    };
  }
  /**
   * Returns a string of JavaScript source that evaluates to a date formatter
   * function with the same `(date: Date | number) => string` signature as the
   * function returned by {@link getDateFormatter}.
   *
   * @remarks
   * The returned function will memoize an `Intl.DateTimeFormat` instance.
   *
   * @public
   * @param locales - One or more valid BCP 47 language tags, e.g. `fr` or `en-CA`
   * @param tokens - An ICU DateFormat skeleton string, or an array or parsed
   *   `DateToken` tokens
   * @param onError - If defined, will be called separately for each encountered
   *   parsing error and unsupported feature.
   * @example
   * ```js
   * import { getDateFormatterSource } from '@messageformat/date-skeleton'
   *
   * getDateFormatterSource('en-CA', 'GrMMMdd', console.error)
   * // '(function() {\n' +
   * // '  var opt = {"era":"short","calendar":"gregory","year":"numeric",' +
   * //      '"month":"short","day":"2-digit"};\n' +
   * // '  var dtf = new Intl.DateTimeFormat("en-CA", opt);\n' +
   * // '  return function(value) { return dtf.format(value); }\n' +
   * // '})()'
   *
   * const src = getDateFormatterSource('en-CA', 'hamszzzz', console.error)
   * // '(function() {\n' +
   * // '  var opt = {"hour":"numeric","hourCycle":"h12","minute":"numeric",' +
   * //      '"second":"numeric","timeZoneName":"long"};\n' +
   * // '  var dtf = new Intl.DateTimeFormat("en-CA", opt);\n' +
   * // '  return function(value) { return dtf.format(value); }\n' +
   * // '})()'
   *
   * const fmt = new Function(`return ${src}`)()
   * const date = new Date(2006, 0, 2, 15, 4, 5, 789)
   * fmt(date) // '3:04:05 p.m. Newfoundland Daylight Time'
   * ```
   */

  function getDateFormatterSource(locales, tokens, onError) {
    if (typeof tokens === 'string') tokens = parseDateTokens(tokens);
    var opt = getDateFormatOptions(tokens, onError);
    var lines = ["(function() {", "var opt = ".concat(JSON.stringify(opt), ";"), "var dtf = new Intl.DateTimeFormat(".concat(JSON.stringify(locales), ", opt);"), "return function(value) { return dtf.format(value); }"];
    return lines.join('\n  ') + '\n})()';
  }

  /**
   * Base class for errors. In addition to a `code` and a human-friendly
   * `message`, may also includes the token `stem` as well as other fields.
   *
   * @public
   */
  var NumberFormatError = /*#__PURE__*/function (_Error) {
    _inherits(NumberFormatError, _Error);

    var _super = _createSuper(NumberFormatError);

    /** @internal */
    function NumberFormatError(code, msg) {
      var _this;

      _classCallCheck(this, NumberFormatError);

      _this = _super.call(this, msg);
      _this.code = code;
      return _this;
    }

    return _createClass(NumberFormatError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  /** @internal */

  var BadOptionError = /*#__PURE__*/function (_NumberFormatError) {
    _inherits(BadOptionError, _NumberFormatError);

    var _super2 = _createSuper(BadOptionError);

    function BadOptionError(stem, opt) {
      var _this2;

      _classCallCheck(this, BadOptionError);

      _this2 = _super2.call(this, 'BAD_OPTION', "Unknown ".concat(stem, " option: ").concat(opt));
      _this2.stem = stem;
      _this2.option = opt;
      return _this2;
    }

    return _createClass(BadOptionError);
  }(NumberFormatError);
  /** @internal */

  var BadStemError = /*#__PURE__*/function (_NumberFormatError2) {
    _inherits(BadStemError, _NumberFormatError2);

    var _super3 = _createSuper(BadStemError);

    function BadStemError(stem) {
      var _this3;

      _classCallCheck(this, BadStemError);

      _this3 = _super3.call(this, 'BAD_STEM', "Unknown stem: ".concat(stem));
      _this3.stem = stem;
      return _this3;
    }

    return _createClass(BadStemError);
  }(NumberFormatError);
  /** @internal */

  var MaskedValueError = /*#__PURE__*/function (_NumberFormatError3) {
    _inherits(MaskedValueError, _NumberFormatError3);

    var _super4 = _createSuper(MaskedValueError);

    function MaskedValueError(type, prev) {
      var _this4;

      _classCallCheck(this, MaskedValueError);

      _this4 = _super4.call(this, 'MASKED_VALUE', "Value for ".concat(type, " is set multiple times"));
      _this4.type = type;
      _this4.prev = prev;
      return _this4;
    }

    return _createClass(MaskedValueError);
  }(NumberFormatError);
  /** @internal */

  var MissingOptionError = /*#__PURE__*/function (_NumberFormatError4) {
    _inherits(MissingOptionError, _NumberFormatError4);

    var _super5 = _createSuper(MissingOptionError);

    function MissingOptionError(stem) {
      var _this5;

      _classCallCheck(this, MissingOptionError);

      _this5 = _super5.call(this, 'MISSING_OPTION', "Required option missing for ".concat(stem));
      _this5.stem = stem;
      return _this5;
    }

    return _createClass(MissingOptionError);
  }(NumberFormatError);
  /** @internal */

  var PatternError = /*#__PURE__*/function (_NumberFormatError5) {
    _inherits(PatternError, _NumberFormatError5);

    var _super6 = _createSuper(PatternError);

    function PatternError(char, msg) {
      var _this6;

      _classCallCheck(this, PatternError);

      _this6 = _super6.call(this, 'BAD_PATTERN', msg);
      _this6.char = char;
      return _this6;
    }

    return _createClass(PatternError);
  }(NumberFormatError);
  /** @internal */

  var TooManyOptionsError = /*#__PURE__*/function (_NumberFormatError6) {
    _inherits(TooManyOptionsError, _NumberFormatError6);

    var _super7 = _createSuper(TooManyOptionsError);

    function TooManyOptionsError(stem, options, maxOpt) {
      var _this7;

      _classCallCheck(this, TooManyOptionsError);

      var maxOptStr = maxOpt > 1 ? "".concat(maxOpt, " options") : 'one option';
      _this7 = _super7.call(this, 'TOO_MANY_OPTIONS', "Token ".concat(stem, " only supports ").concat(maxOptStr, " (got ").concat(options.length, ")"));
      _this7.stem = stem;
      _this7.options = options;
      return _this7;
    }

    return _createClass(TooManyOptionsError);
  }(NumberFormatError);
  /** @internal */

  var UnsupportedError = /*#__PURE__*/function (_NumberFormatError7) {
    _inherits(UnsupportedError, _NumberFormatError7);

    var _super8 = _createSuper(UnsupportedError);

    function UnsupportedError(stem, source) {
      var _this8;

      _classCallCheck(this, UnsupportedError);

      _this8 = _super8.call(this, 'UNSUPPORTED', "The stem ".concat(stem, " is not supported"));
      _this8.stem = stem;

      if (source) {
        _this8.message += " with value ".concat(source);
        _this8.source = source;
      }

      return _this8;
    }

    return _createClass(UnsupportedError);
  }(NumberFormatError);

  /**
   * Add
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation | numbering-system tags}
   * to locale identifiers
   *
   * @internal
   */
  function getNumberFormatLocales(locales, _ref) {
    var numberingSystem = _ref.numberingSystem;
    if (!Array.isArray(locales)) locales = [locales];
    return numberingSystem ? locales.map(function (lc) {
      var ext = lc.indexOf('-u-') === -1 ? 'u-nu' : 'nu';
      return "".concat(lc, "-").concat(ext, "-").concat(numberingSystem);
    }).concat(locales) : locales;
  }

  // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  function round(x, precision) {
    var y = +x + precision / 2;
    return y - y % +precision;
  }

  function getNumberFormatMultiplier(_ref) {
    var scale = _ref.scale,
        unit = _ref.unit;
    var mult = typeof scale === 'number' && scale >= 0 ? scale : 1;
    if (unit && unit.style === 'percent') mult *= 0.01;
    return mult;
  }
  /**
   * Determine a modifier for the input value to account for any `scale`,
   * `percent`, and `precision-increment` tokens in the skeleton.
   *
   * @internal
   * @remarks
   * With ICU NumberFormatter, the `percent` skeleton would style `25` as "25%".
   * To achieve the same with `Intl.NumberFormat`, the input value must be `0.25`.
   */


  function getNumberFormatModifier(skeleton) {
    var mult = getNumberFormatMultiplier(skeleton);
    var precision = skeleton.precision;

    if (precision && precision.style === 'precision-increment') {
      return function (n) {
        return round(n, precision.increment) * mult;
      };
    } else {
      return function (n) {
        return n * mult;
      };
    }
  }
  /**
   * Returns a string of JavaScript source that evaluates to a modifier for the
   * input value to account for any `scale`, `percent`, and `precision-increment`
   * tokens in the skeleton.
   *
   * @internal
   * @remarks
   * With ICU NumberFormatter, the `percent` skeleton would style `25` as "25%".
   * To achieve the same with `Intl.NumberFormat`, the input value must be `0.25`.
   */

  function getNumberFormatModifierSource(skeleton) {
    var mult = getNumberFormatMultiplier(skeleton);
    var precision = skeleton.precision;

    if (precision && precision.style === 'precision-increment') {
      // see round() above for source
      var setX = "+n + ".concat(precision.increment / 2);
      var res = "x - (x % +".concat(precision.increment, ")");
      if (mult !== 1) res = "(".concat(res, ") * ").concat(mult);
      return "function(n) { var x = ".concat(setX, "; return ").concat(res, "; }");
    }

    return mult !== 1 ? "function(n) { return n * ".concat(mult, "; }") : null;
  }

  /**
   * Given an input ICU NumberFormatter skeleton, does its best to construct a
   * corresponding `Intl.NumberFormat` options structure.
   *
   * @remarks
   * Some features depend on `Intl.NumberFormat` features defined in ES2020.
   *
   * @internal
   * @param onUnsupported - If defined, called when encountering unsupported (but
   *   valid) tokens, such as `decimal-always` or `permille`. The error `source`
   *   may specify the source of an unsupported option.
   *
   * @example
   * ```js
   * import {
   *   getNumberFormatOptions,
   *   parseNumberSkeleton
   * } from '@messageformat/number-skeleton'
   *
   * const src = 'currency/CAD unit-width-narrow'
   * const skeleton = parseNumberSkeleton(src, console.error)
   * // {
   * //   unit: { style: 'currency', currency: 'CAD' },
   * //   unitWidth: 'unit-width-narrow'
   * // }
   *
   * getNumberFormatOptions(skeleton, console.error)
   * // {
   * //   style: 'currency',
   * //   currency: 'CAD',
   * //   currencyDisplay: 'narrowSymbol',
   * //   unitDisplay: 'narrow'
   * // }
   *
   * const sk2 = parseNumberSkeleton('group-min2')
   * // { group: 'group-min2' }
   *
   * getNumberFormatOptions(sk2, console.error)
   * // Error: The stem group-min2 is not supported
   * //   at UnsupportedError.NumberFormatError ... {
   * //     code: 'UNSUPPORTED',
   * //     stem: 'group-min2'
   * //   }
   * // {}
   * ```
   */

  function getNumberFormatOptions(skeleton, onUnsupported) {
    var decimal = skeleton.decimal,
        group = skeleton.group,
        integerWidth = skeleton.integerWidth,
        notation = skeleton.notation,
        precision = skeleton.precision,
        roundingMode = skeleton.roundingMode,
        sign = skeleton.sign,
        unit = skeleton.unit,
        unitPer = skeleton.unitPer,
        unitWidth = skeleton.unitWidth;

    var fail = function fail(stem, source) {
      if (onUnsupported) onUnsupported(new UnsupportedError(stem, source));
    };

    var opt = {};

    if (unit) {
      switch (unit.style) {
        case 'base-unit':
          opt.style = 'decimal';
          break;

        case 'currency':
          opt.style = 'currency';
          opt.currency = unit.currency;
          break;

        case 'measure-unit':
          opt.style = 'unit';
          opt.unit = unit.unit.replace(/.*-/, '');
          if (unitPer) opt.unit += '-per-' + unitPer.replace(/.*-/, '');
          break;

        case 'percent':
          opt.style = 'percent';
          break;

        case 'permille':
          fail('permille');
          break;
      }
    }

    switch (unitWidth) {
      case 'unit-width-full-name':
        opt.currencyDisplay = 'name';
        opt.unitDisplay = 'long';
        break;

      case 'unit-width-hidden':
        fail(unitWidth);
        break;

      case 'unit-width-iso-code':
        opt.currencyDisplay = 'code';
        break;

      case 'unit-width-narrow':
        opt.currencyDisplay = 'narrowSymbol';
        opt.unitDisplay = 'narrow';
        break;

      case 'unit-width-short':
        opt.currencyDisplay = 'symbol';
        opt.unitDisplay = 'short';
        break;
    }

    switch (group) {
      case 'group-off':
        opt.useGrouping = false;
        break;

      case 'group-auto':
        opt.useGrouping = true;
        break;

      case 'group-min2':
      case 'group-on-aligned':
      case 'group-thousands':
        fail(group);
        opt.useGrouping = true;
        break;
    }

    if (precision) {
      switch (precision.style) {
        case 'precision-fraction':
          {
            var minF = precision.minFraction,
                maxF = precision.maxFraction,
                minS = precision.minSignificant,
                maxS = precision.maxSignificant,
                source = precision.source;

            if (typeof minF === 'number') {
              opt.minimumFractionDigits = minF;
              if (typeof minS === 'number') fail('precision-fraction', source);
            }

            if (typeof maxF === 'number') opt.maximumFractionDigits = maxF;
            if (typeof minS === 'number') opt.minimumSignificantDigits = minS;
            if (typeof maxS === 'number') opt.maximumSignificantDigits = maxS;
            break;
          }

        case 'precision-integer':
          opt.maximumFractionDigits = 0;
          break;

        case 'precision-unlimited':
          opt.maximumFractionDigits = 20;
          break;

        case 'precision-increment':
        case 'precision-currency-standard':
          break;

        case 'precision-currency-cash':
          fail(precision.style);
          break;
      }
    }

    if (notation) {
      switch (notation.style) {
        case 'compact-short':
          opt.notation = 'compact';
          opt.compactDisplay = 'short';
          break;

        case 'compact-long':
          opt.notation = 'compact';
          opt.compactDisplay = 'long';
          break;

        case 'notation-simple':
          opt.notation = 'standard';
          break;

        case 'scientific':
        case 'engineering':
          {
            var expDigits = notation.expDigits,
                expSign = notation.expSign,
                _source = notation.source,
                style = notation.style;
            opt.notation = style;
            if (expDigits && expDigits > 1 || expSign && expSign !== 'sign-auto') fail(style, _source);
            break;
          }
      }
    }

    if (integerWidth) {
      var min = integerWidth.min,
          max = integerWidth.max,
          _source2 = integerWidth.source;
      if (min > 0) opt.minimumIntegerDigits = min;

      if (Number(max) > 0) {
        var hasExp = opt.notation === 'engineering' || opt.notation === 'scientific';
        if (max === 3 && hasExp) opt.notation = 'engineering';else fail('integer-width', _source2);
      }
    }

    switch (sign) {
      case 'sign-auto':
        opt.signDisplay = 'auto';
        break;

      case 'sign-always':
        opt.signDisplay = 'always';
        break;

      case 'sign-except-zero':
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/46712
        opt.signDisplay = 'exceptZero';
        break;

      case 'sign-never':
        opt.signDisplay = 'never';
        break;

      case 'sign-accounting':
        opt.currencySign = 'accounting';
        break;

      case 'sign-accounting-always':
        opt.currencySign = 'accounting';
        opt.signDisplay = 'always';
        break;

      case 'sign-accounting-except-zero':
        opt.currencySign = 'accounting'; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/46712

        opt.signDisplay = 'exceptZero';
        break;
    }

    if (decimal === 'decimal-always') fail(decimal);
    if (roundingMode) fail(roundingMode);
    return opt;
  }

  function parseAffixToken(src, pos, onError) {
    var char = src[pos];

    switch (char) {
      case '%':
        return {
          char: '%',
          style: 'percent',
          width: 1
        };

      case '‰':
        return {
          char: '%',
          style: 'permille',
          width: 1
        };

      case '¤':
        {
          var width = 1;

          while (src[++pos] === '¤') {
            ++width;
          }

          switch (width) {
            case 1:
              return {
                char: char,
                currency: 'default',
                width: width
              };

            case 2:
              return {
                char: char,
                currency: 'iso-code',
                width: width
              };

            case 3:
              return {
                char: char,
                currency: 'full-name',
                width: width
              };

            case 5:
              return {
                char: char,
                currency: 'narrow',
                width: width
              };

            default:
              {
                var msg = "Invalid number (".concat(width, ") of \xA4 chars in pattern");
                onError(new PatternError('¤', msg));
                return null;
              }
          }
        }

      case '*':
        {
          var pad = src[pos + 1];
          if (pad) return {
            char: char,
            pad: pad,
            width: 2
          };
          break;
        }

      case '+':
      case '-':
        return {
          char: char,
          width: 1
        };

      case "'":
        {
          var str = src[++pos];
          var _width = 2;
          if (str === "'") return {
            char: char,
            str: str,
            width: _width
          };

          while (true) {
            var next = src[++pos];
            ++_width;

            if (next === undefined) {
              var _msg = "Unterminated quoted literal in pattern: ".concat(str);

              onError(new PatternError("'", _msg));
              return {
                char: char,
                str: str,
                width: _width
              };
            } else if (next === "'") {
              if (src[++pos] !== "'") return {
                char: char,
                str: str,
                width: _width
              };else ++_width;
            }

            str += next;
          }
        }
    }

    return null;
  }

  var isDigit = function isDigit(char) {
    return char >= '0' && char <= '9';
  };

  function parseNumberToken(src, pos) {
    var char = src[pos];

    if (isDigit(char)) {
      var digits = char;

      while (true) {
        var next = src[++pos];
        if (isDigit(next)) digits += next;else return {
          char: '0',
          digits: digits,
          width: digits.length
        };
      }
    }

    switch (char) {
      case '#':
        {
          var width = 1;

          while (src[++pos] === '#') {
            ++width;
          }

          return {
            char: char,
            width: width
          };
        }

      case '@':
        {
          var min = 1;

          while (src[++pos] === '@') {
            ++min;
          }

          var _width = min;
          pos -= 1;

          while (src[++pos] === '#') {
            ++_width;
          }

          return {
            char: char,
            min: min,
            width: _width
          };
        }

      case 'E':
        {
          var plus = src[pos + 1] === '+';
          if (plus) ++pos;
          var expDigits = 0;

          while (src[++pos] === '0') {
            ++expDigits;
          }

          var _width2 = (plus ? 2 : 1) + expDigits;

          if (expDigits) return {
            char: char,
            expDigits: expDigits,
            plus: plus,
            width: _width2
          };else break;
        }

      case '.':
      case ',':
        return {
          char: char,
          width: 1
        };
    }

    return null;
  }

  function parseSubpattern(src, pos, onError) {
    var State;

    (function (State) {
      State[State["Prefix"] = 0] = "Prefix";
      State[State["Number"] = 1] = "Number";
      State[State["Suffix"] = 2] = "Suffix";
    })(State || (State = {}));

    var prefix = [];
    var number = [];
    var suffix = [];
    var state = State.Prefix;
    var str = '';

    while (pos < src.length) {
      var char = src[pos];

      if (char === ';') {
        pos += 1;
        break;
      }

      switch (state) {
        case State.Prefix:
          {
            var token = parseAffixToken(src, pos, onError);

            if (token) {
              if (str) {
                prefix.push({
                  char: "'",
                  str: str,
                  width: str.length
                });
                str = '';
              }

              prefix.push(token);
              pos += token.width;
            } else {
              var _token = parseNumberToken(src, pos);

              if (_token) {
                if (str) {
                  prefix.push({
                    char: "'",
                    str: str,
                    width: str.length
                  });
                  str = '';
                }

                state = State.Number;
                number.push(_token);
                pos += _token.width;
              } else {
                str += char;
                pos += 1;
              }
            }

            break;
          }

        case State.Number:
          {
            var _token2 = parseNumberToken(src, pos);

            if (_token2) {
              number.push(_token2);
              pos += _token2.width;
            } else {
              state = State.Suffix;
            }

            break;
          }

        case State.Suffix:
          {
            var _token3 = parseAffixToken(src, pos, onError);

            if (_token3) {
              if (str) {
                suffix.push({
                  char: "'",
                  str: str,
                  width: str.length
                });
                str = '';
              }

              suffix.push(_token3);
              pos += _token3.width;
            } else {
              str += char;
              pos += 1;
            }

            break;
          }
      }
    }

    if (str) suffix.push({
      char: "'",
      str: str,
      width: str.length
    });
    return {
      pattern: {
        prefix: prefix,
        number: number,
        suffix: suffix
      },
      pos: pos
    };
  }

  function parseTokens(src, onError) {
    var _parseSubpattern = parseSubpattern(src, 0, onError),
        pattern = _parseSubpattern.pattern,
        pos = _parseSubpattern.pos;

    if (pos < src.length) {
      var _parseSubpattern2 = parseSubpattern(src, pos, onError),
          negative = _parseSubpattern2.pattern;

      return {
        tokens: pattern,
        negative: negative
      };
    }

    return {
      tokens: pattern
    };
  }

  function parseNumberAsSkeleton(tokens, onError) {
    var res = {};
    var hasGroups = false;
    var hasExponent = false;
    var intOptional = 0;
    var intDigits = '';
    var decimalPos = -1;
    var fracDigits = '';
    var fracOptional = 0;

    for (var pos = 0; pos < tokens.length; ++pos) {
      var token = tokens[pos];

      switch (token.char) {
        case '#':
          {
            if (decimalPos === -1) {
              if (intDigits) {
                var msg = 'Pattern has # after integer digits';
                onError(new PatternError('#', msg));
              }

              intOptional += token.width;
            } else {
              fracOptional += token.width;
            }

            break;
          }

        case '0':
          {
            if (decimalPos === -1) {
              intDigits += token.digits;
            } else {
              if (fracOptional) {
                var _msg = 'Pattern has digits after # in fraction';
                onError(new PatternError('0', _msg));
              }

              fracDigits += token.digits;
            }

            break;
          }

        case '@':
          {
            if (res.precision) onError(new MaskedValueError('precision', res.precision));
            res.precision = {
              style: 'precision-fraction',
              minSignificant: token.min,
              maxSignificant: token.width
            };
            break;
          }

        case ',':
          hasGroups = true;
          break;

        case '.':
          if (decimalPos === 1) {
            var _msg2 = 'Pattern has more than one decimal separator';
            onError(new PatternError('.', _msg2));
          }

          decimalPos = pos;
          break;

        case 'E':
          {
            if (hasExponent) onError(new MaskedValueError('exponent', res.notation));

            if (hasGroups) {
              var _msg3 = 'Exponential patterns may not contain grouping separators';
              onError(new PatternError('E', _msg3));
            }

            res.notation = {
              style: 'scientific'
            };
            if (token.expDigits > 1) res.notation.expDigits = token.expDigits;
            if (token.plus) res.notation.expSign = 'sign-always';
            hasExponent = true;
          }
      }
    } // imprecise mapping due to paradigm differences


    if (hasGroups) res.group = 'group-auto';else if (intOptional + intDigits.length > 3) res.group = 'group-off';
    var increment = Number("".concat(intDigits || '0', ".").concat(fracDigits));
    if (increment) res.precision = {
      style: 'precision-increment',
      increment: increment
    };

    if (!hasExponent) {
      if (intDigits.length > 1) res.integerWidth = {
        min: intDigits.length
      };

      if (!res.precision && (fracDigits.length || fracOptional)) {
        res.precision = {
          style: 'precision-fraction',
          minFraction: fracDigits.length,
          maxFraction: fracDigits.length + fracOptional
        };
      }
    } else {
      if (!res.precision || increment) {
        res.integerWidth = intOptional ? {
          min: 1,
          max: intOptional + intDigits.length
        } : {
          min: Math.max(1, intDigits.length)
        };
      }

      if (res.precision) {
        if (!increment) res.integerWidth = {
          min: 1,
          max: 1
        };
      } else {
        var dc = intDigits.length + fracDigits.length;

        if (decimalPos === -1) {
          if (dc > 0) res.precision = {
            style: 'precision-fraction',
            maxSignificant: dc
          };
        } else {
          res.precision = {
            style: 'precision-fraction',
            maxSignificant: Math.max(1, dc) + fracOptional
          };
          if (dc > 1) res.precision.minSignificant = dc;
        }
      }
    }

    return res;
  }

  function handleAffix(affixTokens, res, currency, onError, isPrefix) {
    var inFmt = false;
    var str = '';

    var _iterator = _createForOfIteratorHelper(affixTokens),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var token = _step.value;

        switch (token.char) {
          case '%':
            res.unit = {
              style: token.style
            };
            if (isPrefix) inFmt = true;else str = '';
            break;

          case '¤':
            if (!currency) {
              var msg = "The \xA4 pattern requires a currency";
              onError(new PatternError('¤', msg));
              break;
            }

            res.unit = {
              style: 'currency',
              currency: currency
            };

            switch (token.currency) {
              case 'iso-code':
                res.unitWidth = 'unit-width-iso-code';
                break;

              case 'full-name':
                res.unitWidth = 'unit-width-full-name';
                break;

              case 'narrow':
                res.unitWidth = 'unit-width-narrow';
                break;
            }

            if (isPrefix) inFmt = true;else str = '';
            break;

          case '*':
            // TODO
            break;

          case '+':
            if (!inFmt) str += '+';
            break;

          case "'":
            if (!inFmt) str += token.str;
            break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return str;
  }

  function getNegativeAffix(affixTokens, isPrefix) {
    var inFmt = false;
    var str = '';

    var _iterator2 = _createForOfIteratorHelper(affixTokens),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var token = _step2.value;

        switch (token.char) {
          case '%':
          case '¤':
            if (isPrefix) inFmt = true;else str = '';
            break;

          case '-':
            if (!inFmt) str += '-';
            break;

          case "'":
            if (!inFmt) str += token.str;
            break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return str;
  }
  /**
   * Parse an {@link
   * http://unicode.org/reports/tr35/tr35-numbers.html#Number_Format_Patterns |
   * ICU NumberFormatter pattern} string into a {@link Skeleton} structure.
   *
   * @public
   * @param src - The pattern string
   * @param currency - If the pattern includes ¤ tokens, their skeleton
   *   representation requires a three-letter currency code.
   * @param onError - Called when the parser encounters a syntax error. The
   *   function will still return a {@link Skeleton}, but it will be incomplete
   *   and/or inaccurate. If not defined, the error will be thrown instead.
   *
   * @remarks
   * Unlike the skeleton parser, the pattern parser is not able to return partial
   * results on error, and will instead throw. Output padding is not supported.
   *
   * @example
   * ```js
   * import { parseNumberPattern } from '@messageformat/number-skeleton'
   *
   * parseNumberPattern('#,##0.00 ¤', 'EUR', console.error)
   * // {
   * //   group: 'group-auto',
   * //   precision: {
   * //     style: 'precision-fraction',
   * //     minFraction: 2,
   * //     maxFraction: 2
   * //   },
   * //   unit: { style: 'currency', currency: 'EUR' }
   * // }
   * ```
   */


  function parseNumberPattern(src, currency) {
    var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (error) {
      throw error;
    };

    var _parseTokens = parseTokens(src, onError),
        tokens = _parseTokens.tokens,
        negative = _parseTokens.negative;

    var res = parseNumberAsSkeleton(tokens.number, onError);
    var prefix = handleAffix(tokens.prefix, res, currency, onError, true);
    var suffix = handleAffix(tokens.suffix, res, currency, onError, false);

    if (negative) {
      var negPrefix = getNegativeAffix(negative.prefix, true);
      var negSuffix = getNegativeAffix(negative.suffix, false);
      res.affix = {
        pos: [prefix, suffix],
        neg: [negPrefix, negSuffix]
      };
      res.sign = 'sign-never';
    } else if (prefix || suffix) {
      res.affix = {
        pos: [prefix, suffix]
      };
    }

    return res;
  }

  /** @internal */
  function isNumberingSystem(ns) {
    var systems = ['arab', 'arabext', 'bali', 'beng', 'deva', 'fullwide', 'gujr', 'guru', 'hanidec', 'khmr', 'knda', 'laoo', 'latn', 'limb', 'mlym', 'mong', 'mymr', 'orya', 'tamldec', 'telu', 'thai', 'tibt'];
    return systems.indexOf(ns) !== -1;
  }

  // FIXME: subtype is not checked

  /** @internal */
  function isUnit(unit) {
    var types = ['acceleration', 'angle', 'area', 'concentr', 'consumption', 'digital', 'duration', 'electric', 'energy', 'force', 'frequency', 'graphics', 'length', 'light', 'mass', 'power', 'pressure', 'speed', 'temperature', 'torque', 'volume'];

    var _unit$split = unit.split('-', 1),
        _unit$split2 = _slicedToArray(_unit$split, 1),
        type = _unit$split2[0];

    return types.indexOf(type) !== -1;
  }

  var maxOptions = {
    'compact-short': 0,
    'compact-long': 0,
    'notation-simple': 0,
    scientific: 2,
    engineering: 2,
    percent: 0,
    permille: 0,
    'base-unit': 0,
    currency: 1,
    'measure-unit': 1,
    'per-measure-unit': 1,
    'unit-width-narrow': 0,
    'unit-width-short': 0,
    'unit-width-full-name': 0,
    'unit-width-iso-code': 0,
    'unit-width-hidden': 0,
    'precision-integer': 0,
    'precision-unlimited': 0,
    'precision-currency-standard': 0,
    'precision-currency-cash': 0,
    'precision-increment': 1,
    'rounding-mode-ceiling': 0,
    'rounding-mode-floor': 0,
    'rounding-mode-down': 0,
    'rounding-mode-up': 0,
    'rounding-mode-half-even': 0,
    'rounding-mode-half-down': 0,
    'rounding-mode-half-up': 0,
    'rounding-mode-unnecessary': 0,
    'integer-width': 1,
    scale: 1,
    'group-off': 0,
    'group-min2': 0,
    'group-auto': 0,
    'group-on-aligned': 0,
    'group-thousands': 0,
    latin: 0,
    'numbering-system': 1,
    'sign-auto': 0,
    'sign-always': 0,
    'sign-never': 0,
    'sign-accounting': 0,
    'sign-accounting-always': 0,
    'sign-except-zero': 0,
    'sign-accounting-except-zero': 0,
    'decimal-auto': 0,
    'decimal-always': 0
  };
  var minOptions = {
    currency: 1,
    'integer-width': 1,
    'measure-unit': 1,
    'numbering-system': 1,
    'per-measure-unit': 1,
    'precision-increment': 1,
    scale: 1
  };

  function hasMaxOption(stem) {
    return stem in maxOptions;
  }

  function hasMinOption(stem) {
    return stem in minOptions;
  }
  /** @internal */


  function validOptions(stem, options, onError) {
    if (hasMaxOption(stem)) {
      var maxOpt = maxOptions[stem];

      if (options.length > maxOpt) {
        if (maxOpt === 0) {
          var _iterator = _createForOfIteratorHelper(options),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var opt = _step.value;
              onError(new BadOptionError(stem, opt));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          onError(new TooManyOptionsError(stem, options, maxOpt));
        }

        return false;
      } else if (hasMinOption(stem) && options.length < minOptions[stem]) {
        onError(new MissingOptionError(stem));
        return false;
      }
    }

    return true;
  }

  function parseBlueprintDigits(src, style) {
    var re = style === 'fraction' ? /^\.(0*)(\+|#*)$/ : /^(@+)(\+|#*)$/;
    var match = src && src.match(re);

    if (match) {
      var min = match[1].length;

      switch (match[2].charAt(0)) {
        case '':
          return {
            min: min,
            max: min
          };

        case '+':
          return {
            min: min,
            max: null
          };

        case '#':
          {
            return {
              min: min,
              max: min + match[2].length
            };
          }
      }
    }

    return null;
  }

  function parsePrecisionBlueprint(stem, options, onError) {
    var fd = parseBlueprintDigits(stem, 'fraction');

    if (fd) {
      if (options.length > 1) onError(new TooManyOptionsError(stem, options, 1));
      var res = {
        style: 'precision-fraction',
        source: stem,
        minFraction: fd.min
      };
      if (fd.max != null) res.maxFraction = fd.max;
      var option = options[0];

      var _sd = parseBlueprintDigits(option, 'significant');

      if (_sd) {
        res.source = "".concat(stem, "/").concat(option);
        res.minSignificant = _sd.min;
        if (_sd.max != null) res.maxSignificant = _sd.max;
      } else if (option) onError(new BadOptionError(stem, option));

      return res;
    }

    var sd = parseBlueprintDigits(stem, 'significant');

    if (sd) {
      var _iterator = _createForOfIteratorHelper(options),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var opt = _step.value;
          onError(new BadOptionError(stem, opt));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _res = {
        style: 'precision-fraction',
        source: stem,
        minSignificant: sd.min
      };
      if (sd.max != null) _res.maxSignificant = sd.max;
      return _res;
    }

    return null;
  }

  /** @internal */

  var TokenParser = /*#__PURE__*/function () {
    function TokenParser(onError) {
      _classCallCheck(this, TokenParser);

      this.skeleton = {};
      this.onError = onError;
    }

    _createClass(TokenParser, [{
      key: "badOption",
      value: function badOption(stem, opt) {
        this.onError(new BadOptionError(stem, opt));
      }
    }, {
      key: "assertEmpty",
      value: function assertEmpty(key) {
        var prev = this.skeleton[key];
        if (prev) this.onError(new MaskedValueError(key, prev));
      }
    }, {
      key: "parseToken",
      value: function parseToken(stem, options) {
        if (!validOptions(stem, options, this.onError)) return;
        var option = options[0];
        var res = this.skeleton;

        switch (stem) {
          // notation
          case 'compact-short':
          case 'compact-long':
          case 'notation-simple':
            this.assertEmpty('notation');
            res.notation = {
              style: stem
            };
            break;

          case 'scientific':
          case 'engineering':
            {
              var expDigits = null;
              var expSign = undefined;

              var _iterator = _createForOfIteratorHelper(options),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var opt = _step.value;

                  switch (opt) {
                    case 'sign-auto':
                    case 'sign-always':
                    case 'sign-never':
                    case 'sign-accounting':
                    case 'sign-accounting-always':
                    case 'sign-except-zero':
                    case 'sign-accounting-except-zero':
                      expSign = opt;
                      break;

                    default:
                      if (/^\+e+$/.test(opt)) expDigits = opt.length - 1;else {
                        this.badOption(stem, opt);
                      }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              this.assertEmpty('notation');
              var source = options.join('/');
              res.notation = expDigits && expSign ? {
                style: stem,
                source: source,
                expDigits: expDigits,
                expSign: expSign
              } : expDigits ? {
                style: stem,
                source: source,
                expDigits: expDigits
              } : expSign ? {
                style: stem,
                source: source,
                expSign: expSign
              } : {
                style: stem,
                source: source
              };
              break;
            }
          // unit

          case 'percent':
          case 'permille':
          case 'base-unit':
            this.assertEmpty('unit');
            res.unit = {
              style: stem
            };
            break;

          case 'currency':
            if (/^[A-Z]{3}$/.test(option)) {
              this.assertEmpty('unit');
              res.unit = {
                style: stem,
                currency: option
              };
            } else this.badOption(stem, option);

            break;

          case 'measure-unit':
            {
              if (isUnit(option)) {
                this.assertEmpty('unit');
                res.unit = {
                  style: stem,
                  unit: option
                };
              } else this.badOption(stem, option);

              break;
            }
          // unitPer

          case 'per-measure-unit':
            {
              if (isUnit(option)) {
                this.assertEmpty('unitPer');
                res.unitPer = option;
              } else this.badOption(stem, option);

              break;
            }
          // unitWidth

          case 'unit-width-narrow':
          case 'unit-width-short':
          case 'unit-width-full-name':
          case 'unit-width-iso-code':
          case 'unit-width-hidden':
            this.assertEmpty('unitWidth');
            res.unitWidth = stem;
            break;
          // precision

          case 'precision-integer':
          case 'precision-unlimited':
          case 'precision-currency-standard':
          case 'precision-currency-cash':
            this.assertEmpty('precision');
            res.precision = {
              style: stem
            };
            break;

          case 'precision-increment':
            {
              var increment = Number(option);

              if (increment > 0) {
                this.assertEmpty('precision');
                res.precision = {
                  style: stem,
                  increment: increment
                };
              } else this.badOption(stem, option);

              break;
            }
          // roundingMode

          case 'rounding-mode-ceiling':
          case 'rounding-mode-floor':
          case 'rounding-mode-down':
          case 'rounding-mode-up':
          case 'rounding-mode-half-even':
          case 'rounding-mode-half-down':
          case 'rounding-mode-half-up':
          case 'rounding-mode-unnecessary':
            this.assertEmpty('roundingMode');
            res.roundingMode = stem;
            break;
          // integerWidth

          case 'integer-width':
            {
              if (/^\+0*$/.test(option)) {
                this.assertEmpty('integerWidth');
                res.integerWidth = {
                  source: option,
                  min: option.length - 1
                };
              } else {
                var m = option.match(/^#*(0*)$/);

                if (m) {
                  this.assertEmpty('integerWidth');
                  res.integerWidth = {
                    source: option,
                    min: m[1].length,
                    max: m[0].length
                  };
                } else this.badOption(stem, option);
              }

              break;
            }
          // scale

          case 'scale':
            {
              var scale = Number(option);

              if (scale > 0) {
                this.assertEmpty('scale');
                res.scale = scale;
              } else this.badOption(stem, option);

              break;
            }
          // group

          case 'group-off':
          case 'group-min2':
          case 'group-auto':
          case 'group-on-aligned':
          case 'group-thousands':
            this.assertEmpty('group');
            res.group = stem;
            break;
          // numberingSystem

          case 'latin':
            this.assertEmpty('numberingSystem');
            res.numberingSystem = 'latn';
            break;

          case 'numbering-system':
            {
              if (isNumberingSystem(option)) {
                this.assertEmpty('numberingSystem');
                res.numberingSystem = option;
              } else this.badOption(stem, option);

              break;
            }
          // sign

          case 'sign-auto':
          case 'sign-always':
          case 'sign-never':
          case 'sign-accounting':
          case 'sign-accounting-always':
          case 'sign-except-zero':
          case 'sign-accounting-except-zero':
            this.assertEmpty('sign');
            res.sign = stem;
            break;
          // decimal

          case 'decimal-auto':
          case 'decimal-always':
            this.assertEmpty('decimal');
            res.decimal = stem;
            break;
          // precision blueprint

          default:
            {
              var precision = parsePrecisionBlueprint(stem, options, this.onError);

              if (precision) {
                this.assertEmpty('precision');
                res.precision = precision;
              } else {
                this.onError(new BadStemError(stem));
              }
            }
        }
      }
    }]);

    return TokenParser;
  }();

  /**
   * Parse an {@link
   * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md
   * | ICU NumberFormatter skeleton} string into a {@link Skeleton} structure.
   *
   * @public
   * @param src - The skeleton string
   * @param onError - Called when the parser encounters a syntax error. The
   *   function will still return a {@link Skeleton}, but it may not contain
   *   information for all tokens. If not defined, the error will be thrown
   *   instead.
   *
   * @example
   * ```js
   * import { parseNumberSkeleton } from '@messageformat/number-skeleton'
   *
   * parseNumberSkeleton('compact-short currency/GBP', console.error)
   * // {
   * //   notation: { style: 'compact-short' },
   * //   unit: { style: 'currency', currency: 'GBP' }
   * // }
   * ```
   */

  function parseNumberSkeleton(src) {
    var onError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (error) {
      throw error;
    };
    var tokens = [];

    var _iterator = _createForOfIteratorHelper(src.split(' ')),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var part = _step.value;

        if (part) {
          var _options = part.split('/');

          var _stem = _options.shift() || '';

          tokens.push({
            stem: _stem,
            options: _options
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var parser = new TokenParser(onError);

    for (var _i = 0, _tokens = tokens; _i < _tokens.length; _i++) {
      var _tokens$_i = _tokens[_i],
          stem = _tokens$_i.stem,
          options = _tokens$_i.options;
      parser.parseToken(stem, options);
    }

    return parser.skeleton;
  }

  /**
   * Returns a number formatter function for the given locales and number skeleton
   *
   * @remarks
   * Uses `Intl.NumberFormat` (ES2020) internally.
   *
   * @public
   * @param locales - One or more valid BCP 47 language tags, e.g. `fr` or `en-CA`
   * @param skeleton - An ICU NumberFormatter pattern or `::`-prefixed skeleton
   *   string, or a parsed `Skeleton` structure
   * @param currency - If `skeleton` is a pattern string that includes ¤ tokens,
   *   their skeleton representation requires a three-letter currency code.
   * @param onError - If defined, will be called separately for each encountered
   *   parsing error and unsupported feature.
   * @example
   * ```js
   * import { getNumberFormatter } from '@messageformat/number-skeleton'
   *
   * let src = ':: currency/CAD unit-width-narrow'
   * let fmt = getNumberFormatter('en-CA', src, console.error)
   * fmt(42) // '$42.00'
   *
   * src = '::percent scale/100'
   * fmt = getNumberFormatter('en', src, console.error)
   * fmt(0.3) // '30%'
   * ```
   */

  function getNumberFormatter(locales, skeleton, currency, onError) {
    if (typeof skeleton === 'string') {
      skeleton = skeleton.indexOf('::') === 0 ? parseNumberSkeleton(skeleton.slice(2), onError) : parseNumberPattern(skeleton, currency, onError);
    }

    var lc = getNumberFormatLocales(locales, skeleton);
    var opt = getNumberFormatOptions(skeleton, onError);
    var mod = getNumberFormatModifier(skeleton);
    var nf = new Intl.NumberFormat(lc, opt);

    if (skeleton.affix) {
      var _skeleton$affix$pos = _slicedToArray(skeleton.affix.pos, 2),
          p0 = _skeleton$affix$pos[0],
          p1 = _skeleton$affix$pos[1];

      var _ref = skeleton.affix.neg || ['', ''],
          _ref2 = _slicedToArray(_ref, 2),
          n0 = _ref2[0],
          n1 = _ref2[1];

      return function (value) {
        var n = nf.format(mod(value));
        return value < 0 ? "".concat(n0).concat(n).concat(n1) : "".concat(p0).concat(n).concat(p1);
      };
    }

    return function (value) {
      return nf.format(mod(value));
    };
  }
  /**
   * Returns a string of JavaScript source that evaluates to a number formatter
   * function with the same `(value: number) => string` signature as the function
   * returned by {@link getNumberFormatter}.
   *
   * @remarks
   * The returned function will memoize an `Intl.NumberFormat` instance.
   *
   * @public
   * @param locales - One or more valid BCP 47 language tags, e.g. `fr` or `en-CA`
   * @param skeleton - An ICU NumberFormatter pattern or `::`-prefixed skeleton
   *   string, or a parsed `Skeleton` structure
   * @param currency - If `skeleton` is a pattern string that includes ¤ tokens,
   *   their skeleton representation requires a three-letter currency code.
   * @param onError - If defined, will be called separately for each encountered
   *   parsing error and unsupported feature.
   * @example
   * ```js
   * import { getNumberFormatterSource } from '@messageformat/number-skeleton'
   *
   * getNumberFormatterSource('en', '::percent', console.error)
   * // '(function() {\n' +
   * // '  var opt = {"style":"percent"};\n' +
   * // '  var nf = new Intl.NumberFormat(["en"], opt);\n' +
   * // '  var mod = function(n) { return n * 0.01; };\n' +
   * // '  return function(value) { return nf.format(mod(value)); }\n' +
   * // '})()'
   *
   * const src = getNumberFormatterSource('en-CA', ':: currency/CAD unit-width-narrow', console.error)
   * // '(function() {\n' +
   * // '  var opt = {"style":"currency","currency":"CAD","currencyDisplay":"narrowSymbol","unitDisplay":"narrow"};\n' +
   * // '  var nf = new Intl.NumberFormat(["en-CA"], opt);\n'
   * // '  return function(value) { return nf.format(value); }\n' +
   * // '})()'
   * const fmt = new Function(`return ${src}`)()
   * fmt(42) // '$42.00'
   * ```
   */

  function getNumberFormatterSource(locales, skeleton, currency, onError) {
    if (typeof skeleton === 'string') {
      skeleton = skeleton.indexOf('::') === 0 ? parseNumberSkeleton(skeleton.slice(2), onError) : parseNumberPattern(skeleton, currency, onError);
    }

    var lc = getNumberFormatLocales(locales, skeleton);
    var opt = getNumberFormatOptions(skeleton, onError);
    var modSrc = getNumberFormatModifierSource(skeleton);
    var lines = ["(function() {", "var opt = ".concat(JSON.stringify(opt), ";"), "var nf = new Intl.NumberFormat(".concat(JSON.stringify(lc), ", opt);")];
    var res = 'nf.format(value)';

    if (modSrc) {
      lines.push("var mod = ".concat(modSrc, ";"));
      res = 'nf.format(mod(value))';
    }

    if (skeleton.affix) {
      var _skeleton$affix$pos$m = skeleton.affix.pos.map(function (s) {
        return JSON.stringify(s);
      }),
          _skeleton$affix$pos$m2 = _slicedToArray(_skeleton$affix$pos$m, 2),
          p0 = _skeleton$affix$pos$m2[0],
          p1 = _skeleton$affix$pos$m2[1];

      if (skeleton.affix.neg) {
        var _skeleton$affix$neg$m = skeleton.affix.neg.map(function (s) {
          return JSON.stringify(s);
        }),
            _skeleton$affix$neg$m2 = _slicedToArray(_skeleton$affix$neg$m, 2),
            n0 = _skeleton$affix$neg$m2[0],
            n1 = _skeleton$affix$neg$m2[1];

        res = "value < 0 ? ".concat(n0, " + ").concat(res, " + ").concat(n1, " : ").concat(p0, " + ").concat(res, " + ").concat(p1);
      } else {
        res = "".concat(p0, " + ").concat(res, " + ").concat(p1);
      }
    }

    lines.push("return function(value) { return ".concat(res, "; }"));
    return lines.join('\n  ') + '\n})()';
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var parser = {};

  var lexer = {};

  var moo = {exports: {}};

  (function (module) {
    (function (root, factory) {
      if (module.exports) {
        module.exports = factory();
      } else {
        root.moo = factory();
      }
    })(commonjsGlobal, function () {

      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var toString = Object.prototype.toString;
      var hasSticky = typeof new RegExp().sticky === 'boolean';
      /***************************************************************************/

      function isRegExp(o) {
        return o && toString.call(o) === '[object RegExp]';
      }

      function isObject(o) {
        return o && _typeof(o) === 'object' && !isRegExp(o) && !Array.isArray(o);
      }

      function reEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      function reGroups(s) {
        var re = new RegExp('|' + s);
        return re.exec('').length - 1;
      }

      function reCapture(s) {
        return '(' + s + ')';
      }

      function reUnion(regexps) {
        if (!regexps.length) return '(?!)';
        var source = regexps.map(function (s) {
          return "(?:" + s + ")";
        }).join('|');
        return "(?:" + source + ")";
      }

      function regexpOrLiteral(obj) {
        if (typeof obj === 'string') {
          return '(?:' + reEscape(obj) + ')';
        } else if (isRegExp(obj)) {
          // TODO: consider /u support
          if (obj.ignoreCase) throw new Error('RegExp /i flag not allowed');
          if (obj.global) throw new Error('RegExp /g flag is implied');
          if (obj.sticky) throw new Error('RegExp /y flag is implied');
          if (obj.multiline) throw new Error('RegExp /m flag is implied');
          return obj.source;
        } else {
          throw new Error('Not a pattern: ' + obj);
        }
      }

      function objectToRules(object) {
        var keys = Object.getOwnPropertyNames(object);
        var result = [];

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var thing = object[key];
          var rules = [].concat(thing);

          if (key === 'include') {
            for (var j = 0; j < rules.length; j++) {
              result.push({
                include: rules[j]
              });
            }

            continue;
          }

          var match = [];
          rules.forEach(function (rule) {
            if (isObject(rule)) {
              if (match.length) result.push(ruleOptions(key, match));
              result.push(ruleOptions(key, rule));
              match = [];
            } else {
              match.push(rule);
            }
          });
          if (match.length) result.push(ruleOptions(key, match));
        }

        return result;
      }

      function arrayToRules(array) {
        var result = [];

        for (var i = 0; i < array.length; i++) {
          var obj = array[i];

          if (obj.include) {
            var include = [].concat(obj.include);

            for (var j = 0; j < include.length; j++) {
              result.push({
                include: include[j]
              });
            }

            continue;
          }

          if (!obj.type) {
            throw new Error('Rule has no type: ' + JSON.stringify(obj));
          }

          result.push(ruleOptions(obj.type, obj));
        }

        return result;
      }

      function ruleOptions(type, obj) {
        if (!isObject(obj)) {
          obj = {
            match: obj
          };
        }

        if (obj.include) {
          throw new Error('Matching rules cannot also include states');
        } // nb. error and fallback imply lineBreaks


        var options = {
          defaultType: type,
          lineBreaks: !!obj.error || !!obj.fallback,
          pop: false,
          next: null,
          push: null,
          error: false,
          fallback: false,
          value: null,
          type: null,
          shouldThrow: false
        }; // Avoid Object.assign(), so we support IE9+

        for (var key in obj) {
          if (hasOwnProperty.call(obj, key)) {
            options[key] = obj[key];
          }
        } // type transform cannot be a string


        if (typeof options.type === 'string' && type !== options.type) {
          throw new Error("Type transform cannot be a string (type '" + options.type + "' for token '" + type + "')");
        } // convert to array


        var match = options.match;
        options.match = Array.isArray(match) ? match : match ? [match] : [];
        options.match.sort(function (a, b) {
          return isRegExp(a) && isRegExp(b) ? 0 : isRegExp(b) ? -1 : isRegExp(a) ? +1 : b.length - a.length;
        });
        return options;
      }

      function toRules(spec) {
        return Array.isArray(spec) ? arrayToRules(spec) : objectToRules(spec);
      }

      var defaultErrorRule = ruleOptions('error', {
        lineBreaks: true,
        shouldThrow: true
      });

      function compileRules(rules, hasStates) {
        var errorRule = null;
        var fast = Object.create(null);
        var fastAllowed = true;
        var unicodeFlag = null;
        var groups = [];
        var parts = []; // If there is a fallback rule, then disable fast matching

        for (var i = 0; i < rules.length; i++) {
          if (rules[i].fallback) {
            fastAllowed = false;
          }
        }

        for (var i = 0; i < rules.length; i++) {
          var options = rules[i];

          if (options.include) {
            // all valid inclusions are removed by states() preprocessor
            throw new Error('Inheritance is not allowed in stateless lexers');
          }

          if (options.error || options.fallback) {
            // errorRule can only be set once
            if (errorRule) {
              if (!options.fallback === !errorRule.fallback) {
                throw new Error("Multiple " + (options.fallback ? "fallback" : "error") + " rules not allowed (for token '" + options.defaultType + "')");
              } else {
                throw new Error("fallback and error are mutually exclusive (for token '" + options.defaultType + "')");
              }
            }

            errorRule = options;
          }

          var match = options.match.slice();

          if (fastAllowed) {
            while (match.length && typeof match[0] === 'string' && match[0].length === 1) {
              var word = match.shift();
              fast[word.charCodeAt(0)] = options;
            }
          } // Warn about inappropriate state-switching options


          if (options.pop || options.push || options.next) {
            if (!hasStates) {
              throw new Error("State-switching options are not allowed in stateless lexers (for token '" + options.defaultType + "')");
            }

            if (options.fallback) {
              throw new Error("State-switching options are not allowed on fallback tokens (for token '" + options.defaultType + "')");
            }
          } // Only rules with a .match are included in the RegExp


          if (match.length === 0) {
            continue;
          }

          fastAllowed = false;
          groups.push(options); // Check unicode flag is used everywhere or nowhere

          for (var j = 0; j < match.length; j++) {
            var obj = match[j];

            if (!isRegExp(obj)) {
              continue;
            }

            if (unicodeFlag === null) {
              unicodeFlag = obj.unicode;
            } else if (unicodeFlag !== obj.unicode && options.fallback === false) {
              throw new Error('If one rule is /u then all must be');
            }
          } // convert to RegExp


          var pat = reUnion(match.map(regexpOrLiteral)); // validate

          var regexp = new RegExp(pat);

          if (regexp.test("")) {
            throw new Error("RegExp matches empty string: " + regexp);
          }

          var groupCount = reGroups(pat);

          if (groupCount > 0) {
            throw new Error("RegExp has capture groups: " + regexp + "\nUse (?: … ) instead");
          } // try and detect rules matching newlines


          if (!options.lineBreaks && regexp.test('\n')) {
            throw new Error('Rule should declare lineBreaks: ' + regexp);
          } // store regex


          parts.push(reCapture(pat));
        } // If there's no fallback rule, use the sticky flag so we only look for
        // matches at the current index.
        //
        // If we don't support the sticky flag, then fake it using an irrefutable
        // match (i.e. an empty pattern).


        var fallbackRule = errorRule && errorRule.fallback;
        var flags = hasSticky && !fallbackRule ? 'ym' : 'gm';
        var suffix = hasSticky || fallbackRule ? '' : '|';
        if (unicodeFlag === true) flags += "u";
        var combined = new RegExp(reUnion(parts) + suffix, flags);
        return {
          regexp: combined,
          groups: groups,
          fast: fast,
          error: errorRule || defaultErrorRule
        };
      }

      function compile(rules) {
        var result = compileRules(toRules(rules));
        return new Lexer({
          start: result
        }, 'start');
      }

      function checkStateGroup(g, name, map) {
        var state = g && (g.push || g.next);

        if (state && !map[state]) {
          throw new Error("Missing state '" + state + "' (in token '" + g.defaultType + "' of state '" + name + "')");
        }

        if (g && g.pop && +g.pop !== 1) {
          throw new Error("pop must be 1 (in token '" + g.defaultType + "' of state '" + name + "')");
        }
      }

      function compileStates(states, start) {
        var all = states.$all ? toRules(states.$all) : [];
        delete states.$all;
        var keys = Object.getOwnPropertyNames(states);
        if (!start) start = keys[0];
        var ruleMap = Object.create(null);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          ruleMap[key] = toRules(states[key]).concat(all);
        }

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var rules = ruleMap[key];
          var included = Object.create(null);

          for (var j = 0; j < rules.length; j++) {
            var rule = rules[j];
            if (!rule.include) continue;
            var splice = [j, 1];

            if (rule.include !== key && !included[rule.include]) {
              included[rule.include] = true;
              var newRules = ruleMap[rule.include];

              if (!newRules) {
                throw new Error("Cannot include nonexistent state '" + rule.include + "' (in state '" + key + "')");
              }

              for (var k = 0; k < newRules.length; k++) {
                var newRule = newRules[k];
                if (rules.indexOf(newRule) !== -1) continue;
                splice.push(newRule);
              }
            }

            rules.splice.apply(rules, splice);
            j--;
          }
        }

        var map = Object.create(null);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          map[key] = compileRules(ruleMap[key], true);
        }

        for (var i = 0; i < keys.length; i++) {
          var name = keys[i];
          var state = map[name];
          var groups = state.groups;

          for (var j = 0; j < groups.length; j++) {
            checkStateGroup(groups[j], name, map);
          }

          var fastKeys = Object.getOwnPropertyNames(state.fast);

          for (var j = 0; j < fastKeys.length; j++) {
            checkStateGroup(state.fast[fastKeys[j]], name, map);
          }
        }

        return new Lexer(map, start);
      }

      function keywordTransform(map) {
        var reverseMap = Object.create(null);
        var byLength = Object.create(null);
        var types = Object.getOwnPropertyNames(map);

        for (var i = 0; i < types.length; i++) {
          var tokenType = types[i];
          var item = map[tokenType];
          var keywordList = Array.isArray(item) ? item : [item];
          keywordList.forEach(function (keyword) {
            (byLength[keyword.length] = byLength[keyword.length] || []).push(keyword);

            if (typeof keyword !== 'string') {
              throw new Error("keyword must be string (in keyword '" + tokenType + "')");
            }

            reverseMap[keyword] = tokenType;
          });
        } // fast string lookup
        // https://jsperf.com/string-lookups


        function str(x) {
          return JSON.stringify(x);
        }

        var source = '';
        source += 'switch (value.length) {\n';

        for (var length in byLength) {
          var keywords = byLength[length];
          source += 'case ' + length + ':\n';
          source += 'switch (value) {\n';
          keywords.forEach(function (keyword) {
            var tokenType = reverseMap[keyword];
            source += 'case ' + str(keyword) + ': return ' + str(tokenType) + '\n';
          });
          source += '}\n';
        }

        source += '}\n';
        return Function('value', source); // type
      }
      /***************************************************************************/


      var Lexer = function Lexer(states, state) {
        this.startState = state;
        this.states = states;
        this.buffer = '';
        this.stack = [];
        this.reset();
      };

      Lexer.prototype.reset = function (data, info) {
        this.buffer = data || '';
        this.index = 0;
        this.line = info ? info.line : 1;
        this.col = info ? info.col : 1;
        this.queuedToken = info ? info.queuedToken : null;
        this.queuedThrow = info ? info.queuedThrow : null;
        this.setState(info ? info.state : this.startState);
        this.stack = info && info.stack ? info.stack.slice() : [];
        return this;
      };

      Lexer.prototype.save = function () {
        return {
          line: this.line,
          col: this.col,
          state: this.state,
          stack: this.stack.slice(),
          queuedToken: this.queuedToken,
          queuedThrow: this.queuedThrow
        };
      };

      Lexer.prototype.setState = function (state) {
        if (!state || this.state === state) return;
        this.state = state;
        var info = this.states[state];
        this.groups = info.groups;
        this.error = info.error;
        this.re = info.regexp;
        this.fast = info.fast;
      };

      Lexer.prototype.popState = function () {
        this.setState(this.stack.pop());
      };

      Lexer.prototype.pushState = function (state) {
        this.stack.push(this.state);
        this.setState(state);
      };

      var eat = hasSticky ? function (re, buffer) {
        // assume re is /y
        return re.exec(buffer);
      } : function (re, buffer) {
        // assume re is /g
        var match = re.exec(buffer); // will always match, since we used the |(?:) trick

        if (match[0].length === 0) {
          return null;
        }

        return match;
      };

      Lexer.prototype._getGroup = function (match) {
        var groupCount = this.groups.length;

        for (var i = 0; i < groupCount; i++) {
          if (match[i + 1] !== undefined) {
            return this.groups[i];
          }
        }

        throw new Error('Cannot find token type for matched text');
      };

      function tokenToString() {
        return this.value;
      }

      Lexer.prototype.next = function () {
        var index = this.index; // If a fallback token matched, we don't need to re-run the RegExp

        if (this.queuedGroup) {
          var token = this._token(this.queuedGroup, this.queuedText, index);

          this.queuedGroup = null;
          this.queuedText = "";
          return token;
        }

        var buffer = this.buffer;

        if (index === buffer.length) {
          return; // EOF
        } // Fast matching for single characters


        var group = this.fast[buffer.charCodeAt(index)];

        if (group) {
          return this._token(group, buffer.charAt(index), index);
        } // Execute RegExp


        var re = this.re;
        re.lastIndex = index;
        var match = eat(re, buffer); // Error tokens match the remaining buffer

        var error = this.error;

        if (match == null) {
          return this._token(error, buffer.slice(index, buffer.length), index);
        }

        var group = this._getGroup(match);

        var text = match[0];

        if (error.fallback && match.index !== index) {
          this.queuedGroup = group;
          this.queuedText = text; // Fallback tokens contain the unmatched portion of the buffer

          return this._token(error, buffer.slice(index, match.index), index);
        }

        return this._token(group, text, index);
      };

      Lexer.prototype._token = function (group, text, offset) {
        // count line breaks
        var lineBreaks = 0;

        if (group.lineBreaks) {
          var matchNL = /\n/g;
          var nl = 1;

          if (text === '\n') {
            lineBreaks = 1;
          } else {
            while (matchNL.exec(text)) {
              lineBreaks++;
              nl = matchNL.lastIndex;
            }
          }
        }

        var token = {
          type: typeof group.type === 'function' && group.type(text) || group.defaultType,
          value: typeof group.value === 'function' ? group.value(text) : text,
          text: text,
          toString: tokenToString,
          offset: offset,
          lineBreaks: lineBreaks,
          line: this.line,
          col: this.col
        }; // nb. adding more props to token object will make V8 sad!

        var size = text.length;
        this.index += size;
        this.line += lineBreaks;

        if (lineBreaks !== 0) {
          this.col = size - nl + 1;
        } else {
          this.col += size;
        } // throw, if no rule with {error: true}


        if (group.shouldThrow) {
          throw new Error(this.formatError(token, "invalid syntax"));
        }

        if (group.pop) this.popState();else if (group.push) this.pushState(group.push);else if (group.next) this.setState(group.next);
        return token;
      };

      if (typeof Symbol !== 'undefined' && Symbol.iterator) {
        var LexerIterator = function LexerIterator(lexer) {
          this.lexer = lexer;
        };

        LexerIterator.prototype.next = function () {
          var token = this.lexer.next();
          return {
            value: token,
            done: !token
          };
        };

        LexerIterator.prototype[Symbol.iterator] = function () {
          return this;
        };

        Lexer.prototype[Symbol.iterator] = function () {
          return new LexerIterator(this);
        };
      }

      Lexer.prototype.formatError = function (token, message) {
        if (token == null) {
          // An undefined token indicates EOF
          var text = this.buffer.slice(this.index);
          var token = {
            text: text,
            offset: this.index,
            lineBreaks: text.indexOf('\n') === -1 ? 0 : 1,
            line: this.line,
            col: this.col
          };
        }

        var start = Math.max(0, token.offset - token.col + 1);
        var eol = token.lineBreaks ? token.text.indexOf('\n') : token.text.length;
        var firstLine = this.buffer.substring(start, token.offset + eol);
        message += " at line " + token.line + " col " + token.col + ":\n\n";
        message += "  " + firstLine + "\n";
        message += "  " + Array(token.col).join(" ") + "^";
        return message;
      };

      Lexer.prototype.clone = function () {
        return new Lexer(this.states, this.state);
      };

      Lexer.prototype.has = function (tokenType) {
        return true;
      };

      return {
        compile: compile,
        states: compileStates,
        error: Object.freeze({
          error: true
        }),
        fallback: Object.freeze({
          fallback: true
        }),
        keywords: keywordTransform
      };
    });
  })(moo);

  (function (exports) {

    var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.lexer = exports.states = void 0;

    var moo_1 = __importDefault(moo.exports);

    exports.states = {
      body: {
        doubleapos: {
          match: "''",
          value: function value() {
            return "'";
          }
        },
        quoted: {
          lineBreaks: true,
          match: /'[#\{\}](?:(?:(?![])[\s\S])*?(?:(?!')[\s\S]))?'(?!')/,
          value: function value(src) {
            return src.slice(1, -1).replace(/''/g, "'");
          }
        },
        argument: {
          lineBreaks: true,
          match: /\{[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r -\/:-@\[-\^`\{-~\x85\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u200E-\u2029\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46])[\s\S])+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/,
          push: 'arg',
          value: function value(src) {
            return src.substring(1).trim();
          }
        },
        octothorpe: '#',
        end: {
          match: '}',
          pop: 1
        },
        content: {
          lineBreaks: true,
          match: /(?:(?![])[\s\S])(?:(?![#'\{\}])[\s\S])*/
        }
      },
      arg: {
        select: {
          lineBreaks: true,
          match: /,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:plural|select|selectordinal)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/,
          next: 'select',
          value: function value(src) {
            return src.split(',')[1].trim();
          }
        },
        'func-args': {
          lineBreaks: true,
          match: /,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r -\/:-@\[-\^`\{-~\x85\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u200E-\u2029\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46])[\s\S])+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,/,
          next: 'body',
          value: function value(src) {
            return src.split(',')[1].trim();
          }
        },
        'func-simple': {
          lineBreaks: true,
          match: /,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r -\/:-@\[-\^`\{-~\x85\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u200E-\u2029\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46])[\s\S])+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/,
          value: function value(src) {
            return src.substring(1).trim();
          }
        },
        end: {
          match: '}',
          pop: 1
        }
      },
      select: {
        offset: {
          lineBreaks: true,
          match: /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*offset[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*[0-9]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/,
          value: function value(src) {
            return src.split(':')[1].trim();
          }
        },
        case: {
          lineBreaks: true,
          match: /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:=[0-9]+|(?:(?![\t-\r -\/:-@\[-\^`\{-~\x85\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u200E-\u2029\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46])[\s\S])+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\{/,
          push: 'body',
          value: function value(src) {
            return src.substring(0, src.indexOf('{')).trim();
          }
        },
        end: {
          match: /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\}/,
          pop: 1
        }
      }
    };
    exports.lexer = moo_1.default.states(exports.states);
  })(lexer);

  /**
   * An AST parser for ICU MessageFormat strings
   *
   * @packageDocumentation
   * @example
   * ```
   * import { parse } from '@messageformat/parser
   *
   * parse('So {wow}.')
   * [ { type: 'content', value: 'So ' },
   *   { type: 'argument', arg: 'wow' },
   *   { type: 'content', value: '.' } ]
   *
   *
   * parse('Such { thing }. { count, selectordinal, one {First} two {Second}' +
   *       '                  few {Third} other {#th} } word.')
   * [ { type: 'content', value: 'Such ' },
   *   { type: 'argument', arg: 'thing' },
   *   { type: 'content', value: '. ' },
   *   { type: 'selectordinal',
   *     arg: 'count',
   *     cases: [
   *       { key: 'one', tokens: [ { type: 'content', value: 'First' } ] },
   *       { key: 'two', tokens: [ { type: 'content', value: 'Second' } ] },
   *       { key: 'few', tokens: [ { type: 'content', value: 'Third' } ] },
   *       { key: 'other',
   *         tokens: [ { type: 'octothorpe' }, { type: 'content', value: 'th' } ] }
   *     ] },
   *   { type: 'content', value: ' word.' } ]
   *
   *
   * parse('Many{type,select,plural{ numbers}selectordinal{ counting}' +
   *                          'select{ choices}other{ some {type}}}.')
   * [ { type: 'content', value: 'Many' },
   *   { type: 'select',
   *     arg: 'type',
   *     cases: [
   *       { key: 'plural', tokens: [ { type: 'content', value: 'numbers' } ] },
   *       { key: 'selectordinal', tokens: [ { type: 'content', value: 'counting' } ] },
   *       { key: 'select', tokens: [ { type: 'content', value: 'choices' } ] },
   *       { key: 'other',
   *         tokens: [ { type: 'content', value: 'some ' }, { type: 'argument', arg: 'type' } ] }
   *     ] },
   *   { type: 'content', value: '.' } ]
   *
   *
   * parse('{Such compliance')
   * // ParseError: invalid syntax at line 1 col 7:
   * //
   * //  {Such compliance
   * //        ^
   *
   *
   * const msg = '{words, plural, zero{No words} one{One word} other{# words}}'
   * parse(msg)
   * [ { type: 'plural',
   *     arg: 'words',
   *     cases: [
   *       { key: 'zero', tokens: [ { type: 'content', value: 'No words' } ] },
   *       { key: 'one', tokens: [ { type: 'content', value: 'One word' } ] },
   *       { key: 'other',
   *         tokens: [ { type: 'octothorpe' }, { type: 'content', value: ' words' } ] }
   *     ] } ]
   *
   *
   * parse(msg, { cardinal: [ 'one', 'other' ], ordinal: [ 'one', 'two', 'few', 'other' ] })
   * // ParseError: The plural case zero is not valid in this locale at line 1 col 17:
   * //
   * //   {words, plural, zero{
   * //                   ^
   * ```
   */


  Object.defineProperty(parser, "__esModule", {
    value: true
  });
  var parse_1 = parser.parse = parser.ParseError = void 0;
  var lexer_js_1 = lexer;

  var getContext = function getContext(lt) {
    return {
      offset: lt.offset,
      line: lt.line,
      col: lt.col,
      text: lt.text,
      lineBreaks: lt.lineBreaks
    };
  };

  var isSelectType = function isSelectType(type) {
    return type === 'plural' || type === 'select' || type === 'selectordinal';
  };

  function strictArgStyleParam(lt, param) {
    var value = '';
    var text = '';

    var _iterator = _createForOfIteratorHelper(param),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var p = _step.value;
        var pText = p.ctx.text;
        text += pText;

        switch (p.type) {
          case 'content':
            value += p.value;
            break;

          case 'argument':
          case 'function':
          case 'octothorpe':
            value += pText;
            break;

          default:
            throw new ParseError(lt, "Unsupported part in strict mode function arg style: ".concat(pText));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var c = {
      type: 'content',
      value: value.trim(),
      ctx: Object.assign({}, param[0].ctx, {
        text: text
      })
    };
    return [c];
  }

  var strictArgTypes = ['number', 'date', 'time', 'spellout', 'ordinal', 'duration'];
  var defaultPluralKeys = ['zero', 'one', 'two', 'few', 'many', 'other'];
  /**
   * Thrown by {@link parse} on error
   *
   * @public
   */

  var ParseError = /*#__PURE__*/function (_Error) {
    _inherits(ParseError, _Error);

    var _super = _createSuper(ParseError);

    /** @internal */
    function ParseError(lt, msg) {
      _classCallCheck(this, ParseError);

      return _super.call(this, lexer_js_1.lexer.formatError(lt, msg));
    }

    return _createClass(ParseError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  parser.ParseError = ParseError;

  var Parser = /*#__PURE__*/function () {
    function Parser(src, opt) {
      _classCallCheck(this, Parser);

      this.lexer = lexer_js_1.lexer.reset(src);
      this.cardinalKeys = opt && opt.cardinal || defaultPluralKeys;
      this.ordinalKeys = opt && opt.ordinal || defaultPluralKeys;
      this.strict = opt && opt.strict || false;
    }

    _createClass(Parser, [{
      key: "parse",
      value: function parse() {
        return this.parseBody(false, true);
      }
    }, {
      key: "checkSelectKey",
      value: function checkSelectKey(lt, type, key) {
        if (key[0] === '=') {
          if (type === 'select') throw new ParseError(lt, "The case ".concat(key, " is not valid with select"));
        } else if (type !== 'select') {
          var keys = type === 'plural' ? this.cardinalKeys : this.ordinalKeys;

          if (keys.length > 0 && !keys.includes(key)) {
            var msg = "The ".concat(type, " case ").concat(key, " is not valid in this locale");
            throw new ParseError(lt, msg);
          }
        }
      }
    }, {
      key: "parseSelect",
      value: function parseSelect(_ref, inPlural, ctx, type) {
        var arg = _ref.value;
        var sel = {
          type: type,
          arg: arg,
          cases: [],
          ctx: ctx
        };
        if (type === 'plural' || type === 'selectordinal') inPlural = true;else if (this.strict) inPlural = false;

        var _iterator2 = _createForOfIteratorHelper(this.lexer),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var lt = _step2.value;

            switch (lt.type) {
              case 'offset':
                if (type === 'select') throw new ParseError(lt, 'Unexpected plural offset for select');
                if (sel.cases.length > 0) throw new ParseError(lt, 'Plural offset must be set before cases');
                sel.pluralOffset = Number(lt.value);
                ctx.text += lt.text;
                ctx.lineBreaks += lt.lineBreaks;
                break;

              case 'case':
                {
                  this.checkSelectKey(lt, type, lt.value);
                  sel.cases.push({
                    key: lt.value,
                    tokens: this.parseBody(inPlural),
                    ctx: getContext(lt)
                  });
                  break;
                }

              case 'end':
                return sel;

              /* istanbul ignore next: never happens */

              default:
                throw new ParseError(lt, "Unexpected lexer token: ".concat(lt.type));
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        throw new ParseError(null, 'Unexpected message end');
      }
    }, {
      key: "parseArgToken",
      value: function parseArgToken(lt, inPlural) {
        var ctx = getContext(lt);
        var argType = this.lexer.next();
        if (!argType) throw new ParseError(null, 'Unexpected message end');
        ctx.text += argType.text;
        ctx.lineBreaks += argType.lineBreaks;

        if (this.strict && (argType.type === 'func-simple' || argType.type === 'func-args') && !strictArgTypes.includes(argType.value)) {
          var msg = "Invalid strict mode function arg type: ".concat(argType.value);
          throw new ParseError(lt, msg);
        }

        switch (argType.type) {
          case 'end':
            return {
              type: 'argument',
              arg: lt.value,
              ctx: ctx
            };

          case 'func-simple':
            {
              var end = this.lexer.next();
              if (!end) throw new ParseError(null, 'Unexpected message end');
              /* istanbul ignore if: never happens */

              if (end.type !== 'end') throw new ParseError(end, "Unexpected lexer token: ".concat(end.type));
              ctx.text += end.text;
              if (isSelectType(argType.value.toLowerCase())) throw new ParseError(argType, "Invalid type identifier: ".concat(argType.value));
              return {
                type: 'function',
                arg: lt.value,
                key: argType.value,
                ctx: ctx
              };
            }

          case 'func-args':
            {
              if (isSelectType(argType.value.toLowerCase())) {
                var _msg = "Invalid type identifier: ".concat(argType.value);

                throw new ParseError(argType, _msg);
              }

              var param = this.parseBody(this.strict ? false : inPlural);
              if (this.strict && param.length > 0) param = strictArgStyleParam(lt, param);
              return {
                type: 'function',
                arg: lt.value,
                key: argType.value,
                param: param,
                ctx: ctx
              };
            }

          case 'select':
            /* istanbul ignore else: never happens */
            if (isSelectType(argType.value)) return this.parseSelect(lt, inPlural, ctx, argType.value);else throw new ParseError(argType, "Unexpected select type ".concat(argType.value));

          /* istanbul ignore next: never happens */

          default:
            throw new ParseError(argType, "Unexpected lexer token: ".concat(argType.type));
        }
      }
    }, {
      key: "parseBody",
      value: function parseBody(inPlural, atRoot) {
        var tokens = [];
        var content = null;

        var _iterator3 = _createForOfIteratorHelper(this.lexer),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var lt = _step3.value;

            if (lt.type === 'argument') {
              if (content) content = null;
              tokens.push(this.parseArgToken(lt, inPlural));
            } else if (lt.type === 'octothorpe' && inPlural) {
              if (content) content = null;
              tokens.push({
                type: 'octothorpe',
                ctx: getContext(lt)
              });
            } else if (lt.type === 'end' && !atRoot) {
              return tokens;
            } else {
              var value = lt.value;

              if (!inPlural && lt.type === 'quoted' && value[0] === '#') {
                if (value.includes('{')) {
                  var errMsg = "Unsupported escape pattern: ".concat(value);
                  throw new ParseError(lt, errMsg);
                }

                value = lt.text;
              }

              if (content) {
                content.value += value;
                content.ctx.text += lt.text;
                content.ctx.lineBreaks += lt.lineBreaks;
              } else {
                content = {
                  type: 'content',
                  value: value,
                  ctx: getContext(lt)
                };
                tokens.push(content);
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (atRoot) return tokens;
        throw new ParseError(null, 'Unexpected message end');
      }
    }]);

    return Parser;
  }();
  /**
   * Parse an input string into an array of tokens
   *
   * @public
   * @remarks
   * The parser only supports the default `DOUBLE_OPTIONAL`
   * {@link http://www.icu-project.org/apiref/icu4c/messagepattern_8h.html#af6e0757e0eb81c980b01ee5d68a9978b | apostrophe mode}.
   */


  function parse(src) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var parser = new Parser(src, options);
    return parser.parse();
  }

  parse_1 = parser.parse = parse;

  /**
   * A set of utility functions that are called by the compiled Javascript
   * functions, these are included locally in the output of {@link MessageFormat.compile compile()}.
   */

  /** @private */
  function _nf$1(lc) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return _nf$1[lc] || (_nf$1[lc] = new Intl.NumberFormat(lc));
  }
  /**
   * Utility function for `#` in plural rules
   *
   * @param lc The current locale
   * @param value The value to operate on
   * @param offset An offset, set by the surrounding context
   * @returns The result of applying the offset to the input value
   */

  function number(lc, value, offset) {
    return _nf$1(lc).format(value - offset);
  }
  /**
   * Strict utility function for `#` in plural rules
   *
   * Will throw an Error if `value` or `offset` are non-numeric.
   *
   * @param lc The current locale
   * @param value The value to operate on
   * @param offset An offset, set by the surrounding context
   * @param name The name of the argument, used for error reporting
   * @returns The result of applying the offset to the input value
   */

  function strictNumber(lc, value, offset, name) {
    var n = value - offset;
    if (isNaN(n)) throw new Error('`' + name + '` or its offset is not a number');
    return _nf$1(lc).format(n);
  }
  /**
   * Utility function for `{N, plural|selectordinal, ...}`
   *
   * @param value The key to use to find a pluralization rule
   * @param offset An offset to apply to `value`
   * @param lcfunc A locale function from `pluralFuncs`
   * @param data The object from which results are looked up
   * @param isOrdinal If true, use ordinal rather than cardinal rules
   * @returns The result of the pluralization
   */

  function plural(value, offset, lcfunc, data, isOrdinal) {
    if ({}.hasOwnProperty.call(data, value)) return data[value];
    if (offset) value -= offset;
    var key = lcfunc(value, isOrdinal);
    return key in data ? data[key] : data.other;
  }
  /**
   * Utility function for `{N, select, ...}`
   *
   * @param value The key to use to find a selection
   * @param data The object from which results are looked up
   * @returns The result of the select statement
   */

  function select(value, data) {
    return {}.hasOwnProperty.call(data, value) ? data[value] : data.other;
  }
  /**
   * Checks that all required arguments are set to defined values
   *
   * Throws on failure; otherwise returns undefined
   *
   * @param keys The required keys
   * @param data The data object being checked
   */

  function reqArgs(keys, data) {
    for (var i = 0; i < keys.length; ++i) {
      if (!data || data[keys[i]] === undefined) throw new Error("Message requires argument '".concat(keys[i], "'"));
    }
  }

  var Runtime = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _nf: _nf$1,
    number: number,
    strictNumber: strictNumber,
    plural: plural,
    select: select,
    reqArgs: reqArgs
  });

  /**
   * Represent a date as a short/default/long/full string
   *
   * @param value Either a Unix epoch time in milliseconds, or a string value
   *   representing a date. Parsed with `new Date(value)`
   *
   * @example
   * ```js
   * var mf = new MessageFormat(['en', 'fi']);
   *
   * mf.compile('Today is {T, date}')({ T: Date.now() })
   * // 'Today is Feb 21, 2016'
   *
   * mf.compile('Tänään on {T, date}', 'fi')({ T: Date.now() })
   * // 'Tänään on 21. helmikuuta 2016'
   *
   * mf.compile('Unix time started on {T, date, full}')({ T: 0 })
   * // 'Unix time started on Thursday, January 1, 1970'
   *
   * var cf = mf.compile('{sys} became operational on {d0, date, short}');
   * cf({ sys: 'HAL 9000', d0: '12 January 1999' })
   * // 'HAL 9000 became operational on 1/12/1999'
   * ```
   */
  function date(value, lc, size) {
    var o = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };
    /* eslint-disable no-fallthrough */

    switch (size) {
      case 'full':
        o.weekday = 'long';

      case 'long':
        o.month = 'long';
        break;

      case 'short':
        o.month = 'numeric';
    }

    return new Date(value).toLocaleDateString(lc, o);
  }

  /**
   * Represent a duration in seconds as a string
   *
   * @param value A finite number, or its string representation
   * @return Includes one or two `:` separators, and matches the pattern
   *   `hhhh:mm:ss`, possibly with a leading `-` for negative values and a
   *   trailing `.sss` part for non-integer input
   *
   * @example
   * ```js
   * var mf = new MessageFormat();
   *
   * mf.compile('It has been {D, duration}')({ D: 123 })
   * // 'It has been 2:03'
   *
   * mf.compile('Countdown: {D, duration}')({ D: -151200.42 })
   * // 'Countdown: -42:00:00.420'
   * ```
   */
  function duration(value) {
    if (typeof value !== 'number') value = Number(value);
    if (!isFinite(value)) return String(value);
    var sign = '';

    if (value < 0) {
      sign = '-';
      value = Math.abs(value);
    } else {
      value = Number(value);
    }

    var sec = value % 60;
    var parts = [Math.round(sec) === sec ? sec : sec.toFixed(3)];

    if (value < 60) {
      parts.unshift(0); // at least one : is required
    } else {
      value = Math.round((value - Number(parts[0])) / 60);
      parts.unshift(value % 60); // minutes

      if (value >= 60) {
        value = Math.round((value - Number(parts[0])) / 60);
        parts.unshift(value); // hours
      }
    }

    var first = parts.shift();
    return sign + first + ':' + parts.map(function (n) {
      return n < 10 ? '0' + String(n) : String(n);
    }).join(':');
  }

  /**
   * Represent a number as an integer, percent or currency value
   *
   * Available in MessageFormat strings as `{VAR, number, integer|percent|currency}`.
   * Internally, calls Intl.NumberFormat with appropriate parameters. `currency` will
   * default to USD; to change, set `MessageFormat#currency` to the appropriate
   * three-letter currency code, or use the `currency:EUR` form of the argument.
   *
   * @example
   * ```js
   * var mf = new MessageFormat('en', { currency: 'EUR'});
   *
   * mf.compile('{N} is almost {N, number, integer}')({ N: 3.14 })
   * // '3.14 is almost 3'
   *
   * mf.compile('{P, number, percent} complete')({ P: 0.99 })
   * // '99% complete'
   *
   * mf.compile('The total is {V, number, currency}.')({ V: 5.5 })
   * // 'The total is €5.50.'
   *
   * mf.compile('The total is {V, number, currency:GBP}.')({ V: 5.5 })
   * // 'The total is £5.50.'
   * ```
   */
  var _nf = {};

  function nf(lc, opt) {
    var key = String(lc) + JSON.stringify(opt);
    if (!_nf[key]) _nf[key] = new Intl.NumberFormat(lc, opt);
    return _nf[key];
  }

  function numberFmt(value, lc, arg, defaultCurrency) {
    var _a = arg && arg.split(':') || [],
        type = _a[0],
        currency = _a[1];

    var opt = {
      integer: {
        maximumFractionDigits: 0
      },
      percent: {
        style: 'percent'
      },
      currency: {
        style: 'currency',
        currency: currency && currency.trim() || defaultCurrency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    };
    return nf(lc, opt[type] || {}).format(value);
  }
  var numberCurrency = function numberCurrency(value, lc, arg) {
    return nf(lc, {
      style: 'currency',
      currency: arg,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
  var numberInteger = function numberInteger(value, lc) {
    return nf(lc, {
      maximumFractionDigits: 0
    }).format(value);
  };
  var numberPercent = function numberPercent(value, lc) {
    return nf(lc, {
      style: 'percent'
    }).format(value);
  };

  /**
   * Represent a time as a short/default/long string
   *
   * @param value Either a Unix epoch time in milliseconds, or a string value
   *   representing a date. Parsed with `new Date(value)`
   *
   * @example
   * ```js
   * var mf = new MessageFormat(['en', 'fi']);
   *
   * mf.compile('The time is now {T, time}')({ T: Date.now() })
   * // 'The time is now 11:26:35 PM'
   *
   * mf.compile('Kello on nyt {T, time}', 'fi')({ T: Date.now() })
   * // 'Kello on nyt 23.26.35'
   *
   * var cf = mf.compile('The Eagle landed at {T, time, full} on {T, date, full}');
   * cf({ T: '1969-07-20 20:17:40 UTC' })
   * // 'The Eagle landed at 10:17:40 PM GMT+2 on Sunday, July 20, 1969'
   * ```
   */
  function time(value, lc, size) {
    var o = {
      second: 'numeric',
      minute: 'numeric',
      hour: 'numeric'
    };
    /* eslint-disable no-fallthrough */

    switch (size) {
      case 'full':
      case 'long':
        o.timeZoneName = 'short';
        break;

      case 'short':
        delete o.second;
    }

    return new Date(value).toLocaleTimeString(lc, o);
  }

  var Formatters = /*#__PURE__*/Object.freeze({
    __proto__: null,
    date: date,
    duration: duration,
    numberCurrency: numberCurrency,
    numberFmt: numberFmt,
    numberInteger: numberInteger,
    numberPercent: numberPercent,
    time: time
  });

  var ES3 = {
    break: true,
    continue: true,
    delete: true,
    else: true,
    for: true,
    function: true,
    if: true,
    in: true,
    new: true,
    return: true,
    this: true,
    typeof: true,
    var: true,
    void: true,
    while: true,
    with: true,
    case: true,
    catch: true,
    default: true,
    do: true,
    finally: true,
    instanceof: true,
    switch: true,
    throw: true,
    try: true
  };
  var ESnext = {
    // in addition to reservedES3
    await: true,
    debugger: true,
    class: true,
    enum: true,
    extends: true,
    super: true,
    const: true,
    export: true,
    import: true,
    null: true,
    true: true,
    false: true,
    implements: true,
    let: true,
    private: true,
    public: true,
    yield: true,
    interface: true,
    package: true,
    protected: true,
    static: true
  };
  var reserved = {
    ES3: ES3,
    ESnext: ESnext
  };
  var reserved$1 = reserved;

  function hashCode(str) {
    var hash = 0;

    for (var i = 0; i < str.length; ++i) {
      var char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
    }

    return hash;
  }

  function identifier(key, unique) {
    if (unique) key += ' ' + hashCode(key).toString(36);
    var id = key.trim().replace(/\W+/g, '_');
    return reserved$1.ES3[id] || reserved$1.ESnext[id] || /^\d/.test(id) ? '_' + id : id;
  }
  function property(obj, key) {
    if (/^[A-Z_$][0-9A-Z_$]*$/i.test(key) && !reserved$1.ES3[key]) {
      return obj ? obj + '.' + key : key;
    } else {
      var jkey = JSON.stringify(key);
      return obj ? obj + '[' + jkey + ']' : jkey;
    }
  }

  var rtlLanguages = [
      'ar',
      'ckb',
      'fa',
      'he',
      'ks($|[^bfh])',
      'lrc',
      'mzn',
      'pa-Arab',
      'ps',
      'ug',
      'ur',
      'uz-Arab',
      'yi'
  ];
  var rtlRegExp = new RegExp('^' + rtlLanguages.join('|^'));
  function biDiMarkText(text, locale) {
      var isLocaleRTL = rtlRegExp.test(locale);
      var mark = JSON.stringify(isLocaleRTL ? '\u200F' : '\u200E');
      return "".concat(mark, " + ").concat(text, " + ").concat(mark);
  }

  var RUNTIME_MODULE = '@messageformat/runtime';
  var CARDINAL_MODULE = '@messageformat/runtime/lib/cardinals';
  var PLURAL_MODULE = '@messageformat/runtime/lib/plurals';
  var FORMATTER_MODULE = '@messageformat/runtime/lib/formatters';
  var Compiler = (function () {
      function Compiler(options) {
          this.arguments = [];
          this.runtime = {};
          this.options = options;
      }
      Compiler.prototype.compile = function (src, plural, plurals) {
          var e_1, _a;
          var _this = this;
          if (typeof src === 'object') {
              var result = {};
              try {
                  for (var _b = __values(Object.keys(src)), _c = _b.next(); !_c.done; _c = _b.next()) {
                      var key = _c.value;
                      var pl = (plurals && plurals[key]) || plural;
                      result[key] = this.compile(src[key], pl, plurals);
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              return result;
          }
          this.plural = plural;
          var parserOptions = {
              cardinal: plural.cardinals,
              ordinal: plural.ordinals,
              strict: this.options.strict
          };
          this.arguments = [];
          var r = parse_1(src, parserOptions).map(function (token) { return _this.token(token, null); });
          var hasArgs = this.arguments.length > 0;
          var res = this.concatenate(r, true);
          if (this.options.requireAllArguments && hasArgs) {
              this.setRuntimeFn('reqArgs');
              var reqArgs = JSON.stringify(this.arguments);
              return "(d) => { reqArgs(".concat(reqArgs, ", d); return ").concat(res, "; }");
          }
          return "(".concat(hasArgs ? 'd' : '', ") => ").concat(res);
      };
      Compiler.prototype.cases = function (token, pluralToken) {
          var _this = this;
          var needOther = true;
          var r = token.cases.map(function (_a) {
              var key = _a.key, tokens = _a.tokens;
              if (key === 'other')
                  needOther = false;
              var s = tokens.map(function (tok) { return _this.token(tok, pluralToken); });
              return "".concat(property(null, key.replace(/^=/, '')), ": ").concat(_this.concatenate(s, false));
          });
          if (needOther) {
              var type = token.type;
              var _a = this.plural, cardinals = _a.cardinals, ordinals = _a.ordinals;
              if (type === 'select' ||
                  (type === 'plural' && cardinals.includes('other')) ||
                  (type === 'selectordinal' && ordinals.includes('other')))
                  throw new Error("No 'other' form found in ".concat(JSON.stringify(token)));
          }
          return "{ ".concat(r.join(', '), " }");
      };
      Compiler.prototype.concatenate = function (tokens, root) {
          var asValues = this.options.returnType === 'values';
          return asValues && (root || tokens.length > 1)
              ? '[' + tokens.join(', ') + ']'
              : tokens.join(' + ') || '""';
      };
      Compiler.prototype.token = function (token, pluralToken) {
          if (token.type === 'content')
              return JSON.stringify(token.value);
          var _a = this.plural, id = _a.id, lc = _a.lc;
          var args, fn;
          if ('arg' in token) {
              this.arguments.push(token.arg);
              args = [property('d', token.arg)];
          }
          else
              args = [];
          switch (token.type) {
              case 'argument':
                  return this.options.biDiSupport
                      ? biDiMarkText(String(args[0]), lc)
                      : String(args[0]);
              case 'select':
                  fn = 'select';
                  if (pluralToken && this.options.strict)
                      pluralToken = null;
                  args.push(this.cases(token, pluralToken));
                  this.setRuntimeFn('select');
                  break;
              case 'selectordinal':
                  fn = 'plural';
                  args.push(token.pluralOffset || 0, id, this.cases(token, token), 1);
                  this.setLocale(id, true);
                  this.setRuntimeFn('plural');
                  break;
              case 'plural':
                  fn = 'plural';
                  args.push(token.pluralOffset || 0, id, this.cases(token, token));
                  this.setLocale(id, false);
                  this.setRuntimeFn('plural');
                  break;
              case 'function':
                  if (!this.options.customFormatters[token.key]) {
                      if (token.key === 'date') {
                          fn = this.setDateFormatter(token, args, pluralToken);
                          break;
                      }
                      else if (token.key === 'number') {
                          fn = this.setNumberFormatter(token, args, pluralToken);
                          break;
                      }
                  }
                  args.push(JSON.stringify(this.plural.locale));
                  if (token.param) {
                      if (pluralToken && this.options.strict)
                          pluralToken = null;
                      var arg = this.getFormatterArg(token, pluralToken);
                      if (arg)
                          args.push(arg);
                  }
                  fn = token.key;
                  this.setFormatter(fn);
                  break;
              case 'octothorpe':
                  if (!pluralToken)
                      return '"#"';
                  args = [
                      JSON.stringify(this.plural.locale),
                      property('d', pluralToken.arg),
                      pluralToken.pluralOffset || 0
                  ];
                  if (this.options.strict) {
                      fn = 'strictNumber';
                      args.push(JSON.stringify(pluralToken.arg));
                      this.setRuntimeFn('strictNumber');
                  }
                  else {
                      fn = 'number';
                      this.setRuntimeFn('number');
                  }
                  break;
          }
          if (!fn)
              throw new Error('Parser error for token ' + JSON.stringify(token));
          return "".concat(fn, "(").concat(args.join(', '), ")");
      };
      Compiler.prototype.runtimeIncludes = function (key, type) {
          if (identifier(key) !== key)
              throw new SyntaxError("Reserved word used as ".concat(type, " identifier: ").concat(key));
          var prev = this.runtime[key];
          if (!prev || prev.type === type)
              return prev;
          throw new TypeError("Cannot override ".concat(prev.type, " runtime function as ").concat(type, ": ").concat(key));
      };
      Compiler.prototype.setLocale = function (key, ord) {
          var prev = this.runtimeIncludes(key, 'locale');
          var _a = this.plural, getCardinal = _a.getCardinal, getPlural = _a.getPlural, isDefault = _a.isDefault;
          var pf, module, toString;
          if (!ord && isDefault && getCardinal) {
              if (prev)
                  return;
              pf = function (n) { return getCardinal(n); };
              module = CARDINAL_MODULE;
              toString = function () { return String(getCardinal); };
          }
          else {
              if (prev && (!isDefault || prev.module === PLURAL_MODULE))
                  return;
              pf = function (n, ord) { return getPlural(n, ord); };
              module = isDefault ? PLURAL_MODULE : getPlural.module || null;
              toString = function () { return String(getPlural); };
          }
          this.runtime[key] = Object.assign(pf, {
              id: key,
              module: module,
              toString: toString,
              type: 'locale'
          });
      };
      Compiler.prototype.setRuntimeFn = function (key) {
          if (this.runtimeIncludes(key, 'runtime'))
              return;
          this.runtime[key] = Object.assign(Runtime[key], {
              id: key,
              module: RUNTIME_MODULE,
              type: 'runtime'
          });
      };
      Compiler.prototype.getFormatterArg = function (_a, pluralToken) {
          var e_2, _b, e_3, _c;
          var _this = this;
          var key = _a.key, param = _a.param;
          var fmt = this.options.customFormatters[key] ||
              (isFormatterKey(key) && Formatters[key]);
          if (!fmt || !param)
              return null;
          var argShape = ('arg' in fmt && fmt.arg) || 'string';
          if (argShape === 'options') {
              var value = '';
              try {
                  for (var param_1 = __values(param), param_1_1 = param_1.next(); !param_1_1.done; param_1_1 = param_1.next()) {
                      var tok = param_1_1.value;
                      if (tok.type === 'content')
                          value += tok.value;
                      else
                          throw new SyntaxError("Expected literal options for ".concat(key, " formatter"));
                  }
              }
              catch (e_2_1) { e_2 = { error: e_2_1 }; }
              finally {
                  try {
                      if (param_1_1 && !param_1_1.done && (_b = param_1.return)) _b.call(param_1);
                  }
                  finally { if (e_2) throw e_2.error; }
              }
              var options = {};
              try {
                  for (var _d = __values(value.split(',')), _e = _d.next(); !_e.done; _e = _d.next()) {
                      var pair = _e.value;
                      var keyEnd = pair.indexOf(':');
                      if (keyEnd === -1)
                          options[pair.trim()] = null;
                      else {
                          var k = pair.substring(0, keyEnd).trim();
                          var v = pair.substring(keyEnd + 1).trim();
                          if (v === 'true')
                              options[k] = true;
                          else if (v === 'false')
                              options[k] = false;
                          else if (v === 'null')
                              options[k] = null;
                          else {
                              var n = Number(v);
                              options[k] = Number.isFinite(n) ? n : v;
                          }
                      }
                  }
              }
              catch (e_3_1) { e_3 = { error: e_3_1 }; }
              finally {
                  try {
                      if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                  }
                  finally { if (e_3) throw e_3.error; }
              }
              return JSON.stringify(options);
          }
          else {
              var parts = param.map(function (tok) { return _this.token(tok, pluralToken); });
              if (argShape === 'raw')
                  return "[".concat(parts.join(', '), "]");
              var s = parts.join(' + ');
              return s ? "(".concat(s, ").trim()") : '""';
          }
      };
      Compiler.prototype.setFormatter = function (key) {
          if (this.runtimeIncludes(key, 'formatter'))
              return;
          var cf = this.options.customFormatters[key];
          if (cf) {
              if (typeof cf === 'function')
                  cf = { formatter: cf };
              this.runtime[key] = Object.assign(cf.formatter, { type: 'formatter' }, 'module' in cf && cf.module && cf.id
                  ? { id: identifier(cf.id), module: cf.module }
                  : { id: null, module: null });
          }
          else if (isFormatterKey(key)) {
              this.runtime[key] = Object.assign(Formatters[key], { type: 'formatter' }, { id: key, module: FORMATTER_MODULE });
          }
          else {
              throw new Error("Formatting function not found: ".concat(key));
          }
      };
      Compiler.prototype.setDateFormatter = function (_a, args, plural) {
          var _this = this;
          var param = _a.param;
          var locale = this.plural.locale;
          var argStyle = param && param.length === 1 && param[0];
          if (argStyle &&
              argStyle.type === 'content' &&
              /^\s*::/.test(argStyle.value)) {
              var argSkeletonText_1 = argStyle.value.trim().substr(2);
              var key = identifier("date_".concat(locale, "_").concat(argSkeletonText_1), true);
              if (!this.runtimeIncludes(key, 'formatter')) {
                  var fmt = getDateFormatter(locale, argSkeletonText_1);
                  this.runtime[key] = Object.assign(fmt, {
                      id: key,
                      module: null,
                      toString: function () { return getDateFormatterSource(locale, argSkeletonText_1); },
                      type: 'formatter'
                  });
              }
              return key;
          }
          args.push(JSON.stringify(locale));
          if (param && param.length > 0) {
              if (plural && this.options.strict)
                  plural = null;
              var s = param.map(function (tok) { return _this.token(tok, plural); });
              args.push('(' + (s.join(' + ') || '""') + ').trim()');
          }
          this.setFormatter('date');
          return 'date';
      };
      Compiler.prototype.setNumberFormatter = function (_a, args, plural) {
          var _this = this;
          var param = _a.param;
          var locale = this.plural.locale;
          if (!param || param.length === 0) {
              args.unshift(JSON.stringify(locale));
              args.push('0');
              this.setRuntimeFn('number');
              return 'number';
          }
          args.push(JSON.stringify(locale));
          if (param.length === 1 && param[0].type === 'content') {
              var fmtArg_1 = param[0].value.trim();
              switch (fmtArg_1) {
                  case 'currency':
                      args.push(JSON.stringify(this.options.currency));
                      this.setFormatter('numberCurrency');
                      return 'numberCurrency';
                  case 'integer':
                      this.setFormatter('numberInteger');
                      return 'numberInteger';
                  case 'percent':
                      this.setFormatter('numberPercent');
                      return 'numberPercent';
              }
              var cm = fmtArg_1.match(/^currency:([A-Z]+)$/);
              if (cm) {
                  args.push(JSON.stringify(cm[1]));
                  this.setFormatter('numberCurrency');
                  return 'numberCurrency';
              }
              var key = identifier("number_".concat(locale, "_").concat(fmtArg_1), true);
              if (!this.runtimeIncludes(key, 'formatter')) {
                  var currency_1 = this.options.currency;
                  var fmt = getNumberFormatter(locale, fmtArg_1, currency_1);
                  this.runtime[key] = Object.assign(fmt, {
                      id: null,
                      module: null,
                      toString: function () { return getNumberFormatterSource(locale, fmtArg_1, currency_1); },
                      type: 'formatter'
                  });
              }
              return key;
          }
          if (plural && this.options.strict)
              plural = null;
          var s = param.map(function (tok) { return _this.token(tok, plural); });
          args.push('(' + (s.join(' + ') || '""') + ').trim()');
          args.push(JSON.stringify(this.options.currency));
          this.setFormatter('numberFmt');
          return 'numberFmt';
      };
      return Compiler;
  }());
  function isFormatterKey(key) {
      return key in Formatters;
  }

  var a$2 = function a(n) {
    return n == 1 ? 'one' : 'other';
  };

  var b$2 = function b(n) {
    return n == 0 || n == 1 ? 'one' : 'other';
  };

  var c$2 = function c(n) {
    return n >= 0 && n <= 1 ? 'one' : 'other';
  };

  var d$2 = function d(n) {
    var s = String(n).split('.'),
        v0 = !s[1];
    return n == 1 && v0 ? 'one' : 'other';
  };

  var e$2 = function e(n) {
    return 'other';
  };

  var f$2 = function f(n) {
    return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
  };

  var af$2 = a$2;
  var ak$2 = b$2;
  var am$2 = c$2;
  var an$2 = a$2;
  var ar$2 = function ar(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
  };
  var ars$2 = function ars(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
  };
  var as$2 = c$2;
  var asa$2 = a$2;
  var ast$2 = d$2;
  var az$2 = a$2;
  var bal$2 = a$2;
  var be$2 = function be(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    return n10 == 1 && n100 != 11 ? 'one' : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? 'few' : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? 'many' : 'other';
  };
  var bem$2 = a$2;
  var bez$2 = a$2;
  var bg$2 = a$2;
  var bho$2 = b$2;
  var bm$2 = e$2;
  var bn$2 = c$2;
  var bo$2 = e$2;
  var br$2 = function br(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        n1000000 = t0 && s[0].slice(-6);
    return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? 'one' : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? 'two' : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? 'few' : n != 0 && t0 && n1000000 == 0 ? 'many' : 'other';
  };
  var brx$2 = a$2;
  var bs$2 = function bs(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  };
  var ca$2 = d$2;
  var ce$2 = a$2;
  var ceb$2 = function ceb(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
  };
  var cgg$2 = a$2;
  var chr$2 = a$2;
  var ckb$2 = a$2;
  var cs$2 = function cs(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1];
    return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
  };
  var cy$2 = function cy(n) {
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 ? 'few' : n == 6 ? 'many' : 'other';
  };
  var da$2 = function da(n) {
    var s = String(n).split('.'),
        i = s[0],
        t0 = Number(s[0]) == n;
    return n == 1 || !t0 && (i == 0 || i == 1) ? 'one' : 'other';
  };
  var de$2 = d$2;
  var doi$2 = c$2;
  var dsb$2 = function dsb(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i100 = i.slice(-2),
        f100 = f.slice(-2);
    return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
  };
  var dv$2 = a$2;
  var dz$2 = e$2;
  var ee$2 = a$2;
  var el$2 = a$2;
  var en$2 = d$2;
  var eo$2 = a$2;
  var es$2 = function es(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return n == 1 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  };
  var et$2 = d$2;
  var eu$2 = a$2;
  var fa$2 = c$2;
  var ff$2 = function ff(n) {
    return n >= 0 && n < 2 ? 'one' : 'other';
  };
  var fi$2 = d$2;
  var fil$2 = function fil(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
  };
  var fo$2 = a$2;
  var fr$2 = function fr(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return n >= 0 && n < 2 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  };
  var fur$2 = a$2;
  var fy$2 = d$2;
  var ga$2 = function ga(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    return n == 1 ? 'one' : n == 2 ? 'two' : t0 && n >= 3 && n <= 6 ? 'few' : t0 && n >= 7 && n <= 10 ? 'many' : 'other';
  };
  var gd$2 = function gd(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    return n == 1 || n == 11 ? 'one' : n == 2 || n == 12 ? 'two' : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? 'few' : 'other';
  };
  var gl$2 = d$2;
  var gsw$2 = a$2;
  var gu$2 = c$2;
  var guw$2 = b$2;
  var gv$2 = function gv(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return v0 && i10 == 1 ? 'one' : v0 && i10 == 2 ? 'two' : v0 && (i100 == 0 || i100 == 20 || i100 == 40 || i100 == 60 || i100 == 80) ? 'few' : !v0 ? 'many' : 'other';
  };
  var ha$2 = a$2;
  var haw$2 = a$2;
  var he$2 = function he(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1);
    return n == 1 && v0 ? 'one' : i == 2 && v0 ? 'two' : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many' : 'other';
  };
  var hi$2 = c$2;
  var hnj$2 = e$2;
  var hr$2 = function hr(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  };
  var hsb$2 = function hsb(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i100 = i.slice(-2),
        f100 = f.slice(-2);
    return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
  };
  var hu$2 = a$2;
  var hy$2 = function hy(n) {
    return n >= 0 && n < 2 ? 'one' : 'other';
  };
  var ia$2 = d$2;
  var id$2 = e$2;
  var ig$2 = e$2;
  var ii$2 = e$2;
  var io$2 = d$2;
  var is$2 = function is(n) {
    var s = String(n).split('.'),
        i = s[0],
        t0 = Number(s[0]) == n,
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return t0 && i10 == 1 && i100 != 11 || !t0 ? 'one' : 'other';
  };
  var it$2 = function it(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return n == 1 && v0 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  };
  var iu$2 = f$2;
  var ja$2 = e$2;
  var jbo$2 = e$2;
  var jgo$2 = a$2;
  var jmc$2 = a$2;
  var jv$2 = e$2;
  var jw$2 = e$2;
  var ka$2 = a$2;
  var kab$2 = function kab(n) {
    return n >= 0 && n < 2 ? 'one' : 'other';
  };
  var kaj$2 = a$2;
  var kcg$2 = a$2;
  var kde$2 = e$2;
  var kea$2 = e$2;
  var kk$2 = a$2;
  var kkj$2 = a$2;
  var kl$2 = a$2;
  var km$2 = e$2;
  var kn$2 = c$2;
  var ko$2 = e$2;
  var ks$2 = a$2;
  var ksb$2 = a$2;
  var ksh$2 = function ksh(n) {
    return n == 0 ? 'zero' : n == 1 ? 'one' : 'other';
  };
  var ku$2 = a$2;
  var kw$2 = function kw(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2),
        n1000 = t0 && s[0].slice(-3),
        n100000 = t0 && s[0].slice(-5),
        n1000000 = t0 && s[0].slice(-6);
    return n == 0 ? 'zero' : n == 1 ? 'one' : n100 == 2 || n100 == 22 || n100 == 42 || n100 == 62 || n100 == 82 || t0 && n1000 == 0 && (n100000 >= 1000 && n100000 <= 20000 || n100000 == 40000 || n100000 == 60000 || n100000 == 80000) || n != 0 && n1000000 == 100000 ? 'two' : n100 == 3 || n100 == 23 || n100 == 43 || n100 == 63 || n100 == 83 ? 'few' : n != 1 && (n100 == 1 || n100 == 21 || n100 == 41 || n100 == 61 || n100 == 81) ? 'many' : 'other';
  };
  var ky$2 = a$2;
  var lag$2 = function lag(n) {
    var s = String(n).split('.'),
        i = s[0];
    return n == 0 ? 'zero' : (i == 0 || i == 1) && n != 0 ? 'one' : 'other';
  };
  var lb$2 = a$2;
  var lg$2 = a$2;
  var lij$2 = d$2;
  var lkt$2 = e$2;
  var ln$2 = b$2;
  var lo$2 = e$2;
  var lt$2 = function lt(n) {
    var s = String(n).split('.'),
        f = s[1] || '',
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one' : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? 'few' : f != 0 ? 'many' : 'other';
  };
  var lv$2 = function lv(n) {
    var s = String(n).split('.'),
        f = s[1] || '',
        v = f.length,
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        f100 = f.slice(-2),
        f10 = f.slice(-1);
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
  };
  var mas$2 = a$2;
  var mg$2 = b$2;
  var mgo$2 = a$2;
  var mk$2 = function mk(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : 'other';
  };
  var ml$2 = a$2;
  var mn$2 = a$2;
  var mo$2 = function mo(n) {
    var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 1 && v0 ? 'one' : !v0 || n == 0 || n100 >= 2 && n100 <= 19 ? 'few' : 'other';
  };
  var mr$2 = a$2;
  var ms$2 = e$2;
  var mt$2 = function mt(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 1 ? 'one' : n == 0 || n100 >= 2 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 19 ? 'many' : 'other';
  };
  var my$2 = e$2;
  var nah$2 = a$2;
  var naq$2 = f$2;
  var nb$2 = a$2;
  var nd$2 = a$2;
  var ne$2 = a$2;
  var nl$2 = d$2;
  var nn$2 = a$2;
  var nnh$2 = a$2;
  var no$2 = a$2;
  var nqo$2 = e$2;
  var nr$2 = a$2;
  var nso$2 = b$2;
  var ny$2 = a$2;
  var nyn$2 = a$2;
  var om$2 = a$2;
  var or$2 = a$2;
  var os$2 = a$2;
  var osa$2 = e$2;
  var pa$2 = b$2;
  var pap$2 = a$2;
  var pcm$2 = c$2;
  var pl$2 = function pl(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return n == 1 && v0 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? 'many' : 'other';
  };
  var prg$2 = function prg(n) {
    var s = String(n).split('.'),
        f = s[1] || '',
        v = f.length,
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        f100 = f.slice(-2),
        f10 = f.slice(-1);
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
  };
  var ps$2 = a$2;
  var pt$2 = function pt(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return i == 0 || i == 1 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  };
  var pt_PT$2 = function pt_PT(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return n == 1 && v0 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  };
  var rm$2 = a$2;
  var ro$2 = function ro(n) {
    var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 1 && v0 ? 'one' : !v0 || n == 0 || n100 >= 2 && n100 <= 19 ? 'few' : 'other';
  };
  var rof$2 = a$2;
  var ru$2 = function ru(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
  };
  var rwk$2 = a$2;
  var sah$2 = e$2;
  var saq$2 = a$2;
  var sat$2 = f$2;
  var sc$2 = d$2;
  var scn$2 = d$2;
  var sd$2 = a$2;
  var sdh$2 = a$2;
  var se$2 = f$2;
  var seh$2 = a$2;
  var ses$2 = e$2;
  var sg$2 = e$2;
  var sh$2 = function sh(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  };
  var shi$2 = function shi(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    return n >= 0 && n <= 1 ? 'one' : t0 && n >= 2 && n <= 10 ? 'few' : 'other';
  };
  var si$2 = function si(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '';
    return n == 0 || n == 1 || i == 0 && f == 1 ? 'one' : 'other';
  };
  var sk$2 = function sk(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1];
    return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
  };
  var sl$2 = function sl(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i100 = i.slice(-2);
    return v0 && i100 == 1 ? 'one' : v0 && i100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few' : 'other';
  };
  var sma$2 = f$2;
  var smi$2 = f$2;
  var smj$2 = f$2;
  var smn$2 = f$2;
  var sms$2 = f$2;
  var sn$2 = a$2;
  var so$2 = a$2;
  var sq$2 = a$2;
  var sr$2 = function sr(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  };
  var ss$2 = a$2;
  var ssy$2 = a$2;
  var st$2 = a$2;
  var su$2 = e$2;
  var sv$2 = d$2;
  var sw$2 = d$2;
  var syr$2 = a$2;
  var ta$2 = a$2;
  var te$2 = a$2;
  var teo$2 = a$2;
  var th$2 = e$2;
  var ti$2 = b$2;
  var tig$2 = a$2;
  var tk$2 = a$2;
  var tl$2 = function tl(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
  };
  var tn$2 = a$2;
  var to$2 = e$2;
  var tpi$2 = e$2;
  var tr$2 = a$2;
  var ts$2 = a$2;
  var tzm$2 = function tzm(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    return n == 0 || n == 1 || t0 && n >= 11 && n <= 99 ? 'one' : 'other';
  };
  var ug$2 = a$2;
  var uk$2 = function uk(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
  };
  var und$2 = e$2;
  var ur$2 = d$2;
  var uz$2 = a$2;
  var ve$2 = a$2;
  var vi$2 = e$2;
  var vo$2 = a$2;
  var vun$2 = a$2;
  var wa$2 = b$2;
  var wae$2 = a$2;
  var wo$2 = e$2;
  var xh$2 = a$2;
  var xog$2 = a$2;
  var yi$2 = d$2;
  var yo$2 = e$2;
  var yue$2 = e$2;
  var zh$2 = e$2;
  var zu$2 = c$2;

  var Cardinals = /*#__PURE__*/Object.freeze({
    __proto__: null,
    af: af$2,
    ak: ak$2,
    am: am$2,
    an: an$2,
    ar: ar$2,
    ars: ars$2,
    as: as$2,
    asa: asa$2,
    ast: ast$2,
    az: az$2,
    bal: bal$2,
    be: be$2,
    bem: bem$2,
    bez: bez$2,
    bg: bg$2,
    bho: bho$2,
    bm: bm$2,
    bn: bn$2,
    bo: bo$2,
    br: br$2,
    brx: brx$2,
    bs: bs$2,
    ca: ca$2,
    ce: ce$2,
    ceb: ceb$2,
    cgg: cgg$2,
    chr: chr$2,
    ckb: ckb$2,
    cs: cs$2,
    cy: cy$2,
    da: da$2,
    de: de$2,
    doi: doi$2,
    dsb: dsb$2,
    dv: dv$2,
    dz: dz$2,
    ee: ee$2,
    el: el$2,
    en: en$2,
    eo: eo$2,
    es: es$2,
    et: et$2,
    eu: eu$2,
    fa: fa$2,
    ff: ff$2,
    fi: fi$2,
    fil: fil$2,
    fo: fo$2,
    fr: fr$2,
    fur: fur$2,
    fy: fy$2,
    ga: ga$2,
    gd: gd$2,
    gl: gl$2,
    gsw: gsw$2,
    gu: gu$2,
    guw: guw$2,
    gv: gv$2,
    ha: ha$2,
    haw: haw$2,
    he: he$2,
    hi: hi$2,
    hnj: hnj$2,
    hr: hr$2,
    hsb: hsb$2,
    hu: hu$2,
    hy: hy$2,
    ia: ia$2,
    id: id$2,
    ig: ig$2,
    ii: ii$2,
    io: io$2,
    is: is$2,
    it: it$2,
    iu: iu$2,
    ja: ja$2,
    jbo: jbo$2,
    jgo: jgo$2,
    jmc: jmc$2,
    jv: jv$2,
    jw: jw$2,
    ka: ka$2,
    kab: kab$2,
    kaj: kaj$2,
    kcg: kcg$2,
    kde: kde$2,
    kea: kea$2,
    kk: kk$2,
    kkj: kkj$2,
    kl: kl$2,
    km: km$2,
    kn: kn$2,
    ko: ko$2,
    ks: ks$2,
    ksb: ksb$2,
    ksh: ksh$2,
    ku: ku$2,
    kw: kw$2,
    ky: ky$2,
    lag: lag$2,
    lb: lb$2,
    lg: lg$2,
    lij: lij$2,
    lkt: lkt$2,
    ln: ln$2,
    lo: lo$2,
    lt: lt$2,
    lv: lv$2,
    mas: mas$2,
    mg: mg$2,
    mgo: mgo$2,
    mk: mk$2,
    ml: ml$2,
    mn: mn$2,
    mo: mo$2,
    mr: mr$2,
    ms: ms$2,
    mt: mt$2,
    my: my$2,
    nah: nah$2,
    naq: naq$2,
    nb: nb$2,
    nd: nd$2,
    ne: ne$2,
    nl: nl$2,
    nn: nn$2,
    nnh: nnh$2,
    no: no$2,
    nqo: nqo$2,
    nr: nr$2,
    nso: nso$2,
    ny: ny$2,
    nyn: nyn$2,
    om: om$2,
    or: or$2,
    os: os$2,
    osa: osa$2,
    pa: pa$2,
    pap: pap$2,
    pcm: pcm$2,
    pl: pl$2,
    prg: prg$2,
    ps: ps$2,
    pt: pt$2,
    pt_PT: pt_PT$2,
    rm: rm$2,
    ro: ro$2,
    rof: rof$2,
    ru: ru$2,
    rwk: rwk$2,
    sah: sah$2,
    saq: saq$2,
    sat: sat$2,
    sc: sc$2,
    scn: scn$2,
    sd: sd$2,
    sdh: sdh$2,
    se: se$2,
    seh: seh$2,
    ses: ses$2,
    sg: sg$2,
    sh: sh$2,
    shi: shi$2,
    si: si$2,
    sk: sk$2,
    sl: sl$2,
    sma: sma$2,
    smi: smi$2,
    smj: smj$2,
    smn: smn$2,
    sms: sms$2,
    sn: sn$2,
    so: so$2,
    sq: sq$2,
    sr: sr$2,
    ss: ss$2,
    ssy: ssy$2,
    st: st$2,
    su: su$2,
    sv: sv$2,
    sw: sw$2,
    syr: syr$2,
    ta: ta$2,
    te: te$2,
    teo: teo$2,
    th: th$2,
    ti: ti$2,
    tig: tig$2,
    tk: tk$2,
    tl: tl$2,
    tn: tn$2,
    to: to$2,
    tpi: tpi$2,
    tr: tr$2,
    ts: ts$2,
    tzm: tzm$2,
    ug: ug$2,
    uk: uk$2,
    und: und$2,
    ur: ur$2,
    uz: uz$2,
    ve: ve$2,
    vi: vi$2,
    vo: vo$2,
    vun: vun$2,
    wa: wa$2,
    wae: wae$2,
    wo: wo$2,
    xh: xh$2,
    xog: xog$2,
    yi: yi$2,
    yo: yo$2,
    yue: yue$2,
    zh: zh$2,
    zu: zu$2
  });

  var z = "zero",
      o = "one",
      t = "two",
      f$1 = "few",
      m = "many",
      x = "other";
  var a$1 = {
    cardinal: [o, x],
    ordinal: [x]
  };
  var b$1 = {
    cardinal: [o, x],
    ordinal: [o, x]
  };
  var c$1 = {
    cardinal: [x],
    ordinal: [x]
  };
  var d$1 = {
    cardinal: [o, f$1, m, x],
    ordinal: [x]
  };
  var e$1 = {
    cardinal: [o, t, x],
    ordinal: [x]
  };
  var af$1 = a$1;
  var ak$1 = a$1;
  var am$1 = a$1;
  var an$1 = a$1;
  var ar$1 = {
    cardinal: [z, o, t, f$1, m, x],
    ordinal: [x]
  };
  var ars$1 = {
    cardinal: [z, o, t, f$1, m, x],
    ordinal: [x]
  };
  var as$1 = {
    cardinal: [o, x],
    ordinal: [o, t, f$1, m, x]
  };
  var asa$1 = a$1;
  var ast$1 = a$1;
  var az$1 = {
    cardinal: [o, x],
    ordinal: [o, f$1, m, x]
  };
  var bal$1 = b$1;
  var be$1 = {
    cardinal: [o, f$1, m, x],
    ordinal: [f$1, x]
  };
  var bem$1 = a$1;
  var bez$1 = a$1;
  var bg$1 = a$1;
  var bho$1 = a$1;
  var bm$1 = c$1;
  var bn$1 = {
    cardinal: [o, x],
    ordinal: [o, t, f$1, m, x]
  };
  var bo$1 = c$1;
  var br$1 = {
    cardinal: [o, t, f$1, m, x],
    ordinal: [x]
  };
  var brx$1 = a$1;
  var bs$1 = {
    cardinal: [o, f$1, x],
    ordinal: [x]
  };
  var ca$1 = {
    cardinal: [o, x],
    ordinal: [o, t, f$1, x]
  };
  var ce$1 = a$1;
  var ceb$1 = a$1;
  var cgg$1 = a$1;
  var chr$1 = a$1;
  var ckb$1 = a$1;
  var cs$1 = d$1;
  var cy$1 = {
    cardinal: [z, o, t, f$1, m, x],
    ordinal: [z, o, t, f$1, m, x]
  };
  var da$1 = a$1;
  var de$1 = a$1;
  var doi$1 = a$1;
  var dsb$1 = {
    cardinal: [o, t, f$1, x],
    ordinal: [x]
  };
  var dv$1 = a$1;
  var dz$1 = c$1;
  var ee$1 = a$1;
  var el$1 = a$1;
  var en$1 = {
    cardinal: [o, x],
    ordinal: [o, t, f$1, x]
  };
  var eo$1 = a$1;
  var es$1 = {
    cardinal: [o, m, x],
    ordinal: [x]
  };
  var et$1 = a$1;
  var eu$1 = a$1;
  var fa$1 = a$1;
  var ff$1 = a$1;
  var fi$1 = a$1;
  var fil$1 = b$1;
  var fo$1 = a$1;
  var fr$1 = {
    cardinal: [o, m, x],
    ordinal: [o, x]
  };
  var fur$1 = a$1;
  var fy$1 = a$1;
  var ga$1 = {
    cardinal: [o, t, f$1, m, x],
    ordinal: [o, x]
  };
  var gd$1 = {
    cardinal: [o, t, f$1, x],
    ordinal: [o, t, f$1, x]
  };
  var gl$1 = a$1;
  var gsw$1 = a$1;
  var gu$1 = {
    cardinal: [o, x],
    ordinal: [o, t, f$1, m, x]
  };
  var guw$1 = a$1;
  var gv$1 = {
    cardinal: [o, t, f$1, m, x],
    ordinal: [x]
  };
  var ha$1 = a$1;
  var haw$1 = a$1;
  var he$1 = {
    cardinal: [o, t, m, x],
    ordinal: [x]
  };
  var hi$1 = {
    cardinal: [o, x],
    ordinal: [o, t, f$1, m, x]
  };
  var hnj$1 = c$1;
  var hr$1 = {
    cardinal: [o, f$1, x],
    ordinal: [x]
  };
  var hsb$1 = {
    cardinal: [o, t, f$1, x],
    ordinal: [x]
  };
  var hu$1 = b$1;
  var hy$1 = b$1;
  var ia$1 = a$1;
  var id$1 = c$1;
  var ig$1 = c$1;
  var ii$1 = c$1;
  var io$1 = a$1;
  var is$1 = a$1;
  var it$1 = {
    cardinal: [o, m, x],
    ordinal: [m, x]
  };
  var iu$1 = e$1;
  var ja$1 = c$1;
  var jbo$1 = c$1;
  var jgo$1 = a$1;
  var jmc$1 = a$1;
  var jv$1 = c$1;
  var jw$1 = c$1;
  var ka$1 = {
    cardinal: [o, x],
    ordinal: [o, m, x]
  };
  var kab$1 = a$1;
  var kaj$1 = a$1;
  var kcg$1 = a$1;
  var kde$1 = c$1;
  var kea$1 = c$1;
  var kk$1 = {
    cardinal: [o, x],
    ordinal: [m, x]
  };
  var kkj$1 = a$1;
  var kl$1 = a$1;
  var km$1 = c$1;
  var kn$1 = a$1;
  var ko$1 = c$1;
  var ks$1 = a$1;
  var ksb$1 = a$1;
  var ksh$1 = {
    cardinal: [z, o, x],
    ordinal: [x]
  };
  var ku$1 = a$1;
  var kw$1 = {
    cardinal: [z, o, t, f$1, m, x],
    ordinal: [o, m, x]
  };
  var ky$1 = a$1;
  var lag$1 = {
    cardinal: [z, o, x],
    ordinal: [x]
  };
  var lb$1 = a$1;
  var lg$1 = a$1;
  var lij$1 = {
    cardinal: [o, x],
    ordinal: [m, x]
  };
  var lkt$1 = c$1;
  var ln$1 = a$1;
  var lo$1 = {
    cardinal: [x],
    ordinal: [o, x]
  };
  var lt$1 = d$1;
  var lv$1 = {
    cardinal: [z, o, x],
    ordinal: [x]
  };
  var mas$1 = a$1;
  var mg$1 = a$1;
  var mgo$1 = a$1;
  var mk$1 = {
    cardinal: [o, x],
    ordinal: [o, t, m, x]
  };
  var ml$1 = a$1;
  var mn$1 = a$1;
  var mo$1 = {
    cardinal: [o, f$1, x],
    ordinal: [o, x]
  };
  var mr$1 = {
    cardinal: [o, x],
    ordinal: [o, t, f$1, x]
  };
  var ms$1 = {
    cardinal: [x],
    ordinal: [o, x]
  };
  var mt$1 = d$1;
  var my$1 = c$1;
  var nah$1 = a$1;
  var naq$1 = e$1;
  var nb$1 = a$1;
  var nd$1 = a$1;
  var ne$1 = b$1;
  var nl$1 = a$1;
  var nn$1 = a$1;
  var nnh$1 = a$1;
  var no$1 = a$1;
  var nqo$1 = c$1;
  var nr$1 = a$1;
  var nso$1 = a$1;
  var ny$1 = a$1;
  var nyn$1 = a$1;
  var om$1 = a$1;
  var or$1 = {
    cardinal: [o, x],
    ordinal: [o, t, f$1, m, x]
  };
  var os$1 = a$1;
  var osa$1 = c$1;
  var pa$1 = a$1;
  var pap$1 = a$1;
  var pcm$1 = a$1;
  var pl$1 = d$1;
  var prg$1 = {
    cardinal: [z, o, x],
    ordinal: [x]
  };
  var ps$1 = a$1;
  var pt$1 = {
    cardinal: [o, m, x],
    ordinal: [x]
  };
  var pt_PT$1 = {
    cardinal: [o, m, x],
    ordinal: [x]
  };
  var rm$1 = a$1;
  var ro$1 = {
    cardinal: [o, f$1, x],
    ordinal: [o, x]
  };
  var rof$1 = a$1;
  var ru$1 = d$1;
  var rwk$1 = a$1;
  var sah$1 = c$1;
  var saq$1 = a$1;
  var sat$1 = e$1;
  var sc$1 = {
    cardinal: [o, x],
    ordinal: [m, x]
  };
  var scn$1 = {
    cardinal: [o, x],
    ordinal: [m, x]
  };
  var sd$1 = a$1;
  var sdh$1 = a$1;
  var se$1 = e$1;
  var seh$1 = a$1;
  var ses$1 = c$1;
  var sg$1 = c$1;
  var sh$1 = {
    cardinal: [o, f$1, x],
    ordinal: [x]
  };
  var shi$1 = {
    cardinal: [o, f$1, x],
    ordinal: [x]
  };
  var si$1 = a$1;
  var sk$1 = d$1;
  var sl$1 = {
    cardinal: [o, t, f$1, x],
    ordinal: [x]
  };
  var sma$1 = e$1;
  var smi$1 = e$1;
  var smj$1 = e$1;
  var smn$1 = e$1;
  var sms$1 = e$1;
  var sn$1 = a$1;
  var so$1 = a$1;
  var sq$1 = {
    cardinal: [o, x],
    ordinal: [o, m, x]
  };
  var sr$1 = {
    cardinal: [o, f$1, x],
    ordinal: [x]
  };
  var ss$1 = a$1;
  var ssy$1 = a$1;
  var st$1 = a$1;
  var su$1 = c$1;
  var sv$1 = b$1;
  var sw$1 = a$1;
  var syr$1 = a$1;
  var ta$1 = a$1;
  var te$1 = a$1;
  var teo$1 = a$1;
  var th$1 = c$1;
  var ti$1 = a$1;
  var tig$1 = a$1;
  var tk$1 = {
    cardinal: [o, x],
    ordinal: [f$1, x]
  };
  var tl$1 = b$1;
  var tn$1 = a$1;
  var to$1 = c$1;
  var tpi$1 = c$1;
  var tr$1 = a$1;
  var ts$1 = a$1;
  var tzm$1 = a$1;
  var ug$1 = a$1;
  var uk$1 = {
    cardinal: [o, f$1, m, x],
    ordinal: [f$1, x]
  };
  var und$1 = c$1;
  var ur$1 = a$1;
  var uz$1 = a$1;
  var ve$1 = a$1;
  var vi$1 = {
    cardinal: [x],
    ordinal: [o, x]
  };
  var vo$1 = a$1;
  var vun$1 = a$1;
  var wa$1 = a$1;
  var wae$1 = a$1;
  var wo$1 = c$1;
  var xh$1 = a$1;
  var xog$1 = a$1;
  var yi$1 = a$1;
  var yo$1 = c$1;
  var yue$1 = c$1;
  var zh$1 = c$1;
  var zu$1 = a$1;

  var PluralCategories = /*#__PURE__*/Object.freeze({
    __proto__: null,
    af: af$1,
    ak: ak$1,
    am: am$1,
    an: an$1,
    ar: ar$1,
    ars: ars$1,
    as: as$1,
    asa: asa$1,
    ast: ast$1,
    az: az$1,
    bal: bal$1,
    be: be$1,
    bem: bem$1,
    bez: bez$1,
    bg: bg$1,
    bho: bho$1,
    bm: bm$1,
    bn: bn$1,
    bo: bo$1,
    br: br$1,
    brx: brx$1,
    bs: bs$1,
    ca: ca$1,
    ce: ce$1,
    ceb: ceb$1,
    cgg: cgg$1,
    chr: chr$1,
    ckb: ckb$1,
    cs: cs$1,
    cy: cy$1,
    da: da$1,
    de: de$1,
    doi: doi$1,
    dsb: dsb$1,
    dv: dv$1,
    dz: dz$1,
    ee: ee$1,
    el: el$1,
    en: en$1,
    eo: eo$1,
    es: es$1,
    et: et$1,
    eu: eu$1,
    fa: fa$1,
    ff: ff$1,
    fi: fi$1,
    fil: fil$1,
    fo: fo$1,
    fr: fr$1,
    fur: fur$1,
    fy: fy$1,
    ga: ga$1,
    gd: gd$1,
    gl: gl$1,
    gsw: gsw$1,
    gu: gu$1,
    guw: guw$1,
    gv: gv$1,
    ha: ha$1,
    haw: haw$1,
    he: he$1,
    hi: hi$1,
    hnj: hnj$1,
    hr: hr$1,
    hsb: hsb$1,
    hu: hu$1,
    hy: hy$1,
    ia: ia$1,
    id: id$1,
    ig: ig$1,
    ii: ii$1,
    io: io$1,
    is: is$1,
    it: it$1,
    iu: iu$1,
    ja: ja$1,
    jbo: jbo$1,
    jgo: jgo$1,
    jmc: jmc$1,
    jv: jv$1,
    jw: jw$1,
    ka: ka$1,
    kab: kab$1,
    kaj: kaj$1,
    kcg: kcg$1,
    kde: kde$1,
    kea: kea$1,
    kk: kk$1,
    kkj: kkj$1,
    kl: kl$1,
    km: km$1,
    kn: kn$1,
    ko: ko$1,
    ks: ks$1,
    ksb: ksb$1,
    ksh: ksh$1,
    ku: ku$1,
    kw: kw$1,
    ky: ky$1,
    lag: lag$1,
    lb: lb$1,
    lg: lg$1,
    lij: lij$1,
    lkt: lkt$1,
    ln: ln$1,
    lo: lo$1,
    lt: lt$1,
    lv: lv$1,
    mas: mas$1,
    mg: mg$1,
    mgo: mgo$1,
    mk: mk$1,
    ml: ml$1,
    mn: mn$1,
    mo: mo$1,
    mr: mr$1,
    ms: ms$1,
    mt: mt$1,
    my: my$1,
    nah: nah$1,
    naq: naq$1,
    nb: nb$1,
    nd: nd$1,
    ne: ne$1,
    nl: nl$1,
    nn: nn$1,
    nnh: nnh$1,
    no: no$1,
    nqo: nqo$1,
    nr: nr$1,
    nso: nso$1,
    ny: ny$1,
    nyn: nyn$1,
    om: om$1,
    or: or$1,
    os: os$1,
    osa: osa$1,
    pa: pa$1,
    pap: pap$1,
    pcm: pcm$1,
    pl: pl$1,
    prg: prg$1,
    ps: ps$1,
    pt: pt$1,
    pt_PT: pt_PT$1,
    rm: rm$1,
    ro: ro$1,
    rof: rof$1,
    ru: ru$1,
    rwk: rwk$1,
    sah: sah$1,
    saq: saq$1,
    sat: sat$1,
    sc: sc$1,
    scn: scn$1,
    sd: sd$1,
    sdh: sdh$1,
    se: se$1,
    seh: seh$1,
    ses: ses$1,
    sg: sg$1,
    sh: sh$1,
    shi: shi$1,
    si: si$1,
    sk: sk$1,
    sl: sl$1,
    sma: sma$1,
    smi: smi$1,
    smj: smj$1,
    smn: smn$1,
    sms: sms$1,
    sn: sn$1,
    so: so$1,
    sq: sq$1,
    sr: sr$1,
    ss: ss$1,
    ssy: ssy$1,
    st: st$1,
    su: su$1,
    sv: sv$1,
    sw: sw$1,
    syr: syr$1,
    ta: ta$1,
    te: te$1,
    teo: teo$1,
    th: th$1,
    ti: ti$1,
    tig: tig$1,
    tk: tk$1,
    tl: tl$1,
    tn: tn$1,
    to: to$1,
    tpi: tpi$1,
    tr: tr$1,
    ts: ts$1,
    tzm: tzm$1,
    ug: ug$1,
    uk: uk$1,
    und: und$1,
    ur: ur$1,
    uz: uz$1,
    ve: ve$1,
    vi: vi$1,
    vo: vo$1,
    vun: vun$1,
    wa: wa$1,
    wae: wae$1,
    wo: wo$1,
    xh: xh$1,
    xog: xog$1,
    yi: yi$1,
    yo: yo$1,
    yue: yue$1,
    zh: zh$1,
    zu: zu$1
  });

  var a = function a(n, ord) {
    if (ord) return 'other';
    return n == 1 ? 'one' : 'other';
  };

  var b = function b(n, ord) {
    if (ord) return 'other';
    return n == 0 || n == 1 ? 'one' : 'other';
  };

  var c = function c(n, ord) {
    if (ord) return 'other';
    return n >= 0 && n <= 1 ? 'one' : 'other';
  };

  var d = function d(n, ord) {
    var s = String(n).split('.'),
        v0 = !s[1];
    if (ord) return 'other';
    return n == 1 && v0 ? 'one' : 'other';
  };

  var e = function e(n, ord) {
    return 'other';
  };

  var f = function f(n, ord) {
    if (ord) return 'other';
    return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
  };

  var af = a;
  var ak = b;
  var am = c;
  var an = a;
  var ar = function ar(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    if (ord) return 'other';
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
  };
  var ars = function ars(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    if (ord) return 'other';
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
  };
  var as = function as(n, ord) {
    if (ord) return n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
    return n >= 0 && n <= 1 ? 'one' : 'other';
  };
  var asa = a;
  var ast = d;
  var az = function az(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        i1000 = i.slice(-3);
    if (ord) return i10 == 1 || i10 == 2 || i10 == 5 || i10 == 7 || i10 == 8 || i100 == 20 || i100 == 50 || i100 == 70 || i100 == 80 ? 'one' : i10 == 3 || i10 == 4 || i1000 == 100 || i1000 == 200 || i1000 == 300 || i1000 == 400 || i1000 == 500 || i1000 == 600 || i1000 == 700 || i1000 == 800 || i1000 == 900 ? 'few' : i == 0 || i10 == 6 || i100 == 40 || i100 == 60 || i100 == 90 ? 'many' : 'other';
    return n == 1 ? 'one' : 'other';
  };
  var bal = function bal(n, ord) {
    return n == 1 ? 'one' : 'other';
  };
  var be = function be(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    if (ord) return (n10 == 2 || n10 == 3) && n100 != 12 && n100 != 13 ? 'few' : 'other';
    return n10 == 1 && n100 != 11 ? 'one' : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? 'few' : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? 'many' : 'other';
  };
  var bem = a;
  var bez = a;
  var bg = a;
  var bho = b;
  var bm = e;
  var bn = function bn(n, ord) {
    if (ord) return n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
    return n >= 0 && n <= 1 ? 'one' : 'other';
  };
  var bo = e;
  var br = function br(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        n1000000 = t0 && s[0].slice(-6);
    if (ord) return 'other';
    return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? 'one' : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? 'two' : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? 'few' : n != 0 && t0 && n1000000 == 0 ? 'many' : 'other';
  };
  var brx = a;
  var bs = function bs(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    if (ord) return 'other';
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  };
  var ca = function ca(n, ord) {
    var s = String(n).split('.'),
        v0 = !s[1];
    if (ord) return n == 1 || n == 3 ? 'one' : n == 2 ? 'two' : n == 4 ? 'few' : 'other';
    return n == 1 && v0 ? 'one' : 'other';
  };
  var ce = a;
  var ceb = function ceb(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    if (ord) return 'other';
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
  };
  var cgg = a;
  var chr = a;
  var ckb = a;
  var cs = function cs(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1];
    if (ord) return 'other';
    return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
  };
  var cy = function cy(n, ord) {
    if (ord) return n == 0 || n == 7 || n == 8 || n == 9 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 || n == 4 ? 'few' : n == 5 || n == 6 ? 'many' : 'other';
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 ? 'few' : n == 6 ? 'many' : 'other';
  };
  var da = function da(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        t0 = Number(s[0]) == n;
    if (ord) return 'other';
    return n == 1 || !t0 && (i == 0 || i == 1) ? 'one' : 'other';
  };
  var de = d;
  var doi = c;
  var dsb = function dsb(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i100 = i.slice(-2),
        f100 = f.slice(-2);
    if (ord) return 'other';
    return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
  };
  var dv = a;
  var dz = e;
  var ee = a;
  var el = a;
  var en = function en(n, ord) {
    var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    if (ord) return n10 == 1 && n100 != 11 ? 'one' : n10 == 2 && n100 != 12 ? 'two' : n10 == 3 && n100 != 13 ? 'few' : 'other';
    return n == 1 && v0 ? 'one' : 'other';
  };
  var eo = a;
  var es = function es(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    if (ord) return 'other';
    return n == 1 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  };
  var et = d;
  var eu = a;
  var fa = c;
  var ff = function ff(n, ord) {
    if (ord) return 'other';
    return n >= 0 && n < 2 ? 'one' : 'other';
  };
  var fi = d;
  var fil = function fil(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    if (ord) return n == 1 ? 'one' : 'other';
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
  };
  var fo = a;
  var fr = function fr(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    if (ord) return n == 1 ? 'one' : 'other';
    return n >= 0 && n < 2 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  };
  var fur = a;
  var fy = d;
  var ga = function ga(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    if (ord) return n == 1 ? 'one' : 'other';
    return n == 1 ? 'one' : n == 2 ? 'two' : t0 && n >= 3 && n <= 6 ? 'few' : t0 && n >= 7 && n <= 10 ? 'many' : 'other';
  };
  var gd = function gd(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    if (ord) return n == 1 || n == 11 ? 'one' : n == 2 || n == 12 ? 'two' : n == 3 || n == 13 ? 'few' : 'other';
    return n == 1 || n == 11 ? 'one' : n == 2 || n == 12 ? 'two' : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? 'few' : 'other';
  };
  var gl = d;
  var gsw = a;
  var gu = function gu(n, ord) {
    if (ord) return n == 1 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
    return n >= 0 && n <= 1 ? 'one' : 'other';
  };
  var guw = b;
  var gv = function gv(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    if (ord) return 'other';
    return v0 && i10 == 1 ? 'one' : v0 && i10 == 2 ? 'two' : v0 && (i100 == 0 || i100 == 20 || i100 == 40 || i100 == 60 || i100 == 80) ? 'few' : !v0 ? 'many' : 'other';
  };
  var ha = a;
  var haw = a;
  var he = function he(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1);
    if (ord) return 'other';
    return n == 1 && v0 ? 'one' : i == 2 && v0 ? 'two' : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many' : 'other';
  };
  var hi = function hi(n, ord) {
    if (ord) return n == 1 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
    return n >= 0 && n <= 1 ? 'one' : 'other';
  };
  var hnj = e;
  var hr = function hr(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    if (ord) return 'other';
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  };
  var hsb = function hsb(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i100 = i.slice(-2),
        f100 = f.slice(-2);
    if (ord) return 'other';
    return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
  };
  var hu = function hu(n, ord) {
    if (ord) return n == 1 || n == 5 ? 'one' : 'other';
    return n == 1 ? 'one' : 'other';
  };
  var hy = function hy(n, ord) {
    if (ord) return n == 1 ? 'one' : 'other';
    return n >= 0 && n < 2 ? 'one' : 'other';
  };
  var ia = d;
  var id = e;
  var ig = e;
  var ii = e;
  var io = d;
  var is = function is(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        t0 = Number(s[0]) == n,
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    if (ord) return 'other';
    return t0 && i10 == 1 && i100 != 11 || !t0 ? 'one' : 'other';
  };
  var it = function it(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? 'many' : 'other';
    return n == 1 && v0 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  };
  var iu = f;
  var ja = e;
  var jbo = e;
  var jgo = a;
  var jmc = a;
  var jv = e;
  var jw = e;
  var ka = function ka(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        i100 = i.slice(-2);
    if (ord) return i == 1 ? 'one' : i == 0 || i100 >= 2 && i100 <= 20 || i100 == 40 || i100 == 60 || i100 == 80 ? 'many' : 'other';
    return n == 1 ? 'one' : 'other';
  };
  var kab = function kab(n, ord) {
    if (ord) return 'other';
    return n >= 0 && n < 2 ? 'one' : 'other';
  };
  var kaj = a;
  var kcg = a;
  var kde = e;
  var kea = e;
  var kk = function kk(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1);
    if (ord) return n10 == 6 || n10 == 9 || t0 && n10 == 0 && n != 0 ? 'many' : 'other';
    return n == 1 ? 'one' : 'other';
  };
  var kkj = a;
  var kl = a;
  var km = e;
  var kn = c;
  var ko = e;
  var ks = a;
  var ksb = a;
  var ksh = function ksh(n, ord) {
    if (ord) return 'other';
    return n == 0 ? 'zero' : n == 1 ? 'one' : 'other';
  };
  var ku = a;
  var kw = function kw(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2),
        n1000 = t0 && s[0].slice(-3),
        n100000 = t0 && s[0].slice(-5),
        n1000000 = t0 && s[0].slice(-6);
    if (ord) return t0 && n >= 1 && n <= 4 || n100 >= 1 && n100 <= 4 || n100 >= 21 && n100 <= 24 || n100 >= 41 && n100 <= 44 || n100 >= 61 && n100 <= 64 || n100 >= 81 && n100 <= 84 ? 'one' : n == 5 || n100 == 5 ? 'many' : 'other';
    return n == 0 ? 'zero' : n == 1 ? 'one' : n100 == 2 || n100 == 22 || n100 == 42 || n100 == 62 || n100 == 82 || t0 && n1000 == 0 && (n100000 >= 1000 && n100000 <= 20000 || n100000 == 40000 || n100000 == 60000 || n100000 == 80000) || n != 0 && n1000000 == 100000 ? 'two' : n100 == 3 || n100 == 23 || n100 == 43 || n100 == 63 || n100 == 83 ? 'few' : n != 1 && (n100 == 1 || n100 == 21 || n100 == 41 || n100 == 61 || n100 == 81) ? 'many' : 'other';
  };
  var ky = a;
  var lag = function lag(n, ord) {
    var s = String(n).split('.'),
        i = s[0];
    if (ord) return 'other';
    return n == 0 ? 'zero' : (i == 0 || i == 1) && n != 0 ? 'one' : 'other';
  };
  var lb = a;
  var lg = a;
  var lij = function lij(n, ord) {
    var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n;
    if (ord) return n == 11 || n == 8 || t0 && n >= 80 && n <= 89 || t0 && n >= 800 && n <= 899 ? 'many' : 'other';
    return n == 1 && v0 ? 'one' : 'other';
  };
  var lkt = e;
  var ln = b;
  var lo = function lo(n, ord) {
    if (ord) return n == 1 ? 'one' : 'other';
    return 'other';
  };
  var lt = function lt(n, ord) {
    var s = String(n).split('.'),
        f = s[1] || '',
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    if (ord) return 'other';
    return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one' : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? 'few' : f != 0 ? 'many' : 'other';
  };
  var lv = function lv(n, ord) {
    var s = String(n).split('.'),
        f = s[1] || '',
        v = f.length,
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        f100 = f.slice(-2),
        f10 = f.slice(-1);
    if (ord) return 'other';
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
  };
  var mas = a;
  var mg = b;
  var mgo = a;
  var mk = function mk(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    if (ord) return i10 == 1 && i100 != 11 ? 'one' : i10 == 2 && i100 != 12 ? 'two' : (i10 == 7 || i10 == 8) && i100 != 17 && i100 != 18 ? 'many' : 'other';
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : 'other';
  };
  var ml = a;
  var mn = a;
  var mo = function mo(n, ord) {
    var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    if (ord) return n == 1 ? 'one' : 'other';
    return n == 1 && v0 ? 'one' : !v0 || n == 0 || n100 >= 2 && n100 <= 19 ? 'few' : 'other';
  };
  var mr = function mr(n, ord) {
    if (ord) return n == 1 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : 'other';
    return n == 1 ? 'one' : 'other';
  };
  var ms = function ms(n, ord) {
    if (ord) return n == 1 ? 'one' : 'other';
    return 'other';
  };
  var mt = function mt(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    if (ord) return 'other';
    return n == 1 ? 'one' : n == 0 || n100 >= 2 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 19 ? 'many' : 'other';
  };
  var my = e;
  var nah = a;
  var naq = f;
  var nb = a;
  var nd = a;
  var ne = function ne(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    if (ord) return t0 && n >= 1 && n <= 4 ? 'one' : 'other';
    return n == 1 ? 'one' : 'other';
  };
  var nl = d;
  var nn = a;
  var nnh = a;
  var no = a;
  var nqo = e;
  var nr = a;
  var nso = b;
  var ny = a;
  var nyn = a;
  var om = a;
  var or = function or(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    if (ord) return n == 1 || n == 5 || t0 && n >= 7 && n <= 9 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
    return n == 1 ? 'one' : 'other';
  };
  var os = a;
  var osa = e;
  var pa = b;
  var pap = a;
  var pcm = c;
  var pl = function pl(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    if (ord) return 'other';
    return n == 1 && v0 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? 'many' : 'other';
  };
  var prg = function prg(n, ord) {
    var s = String(n).split('.'),
        f = s[1] || '',
        v = f.length,
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        f100 = f.slice(-2),
        f10 = f.slice(-1);
    if (ord) return 'other';
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
  };
  var ps = a;
  var pt = function pt(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    if (ord) return 'other';
    return i == 0 || i == 1 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  };
  var pt_PT = function pt_PT(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    if (ord) return 'other';
    return n == 1 && v0 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  };
  var rm = a;
  var ro = function ro(n, ord) {
    var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    if (ord) return n == 1 ? 'one' : 'other';
    return n == 1 && v0 ? 'one' : !v0 || n == 0 || n100 >= 2 && n100 <= 19 ? 'few' : 'other';
  };
  var rof = a;
  var ru = function ru(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    if (ord) return 'other';
    return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
  };
  var rwk = a;
  var sah = e;
  var saq = a;
  var sat = f;
  var sc = function sc(n, ord) {
    var s = String(n).split('.'),
        v0 = !s[1];
    if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? 'many' : 'other';
    return n == 1 && v0 ? 'one' : 'other';
  };
  var scn = function scn(n, ord) {
    var s = String(n).split('.'),
        v0 = !s[1];
    if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? 'many' : 'other';
    return n == 1 && v0 ? 'one' : 'other';
  };
  var sd = a;
  var sdh = a;
  var se = f;
  var seh = a;
  var ses = e;
  var sg = e;
  var sh = function sh(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    if (ord) return 'other';
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  };
  var shi = function shi(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    if (ord) return 'other';
    return n >= 0 && n <= 1 ? 'one' : t0 && n >= 2 && n <= 10 ? 'few' : 'other';
  };
  var si = function si(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '';
    if (ord) return 'other';
    return n == 0 || n == 1 || i == 0 && f == 1 ? 'one' : 'other';
  };
  var sk = function sk(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1];
    if (ord) return 'other';
    return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
  };
  var sl = function sl(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i100 = i.slice(-2);
    if (ord) return 'other';
    return v0 && i100 == 1 ? 'one' : v0 && i100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few' : 'other';
  };
  var sma = f;
  var smi = f;
  var smj = f;
  var smn = f;
  var sms = f;
  var sn = a;
  var so = a;
  var sq = function sq(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    if (ord) return n == 1 ? 'one' : n10 == 4 && n100 != 14 ? 'many' : 'other';
    return n == 1 ? 'one' : 'other';
  };
  var sr = function sr(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    if (ord) return 'other';
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  };
  var ss = a;
  var ssy = a;
  var st = a;
  var su = e;
  var sv = function sv(n, ord) {
    var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    if (ord) return (n10 == 1 || n10 == 2) && n100 != 11 && n100 != 12 ? 'one' : 'other';
    return n == 1 && v0 ? 'one' : 'other';
  };
  var sw = d;
  var syr = a;
  var ta = a;
  var te = a;
  var teo = a;
  var th = e;
  var ti = b;
  var tig = a;
  var tk = function tk(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1);
    if (ord) return n10 == 6 || n10 == 9 || n == 10 ? 'few' : 'other';
    return n == 1 ? 'one' : 'other';
  };
  var tl = function tl(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    if (ord) return n == 1 ? 'one' : 'other';
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
  };
  var tn = a;
  var to = e;
  var tpi = e;
  var tr = a;
  var ts = a;
  var tzm = function tzm(n, ord) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    if (ord) return 'other';
    return n == 0 || n == 1 || t0 && n >= 11 && n <= 99 ? 'one' : 'other';
  };
  var ug = a;
  var uk = function uk(n, ord) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    if (ord) return n10 == 3 && n100 != 13 ? 'few' : 'other';
    return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
  };
  var und = e;
  var ur = d;
  var uz = a;
  var ve = a;
  var vi = function vi(n, ord) {
    if (ord) return n == 1 ? 'one' : 'other';
    return 'other';
  };
  var vo = a;
  var vun = a;
  var wa = b;
  var wae = a;
  var wo = e;
  var xh = a;
  var xog = a;
  var yi = d;
  var yo = e;
  var yue = e;
  var zh = e;
  var zu = c;

  var Plurals = /*#__PURE__*/Object.freeze({
    __proto__: null,
    af: af,
    ak: ak,
    am: am,
    an: an,
    ar: ar,
    ars: ars,
    as: as,
    asa: asa,
    ast: ast,
    az: az,
    bal: bal,
    be: be,
    bem: bem,
    bez: bez,
    bg: bg,
    bho: bho,
    bm: bm,
    bn: bn,
    bo: bo,
    br: br,
    brx: brx,
    bs: bs,
    ca: ca,
    ce: ce,
    ceb: ceb,
    cgg: cgg,
    chr: chr,
    ckb: ckb,
    cs: cs,
    cy: cy,
    da: da,
    de: de,
    doi: doi,
    dsb: dsb,
    dv: dv,
    dz: dz,
    ee: ee,
    el: el,
    en: en,
    eo: eo,
    es: es,
    et: et,
    eu: eu,
    fa: fa,
    ff: ff,
    fi: fi,
    fil: fil,
    fo: fo,
    fr: fr,
    fur: fur,
    fy: fy,
    ga: ga,
    gd: gd,
    gl: gl,
    gsw: gsw,
    gu: gu,
    guw: guw,
    gv: gv,
    ha: ha,
    haw: haw,
    he: he,
    hi: hi,
    hnj: hnj,
    hr: hr,
    hsb: hsb,
    hu: hu,
    hy: hy,
    ia: ia,
    id: id,
    ig: ig,
    ii: ii,
    io: io,
    is: is,
    it: it,
    iu: iu,
    ja: ja,
    jbo: jbo,
    jgo: jgo,
    jmc: jmc,
    jv: jv,
    jw: jw,
    ka: ka,
    kab: kab,
    kaj: kaj,
    kcg: kcg,
    kde: kde,
    kea: kea,
    kk: kk,
    kkj: kkj,
    kl: kl,
    km: km,
    kn: kn,
    ko: ko,
    ks: ks,
    ksb: ksb,
    ksh: ksh,
    ku: ku,
    kw: kw,
    ky: ky,
    lag: lag,
    lb: lb,
    lg: lg,
    lij: lij,
    lkt: lkt,
    ln: ln,
    lo: lo,
    lt: lt,
    lv: lv,
    mas: mas,
    mg: mg,
    mgo: mgo,
    mk: mk,
    ml: ml,
    mn: mn,
    mo: mo,
    mr: mr,
    ms: ms,
    mt: mt,
    my: my,
    nah: nah,
    naq: naq,
    nb: nb,
    nd: nd,
    ne: ne,
    nl: nl,
    nn: nn,
    nnh: nnh,
    no: no,
    nqo: nqo,
    nr: nr,
    nso: nso,
    ny: ny,
    nyn: nyn,
    om: om,
    or: or,
    os: os,
    osa: osa,
    pa: pa,
    pap: pap,
    pcm: pcm,
    pl: pl,
    prg: prg,
    ps: ps,
    pt: pt,
    pt_PT: pt_PT,
    rm: rm,
    ro: ro,
    rof: rof,
    ru: ru,
    rwk: rwk,
    sah: sah,
    saq: saq,
    sat: sat,
    sc: sc,
    scn: scn,
    sd: sd,
    sdh: sdh,
    se: se,
    seh: seh,
    ses: ses,
    sg: sg,
    sh: sh,
    shi: shi,
    si: si,
    sk: sk,
    sl: sl,
    sma: sma,
    smi: smi,
    smj: smj,
    smn: smn,
    sms: sms,
    sn: sn,
    so: so,
    sq: sq,
    sr: sr,
    ss: ss,
    ssy: ssy,
    st: st,
    su: su,
    sv: sv,
    sw: sw,
    syr: syr,
    ta: ta,
    te: te,
    teo: teo,
    th: th,
    ti: ti,
    tig: tig,
    tk: tk,
    tl: tl,
    tn: tn,
    to: to,
    tpi: tpi,
    tr: tr,
    ts: ts,
    tzm: tzm,
    ug: ug,
    uk: uk,
    und: und,
    ur: ur,
    uz: uz,
    ve: ve,
    vi: vi,
    vo: vo,
    vun: vun,
    wa: wa,
    wae: wae,
    wo: wo,
    xh: xh,
    xog: xog,
    yi: yi,
    yo: yo,
    yue: yue,
    zh: zh,
    zu: zu
  });

  function normalize(locale) {
      if (typeof locale !== 'string' || locale.length < 2)
          throw new RangeError("Invalid language tag: ".concat(locale));
      if (locale.startsWith('pt-PT'))
          return 'pt-PT';
      var m = locale.match(/.+?(?=[-_])/);
      return m ? m[0] : locale;
  }
  function getPlural(locale) {
      if (typeof locale === 'function') {
          var lc_1 = normalize(locale.name);
          return {
              isDefault: false,
              id: identifier(lc_1),
              lc: lc_1,
              locale: locale.name,
              getPlural: locale,
              cardinals: locale.cardinals || [],
              ordinals: locale.ordinals || []
          };
      }
      var lc = normalize(locale);
      var id = identifier(lc);
      if (isPluralId(id)) {
          return {
              isDefault: true,
              id: id,
              lc: lc,
              locale: locale,
              getCardinal: Cardinals[id],
              getPlural: Plurals[id],
              cardinals: PluralCategories[id].cardinal,
              ordinals: PluralCategories[id].ordinal
          };
      }
      return null;
  }
  function getAllPlurals(firstLocale) {
      var keys = Object.keys(Plurals).filter(function (key) { return key !== firstLocale; });
      keys.unshift(firstLocale);
      return keys.map(getPlural);
  }
  function hasPlural(locale) {
      var lc = normalize(locale);
      return identifier(lc) in Plurals;
  }
  function isPluralId(id) {
      return id in Plurals;
  }

  var MessageFormat = (function () {
      function MessageFormat(locale, options) {
          this.plurals = [];
          this.options = Object.assign({
              biDiSupport: false,
              currency: 'USD',
              customFormatters: {},
              requireAllArguments: false,
              returnType: 'string',
              strict: (options && options.strictNumberSign) || false
          }, options);
          if (locale === '*') {
              this.plurals = getAllPlurals(MessageFormat.defaultLocale);
          }
          else if (Array.isArray(locale)) {
              this.plurals = locale.map(getPlural).filter(Boolean);
          }
          else if (locale) {
              var pl = getPlural(locale);
              if (pl)
                  this.plurals = [pl];
          }
          if (this.plurals.length === 0) {
              var pl = getPlural(MessageFormat.defaultLocale);
              this.plurals = [pl];
          }
      }
      MessageFormat.escape = function (str, octothorpe) {
          var esc = octothorpe ? /[#{}]/g : /[{}]/g;
          return String(str).replace(esc, "'$&'");
      };
      MessageFormat.supportedLocalesOf = function (locales) {
          var la = Array.isArray(locales) ? locales : [locales];
          return la.filter(hasPlural);
      };
      MessageFormat.prototype.resolvedOptions = function () {
          return _assign(_assign({}, this.options), { locale: this.plurals[0].locale, plurals: this.plurals });
      };
      MessageFormat.prototype.compile = function (message) {
          var e_1, _a;
          var compiler = new Compiler(this.options);
          var fnBody = 'return ' + compiler.compile(message, this.plurals[0]);
          var nfArgs = [];
          var fnArgs = [];
          try {
              for (var _b = __values(Object.entries(compiler.runtime)), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var _d = __read(_c.value, 2), key = _d[0], fmt = _d[1];
                  nfArgs.push(key);
                  fnArgs.push(fmt);
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_1) throw e_1.error; }
          }
          var fn = new (Function.bind.apply(Function, __spreadArray(__spreadArray([void 0], __read(nfArgs), false), [fnBody], false)))();
          return fn.apply(void 0, __spreadArray([], __read(fnArgs), false));
      };
      MessageFormat.defaultLocale = 'en';
      return MessageFormat;
  }());

  return MessageFormat;

}));
