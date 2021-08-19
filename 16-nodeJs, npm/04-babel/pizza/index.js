"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

//  Shop Class
function generateId() {
  return Math.random().toString().slice(2);
}

var _items = /*#__PURE__*/new WeakMap();

var _generateId = /*#__PURE__*/new WeakSet();

var Shop = /*#__PURE__*/function () {
  // private field
  function Shop(name, adress, items) {
    _classCallCheck(this, Shop);

    _generateId.add(this);

    _items.set(this, {
      writable: true,
      value: void 0
    });

    this.name = name;
    this.adress = adress;

    _classPrivateFieldSet(this, _items, items);
  }

  _createClass(Shop, [{
    key: "showItems",
    value: function showItems() {
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _items)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var id = item.id,
              name = item.name,
              price = item.price,
              amount = item.amount,
              category = item.category;
          console.log("id-".concat(id, ", name-").concat(name, ", price-").concat(price, ", amount-").concat(amount, ", category-").concat(category));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "addItem",
    value: function addItem(_ref) {
      var name = _ref.name,
          price = _ref.price,
          amount = _ref.amount,
          category = _ref.category;
      var item = {
        id: _classPrivateMethodGet(this, _generateId, _generateId2).call(this),
        name: name,
        price: price,
        amount: amount,
        category: category
      };

      _classPrivateFieldGet(this, _items).push(item);
    }
  }, {
    key: "updateItem",
    value: function updateItem(productName, newName) {
      var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _items)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;

          if (item.name === productName) {
            item.name = newName;
          } else {
            console.log("Не нашли");
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "removeItem",
    value: function removeItem(productName) {
      var _iterator3 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _items)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;

          if (item.name === productName) {
            var index = _classPrivateFieldGet(this, _items).indexOf(item);

            _classPrivateFieldGet(this, _items).splice(index, 1);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    } // Private method

  }]);

  return Shop;
}();

function _generateId2() {
  return Math.random().toString().slice(2);
}

var items = [{
  id: 1,
  name: "apples",
  price: 35,
  amount: 500,
  category: "fruits"
}, {
  id: 2,
  name: "potato",
  price: 15,
  amount: 750,
  category: "vegatables"
}, {
  id: 3,
  name: "banana",
  price: 28,
  amount: 150,
  category: "fruits"
}, {
  id: 4,
  name: "tomatoes",
  price: 20,
  amount: 350,
  category: "vegatables"
}];
var ATB = new Shop("ATB", "Kyiv", items); // let Silpo = new Shop("Silpo", "Lviv", items);

var kiwi = {
  name: "kiwi",
  price: 40,
  amount: 100,
  category: "fruits"
};
var melon = {
  name: "melon",
  price: 35,
  amount: 600,
  category: "fruits"
};
ATB.addItem(melon);
ATB.showItems();