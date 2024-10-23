/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var a_ = Object.create;
  var cn = Object.defineProperty;
  var s_ = Object.getOwnPropertyDescriptor;
  var u_ = Object.getOwnPropertyNames;
  var c_ = Object.getPrototypeOf,
    l_ = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ge = (e, t) => {
      for (var r in t) cn(e, r, { get: t[r], enumerable: !0 });
    },
    ks = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of u_(t))
          !l_.call(e, i) &&
            i !== r &&
            cn(e, i, {
              get: () => t[i],
              enumerable: !(n = s_(t, i)) || n.enumerable,
            });
      return e;
    };
  var de = (e, t, r) => (
    (r = e != null ? a_(c_(e)) : {}),
    ks(
      t || !e || !e.__esModule
        ? cn(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
    nt = (e) => ks(cn({}, "__esModule", { value: !0 }), e);
  var Di = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(d, w) {
        var R = new g.Bare();
        return R.init(d, w);
      }
      function r(d) {
        return d.replace(/[A-Z]/g, function (w) {
          return "-" + w.toLowerCase();
        });
      }
      function n(d) {
        var w = parseInt(d.slice(1), 16),
          R = (w >> 16) & 255,
          L = (w >> 8) & 255,
          A = 255 & w;
        return [R, L, A];
      }
      function i(d, w, R) {
        return (
          "#" + ((1 << 24) | (d << 16) | (w << 8) | R).toString(16).slice(1)
        );
      }
      function o() { }
      function a(d, w) {
        f("Type warning: Expected: [" + d + "] Got: [" + typeof w + "] " + w);
      }
      function u(d, w, R) {
        f("Units do not match [" + d + "]: " + w + ", " + R);
      }
      function s(d, w, R) {
        if ((w !== void 0 && (R = w), d === void 0)) return R;
        var L = R;
        return (
          Te.test(d) || !Ce.test(d)
            ? (L = parseInt(d, 10))
            : Ce.test(d) && (L = 1e3 * parseFloat(d)),
          0 > L && (L = 0),
          L === L ? L : R
        );
      }
      function f(d) {
        re.debug && window && window.console.warn(d);
      }
      function _(d) {
        for (var w = -1, R = d ? d.length : 0, L = []; ++w < R;) {
          var A = d[w];
          A && L.push(A);
        }
        return L;
      }
      var p = (function (d, w, R) {
        function L(ae) {
          return typeof ae == "object";
        }
        function A(ae) {
          return typeof ae == "function";
        }
        function M() { }
        function te(ae, ve) {
          function Q() {
            var Le = new ue();
            return A(Le.init) && Le.init.apply(Le, arguments), Le;
          }
          function ue() { }
          ve === R && ((ve = ae), (ae = Object)), (Q.Bare = ue);
          var ce,
            _e = (M[d] = ae[d]),
            rt = (ue[d] = Q[d] = new M());
          return (
            (rt.constructor = Q),
            (Q.mixin = function (Le) {
              return (ue[d] = Q[d] = te(Q, Le)[d]), Q;
            }),
            (Q.open = function (Le) {
              if (
                ((ce = {}),
                  A(Le) ? (ce = Le.call(Q, rt, _e, Q, ae)) : L(Le) && (ce = Le),
                  L(ce))
              )
                for (var br in ce) w.call(ce, br) && (rt[br] = ce[br]);
              return A(rt.init) || (rt.init = ae), Q;
            }),
            Q.open(ve)
          );
        }
        return te;
      })("prototype", {}.hasOwnProperty),
        b = {
          ease: [
            "ease",
            function (d, w, R, L) {
              var A = (d /= L) * d,
                M = A * d;
              return (
                w +
                R * (-2.75 * M * A + 11 * A * A + -15.5 * M + 8 * A + 0.25 * d)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (d, w, R, L) {
              var A = (d /= L) * d,
                M = A * d;
              return w + R * (-1 * M * A + 3 * A * A + -3 * M + 2 * A);
            },
          ],
          "ease-out": [
            "ease-out",
            function (d, w, R, L) {
              var A = (d /= L) * d,
                M = A * d;
              return (
                w +
                R * (0.3 * M * A + -1.6 * A * A + 2.2 * M + -1.8 * A + 1.9 * d)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (d, w, R, L) {
              var A = (d /= L) * d,
                M = A * d;
              return w + R * (2 * M * A + -5 * A * A + 2 * M + 2 * A);
            },
          ],
          linear: [
            "linear",
            function (d, w, R, L) {
              return (R * d) / L + w;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (d, w, R, L) {
              return R * (d /= L) * d + w;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (d, w, R, L) {
              return -R * (d /= L) * (d - 2) + w;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (d, w, R, L) {
              return (d /= L / 2) < 1
                ? (R / 2) * d * d + w
                : (-R / 2) * (--d * (d - 2) - 1) + w;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (d, w, R, L) {
              return R * (d /= L) * d * d + w;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (d, w, R, L) {
              return R * ((d = d / L - 1) * d * d + 1) + w;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (d, w, R, L) {
              return (d /= L / 2) < 1
                ? (R / 2) * d * d * d + w
                : (R / 2) * ((d -= 2) * d * d + 2) + w;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (d, w, R, L) {
              return R * (d /= L) * d * d * d + w;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (d, w, R, L) {
              return -R * ((d = d / L - 1) * d * d * d - 1) + w;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (d, w, R, L) {
              return (d /= L / 2) < 1
                ? (R / 2) * d * d * d * d + w
                : (-R / 2) * ((d -= 2) * d * d * d - 2) + w;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (d, w, R, L) {
              return R * (d /= L) * d * d * d * d + w;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (d, w, R, L) {
              return R * ((d = d / L - 1) * d * d * d * d + 1) + w;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (d, w, R, L) {
              return (d /= L / 2) < 1
                ? (R / 2) * d * d * d * d * d + w
                : (R / 2) * ((d -= 2) * d * d * d * d + 2) + w;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (d, w, R, L) {
              return -R * Math.cos((d / L) * (Math.PI / 2)) + R + w;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (d, w, R, L) {
              return R * Math.sin((d / L) * (Math.PI / 2)) + w;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (d, w, R, L) {
              return (-R / 2) * (Math.cos((Math.PI * d) / L) - 1) + w;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (d, w, R, L) {
              return d === 0 ? w : R * Math.pow(2, 10 * (d / L - 1)) + w;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (d, w, R, L) {
              return d === L
                ? w + R
                : R * (-Math.pow(2, (-10 * d) / L) + 1) + w;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (d, w, R, L) {
              return d === 0
                ? w
                : d === L
                  ? w + R
                  : (d /= L / 2) < 1
                    ? (R / 2) * Math.pow(2, 10 * (d - 1)) + w
                    : (R / 2) * (-Math.pow(2, -10 * --d) + 2) + w;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (d, w, R, L) {
              return -R * (Math.sqrt(1 - (d /= L) * d) - 1) + w;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (d, w, R, L) {
              return R * Math.sqrt(1 - (d = d / L - 1) * d) + w;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (d, w, R, L) {
              return (d /= L / 2) < 1
                ? (-R / 2) * (Math.sqrt(1 - d * d) - 1) + w
                : (R / 2) * (Math.sqrt(1 - (d -= 2) * d) + 1) + w;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (d, w, R, L, A) {
              return (
                A === void 0 && (A = 1.70158),
                R * (d /= L) * d * ((A + 1) * d - A) + w
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (d, w, R, L, A) {
              return (
                A === void 0 && (A = 1.70158),
                R * ((d = d / L - 1) * d * ((A + 1) * d + A) + 1) + w
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (d, w, R, L, A) {
              return (
                A === void 0 && (A = 1.70158),
                (d /= L / 2) < 1
                  ? (R / 2) * d * d * (((A *= 1.525) + 1) * d - A) + w
                  : (R / 2) *
                  ((d -= 2) * d * (((A *= 1.525) + 1) * d + A) + 2) +
                  w
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        E = document,
        I = window,
        x = "bkwld-tram",
        T = /[\-\.0-9]/g,
        P = /[A-Z]/,
        C = "number",
        N = /^(rgb|#)/,
        F = /(em|cm|mm|in|pt|pc|px)$/,
        q = /(em|cm|mm|in|pt|pc|px|%)$/,
        K = /(deg|rad|turn)$/,
        j = "unitless",
        $ = /(all|none) 0s ease 0s/,
        J = /^(width|height)$/,
        ne = " ",
        G = E.createElement("a"),
        S = ["Webkit", "Moz", "O", "ms"],
        k = ["-webkit-", "-moz-", "-o-", "-ms-"],
        B = function (d) {
          if (d in G.style) return { dom: d, css: d };
          var w,
            R,
            L = "",
            A = d.split("-");
          for (w = 0; w < A.length; w++)
            L += A[w].charAt(0).toUpperCase() + A[w].slice(1);
          for (w = 0; w < S.length; w++)
            if (((R = S[w] + L), R in G.style))
              return { dom: R, css: k[w] + d };
        },
        V = (t.support = {
          bind: Function.prototype.bind,
          transform: B("transform"),
          transition: B("transition"),
          backface: B("backface-visibility"),
          timing: B("transition-timing-function"),
        });
      if (V.transition) {
        var ee = V.timing.dom;
        if (((G.style[ee] = b["ease-in-back"][0]), !G.style[ee]))
          for (var ie in m) b[ie][0] = m[ie];
      }
      var U = (t.frame = (function () {
        var d =
          I.requestAnimationFrame ||
          I.webkitRequestAnimationFrame ||
          I.mozRequestAnimationFrame ||
          I.oRequestAnimationFrame ||
          I.msRequestAnimationFrame;
        return d && V.bind
          ? d.bind(I)
          : function (w) {
            I.setTimeout(w, 16);
          };
      })()),
        H = (t.now = (function () {
          var d = I.performance,
            w = d && (d.now || d.webkitNow || d.msNow || d.mozNow);
          return w && V.bind
            ? w.bind(d)
            : Date.now ||
            function () {
              return +new Date();
            };
        })()),
        v = p(function (d) {
          function w(oe, fe) {
            var Ee = _(("" + oe).split(ne)),
              pe = Ee[0];
            fe = fe || {};
            var Ne = z[pe];
            if (!Ne) return f("Unsupported property: " + pe);
            if (!fe.weak || !this.props[pe]) {
              var je = Ne[0],
                ke = this.props[pe];
              return (
                ke || (ke = this.props[pe] = new je.Bare()),
                ke.init(this.$el, Ee, Ne, fe),
                ke
              );
            }
          }
          function R(oe, fe, Ee) {
            if (oe) {
              var pe = typeof oe;
              if (
                (fe ||
                  (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  pe == "number" && fe)
              )
                return (
                  (this.timer = new Y({
                    duration: oe,
                    context: this,
                    complete: M,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && fe) {
                switch (oe) {
                  case "hide":
                    Q.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    ue.call(this);
                    break;
                  default:
                    w.call(this, oe, Ee && Ee[1]);
                }
                return M.call(this);
              }
              if (pe == "function") return void oe.call(this, this);
              if (pe == "object") {
                var Ne = 0;
                rt.call(
                  this,
                  oe,
                  function (Ie, o_) {
                    Ie.span > Ne && (Ne = Ie.span), Ie.stop(), Ie.animate(o_);
                  },
                  function (Ie) {
                    "wait" in Ie && (Ne = s(Ie.wait, 0));
                  }
                ),
                  _e.call(this),
                  Ne > 0 &&
                  ((this.timer = new Y({ duration: Ne, context: this })),
                    (this.active = !0),
                    fe && (this.timer.complete = M));
                var je = this,
                  ke = !1,
                  un = {};
                U(function () {
                  rt.call(je, oe, function (Ie) {
                    Ie.active && ((ke = !0), (un[Ie.name] = Ie.nextStyle));
                  }),
                    ke && je.$el.css(un);
                });
              }
            }
          }
          function L(oe) {
            (oe = s(oe, 0)),
              this.active
                ? this.queue.push({ options: oe })
                : ((this.timer = new Y({
                  duration: oe,
                  context: this,
                  complete: M,
                })),
                  (this.active = !0));
          }
          function A(oe) {
            return this.active
              ? (this.queue.push({ options: oe, args: arguments }),
                void (this.timer.complete = M))
              : f(
                "No active transition timer. Use start() or wait() before then()."
              );
          }
          function M() {
            if (
              (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
            ) {
              var oe = this.queue.shift();
              R.call(this, oe.options, !0, oe.args);
            }
          }
          function te(oe) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var fe;
            typeof oe == "string"
              ? ((fe = {}), (fe[oe] = 1))
              : (fe = typeof oe == "object" && oe != null ? oe : this.props),
              rt.call(this, fe, Le),
              _e.call(this);
          }
          function ae(oe) {
            te.call(this, oe), rt.call(this, oe, br, n_);
          }
          function ve(oe) {
            typeof oe != "string" && (oe = "block"),
              (this.el.style.display = oe);
          }
          function Q() {
            te.call(this), (this.el.style.display = "none");
          }
          function ue() {
            this.el.offsetHeight;
          }
          function ce() {
            te.call(this),
              e.removeData(this.el, x),
              (this.$el = this.el = null);
          }
          function _e() {
            var oe,
              fe,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (oe in this.props)
              (fe = this.props[oe]), fe.active && Ee.push(fe.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
              ((this.style = Ee), (this.el.style[V.transition.dom] = Ee));
          }
          function rt(oe, fe, Ee) {
            var pe,
              Ne,
              je,
              ke,
              un = fe !== Le,
              Ie = {};
            for (pe in oe)
              (je = oe[pe]),
                pe in le
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[pe] = je))
                  : (P.test(pe) && (pe = r(pe)),
                    pe in z ? (Ie[pe] = je) : (ke || (ke = {}), (ke[pe] = je)));
            for (pe in Ie) {
              if (((je = Ie[pe]), (Ne = this.props[pe]), !Ne)) {
                if (!un) continue;
                Ne = w.call(this, pe);
              }
              fe.call(this, Ne, je);
            }
            Ee && ke && Ee.call(this, ke);
          }
          function Le(oe) {
            oe.stop();
          }
          function br(oe, fe) {
            oe.set(fe);
          }
          function n_(oe) {
            this.$el.css(oe);
          }
          function Be(oe, fe) {
            d[oe] = function () {
              return this.children
                ? i_.call(this, fe, arguments)
                : (this.el && fe.apply(this, arguments), this);
            };
          }
          function i_(oe, fe) {
            var Ee,
              pe = this.children.length;
            for (Ee = 0; pe > Ee; Ee++) oe.apply(this.children[Ee], fe);
            return this;
          }
          (d.init = function (oe) {
            if (
              ((this.$el = e(oe)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                re.keepInherited && !re.fallback)
            ) {
              var fe = W(this.el, "transition");
              fe && !$.test(fe) && (this.upstream = fe);
            }
            V.backface &&
              re.hideBackface &&
              y(this.el, V.backface.css, "hidden");
          }),
            Be("add", w),
            Be("start", R),
            Be("wait", L),
            Be("then", A),
            Be("next", M),
            Be("stop", te),
            Be("set", ae),
            Be("show", ve),
            Be("hide", Q),
            Be("redraw", ue),
            Be("destroy", ce);
        }),
        g = p(v, function (d) {
          function w(R, L) {
            var A = e.data(R, x) || e.data(R, x, new v.Bare());
            return A.el || A.init(R), L ? A.start(L) : A;
          }
          d.init = function (R, L) {
            var A = e(R);
            if (!A.length) return this;
            if (A.length === 1) return w(A[0], L);
            var M = [];
            return (
              A.each(function (te, ae) {
                M.push(w(ae, L));
              }),
              (this.children = M),
              this
            );
          };
        }),
        h = p(function (d) {
          function w() {
            var M = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(M), te;
          }
          function R(M, te, ae) {
            return te !== void 0 && (ae = te), M in b ? M : ae;
          }
          function L(M) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(M);
            return (te ? i(te[1], te[2], te[3]) : M).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var A = { duration: 500, ease: "ease", delay: 0 };
          (d.init = function (M, te, ae, ve) {
            (this.$el = M), (this.el = M[0]);
            var Q = te[0];
            ae[2] && (Q = ae[2]),
              Z[Q] && (Q = Z[Q]),
              (this.name = Q),
              (this.type = ae[1]),
              (this.duration = s(te[1], this.duration, A.duration)),
              (this.ease = R(te[2], this.ease, A.ease)),
              (this.delay = s(te[3], this.delay, A.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = J.test(this.name)),
              (this.unit = ve.unit || this.unit || re.defaultUnit),
              (this.angle = ve.angle || this.angle || re.defaultAngle),
              re.fallback || ve.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    ne +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? ne + b[this.ease][0] : "") +
                    (this.delay ? ne + this.delay + "ms" : "")));
          }),
            (d.set = function (M) {
              (M = this.convert(M, this.type)), this.update(M), this.redraw();
            }),
            (d.transition = function (M) {
              (this.active = !0),
                (M = this.convert(M, this.type)),
                this.auto &&
                (this.el.style[this.name] == "auto" &&
                  (this.update(this.get()), this.redraw()),
                  M == "auto" && (M = w.call(this))),
                (this.nextStyle = M);
            }),
            (d.fallback = function (M) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (M = this.convert(M, this.type)),
                this.auto &&
                (te == "auto" && (te = this.convert(this.get(), this.type)),
                  M == "auto" && (M = w.call(this))),
                (this.tween = new O({
                  from: te,
                  to: M,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (d.get = function () {
              return W(this.el, this.name);
            }),
            (d.update = function (M) {
              y(this.el, this.name, M);
            }),
            (d.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                  (this.nextStyle = null),
                  y(this.el, this.name, this.get()));
              var M = this.tween;
              M && M.context && M.destroy();
            }),
            (d.convert = function (M, te) {
              if (M == "auto" && this.auto) return M;
              var ae,
                ve = typeof M == "number",
                Q = typeof M == "string";
              switch (te) {
                case C:
                  if (ve) return M;
                  if (Q && M.replace(T, "") === "") return +M;
                  ae = "number(unitless)";
                  break;
                case N:
                  if (Q) {
                    if (M === "" && this.original) return this.original;
                    if (te.test(M))
                      return M.charAt(0) == "#" && M.length == 7 ? M : L(M);
                  }
                  ae = "hex or rgb string";
                  break;
                case F:
                  if (ve) return M + this.unit;
                  if (Q && te.test(M)) return M;
                  ae = "number(px) or string(unit)";
                  break;
                case q:
                  if (ve) return M + this.unit;
                  if (Q && te.test(M)) return M;
                  ae = "number(px) or string(unit or %)";
                  break;
                case K:
                  if (ve) return M + this.angle;
                  if (Q && te.test(M)) return M;
                  ae = "number(deg) or string(angle)";
                  break;
                case j:
                  if (ve || (Q && q.test(M))) return M;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, M), M;
            }),
            (d.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        l = p(h, function (d, w) {
          d.init = function () {
            w.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), N));
          };
        }),
        D = p(h, function (d, w) {
          (d.init = function () {
            w.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (d.get = function () {
              return this.$el[this.name]();
            }),
            (d.update = function (R) {
              this.$el[this.name](R);
            });
        }),
        X = p(h, function (d, w) {
          function R(L, A) {
            var M, te, ae, ve, Q;
            for (M in L)
              (ve = le[M]),
                (ae = ve[0]),
                (te = ve[1] || M),
                (Q = this.convert(L[M], ae)),
                A.call(this, te, Q, ae);
          }
          (d.init = function () {
            w.init.apply(this, arguments),
              this.current ||
              ((this.current = {}),
                le.perspective &&
                re.perspective &&
                ((this.current.perspective = re.perspective),
                  y(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (d.set = function (L) {
              R.call(this, L, function (A, M) {
                this.current[A] = M;
              }),
                y(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (d.transition = function (L) {
              var A = this.values(L);
              this.tween = new se({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var M,
                te = {};
              for (M in this.current) te[M] = M in A ? A[M] : this.current[M];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (d.fallback = function (L) {
              var A = this.values(L);
              this.tween = new se({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (d.update = function () {
              y(this.el, this.name, this.style(this.current));
            }),
            (d.style = function (L) {
              var A,
                M = "";
              for (A in L) M += A + "(" + L[A] + ") ";
              return M;
            }),
            (d.values = function (L) {
              var A,
                M = {};
              return (
                R.call(this, L, function (te, ae, ve) {
                  (M[te] = ae),
                    this.current[te] === void 0 &&
                    ((A = 0),
                      ~te.indexOf("scale") && (A = 1),
                      (this.current[te] = this.convert(A, ve)));
                }),
                M
              );
            });
        }),
        O = p(function (d) {
          function w(Q) {
            ae.push(Q) === 1 && U(R);
          }
          function R() {
            var Q,
              ue,
              ce,
              _e = ae.length;
            if (_e)
              for (U(R), ue = H(), Q = _e; Q--;)
                (ce = ae[Q]), ce && ce.render(ue);
          }
          function L(Q) {
            var ue,
              ce = e.inArray(Q, ae);
            ce >= 0 &&
              ((ue = ae.slice(ce + 1)),
                (ae.length = ce),
                ue.length && (ae = ae.concat(ue)));
          }
          function A(Q) {
            return Math.round(Q * ve) / ve;
          }
          function M(Q, ue, ce) {
            return i(
              Q[0] + ce * (ue[0] - Q[0]),
              Q[1] + ce * (ue[1] - Q[1]),
              Q[2] + ce * (ue[2] - Q[2])
            );
          }
          var te = { ease: b.ease[1], from: 0, to: 1 };
          (d.init = function (Q) {
            (this.duration = Q.duration || 0), (this.delay = Q.delay || 0);
            var ue = Q.ease || te.ease;
            b[ue] && (ue = b[ue][1]),
              typeof ue != "function" && (ue = te.ease),
              (this.ease = ue),
              (this.update = Q.update || o),
              (this.complete = Q.complete || o),
              (this.context = Q.context || this),
              (this.name = Q.name);
            var ce = Q.from,
              _e = Q.to;
            ce === void 0 && (ce = te.from),
              _e === void 0 && (_e = te.to),
              (this.unit = Q.unit || ""),
              typeof ce == "number" && typeof _e == "number"
                ? ((this.begin = ce), (this.change = _e - ce))
                : this.format(_e, ce),
              (this.value = this.begin + this.unit),
              (this.start = H()),
              Q.autoplay !== !1 && this.play();
          }),
            (d.play = function () {
              this.active ||
                (this.start || (this.start = H()), (this.active = !0), w(this));
            }),
            (d.stop = function () {
              this.active && ((this.active = !1), L(this));
            }),
            (d.render = function (Q) {
              var ue,
                ce = Q - this.start;
              if (this.delay) {
                if (ce <= this.delay) return;
                ce -= this.delay;
              }
              if (ce < this.duration) {
                var _e = this.ease(ce, 0, 1, this.duration);
                return (
                  (ue = this.startRGB
                    ? M(this.startRGB, this.endRGB, _e)
                    : A(this.begin + _e * this.change)),
                  (this.value = ue + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ue = this.endHex || this.begin + this.change),
                (this.value = ue + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (d.format = function (Q, ue) {
              if (((ue += ""), (Q += ""), Q.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ue)),
                  (this.endRGB = n(Q)),
                  (this.endHex = Q),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ce = ue.replace(T, ""),
                  _e = Q.replace(T, "");
                ce !== _e && u("tween", ue, Q), (this.unit = ce);
              }
              (ue = parseFloat(ue)),
                (Q = parseFloat(Q)),
                (this.begin = this.value = ue),
                (this.change = Q - ue);
            }),
            (d.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            ve = 1e3;
        }),
        Y = p(O, function (d) {
          (d.init = function (w) {
            (this.duration = w.duration || 0),
              (this.complete = w.complete || o),
              (this.context = w.context),
              this.play();
          }),
            (d.render = function (w) {
              var R = w - this.start;
              R < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        se = p(O, function (d, w) {
          (d.init = function (R) {
            (this.context = R.context),
              (this.update = R.update),
              (this.tweens = []),
              (this.current = R.current);
            var L, A;
            for (L in R.values)
              (A = R.values[L]),
                this.current[L] !== A &&
                this.tweens.push(
                  new O({
                    name: L,
                    from: this.current[L],
                    to: A,
                    duration: R.duration,
                    delay: R.delay,
                    ease: R.ease,
                    autoplay: !1,
                  })
                );
            this.play();
          }),
            (d.render = function (R) {
              var L,
                A,
                M = this.tweens.length,
                te = !1;
              for (L = M; L--;)
                (A = this.tweens[L]),
                  A.context &&
                  (A.render(R), (this.current[A.name] = A.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (d.destroy = function () {
              if ((w.destroy.call(this), this.tweens)) {
                var R,
                  L = this.tweens.length;
                for (R = L; R--;) this.tweens[R].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        re = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        });
      (t.fallback = function (d) {
        if (!V.transition) return (re.fallback = !0);
        re.agentTests.push("(" + d + ")");
        var w = new RegExp(re.agentTests.join("|"), "i");
        re.fallback = w.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (d) {
          return new O(d);
        }),
        (t.delay = function (d, w, R) {
          return new Y({ complete: w, duration: d, context: R });
        }),
        (e.fn.tram = function (d) {
          return t.call(null, this, d);
        });
      var y = e.style,
        W = e.css,
        Z = { transform: V.transform && V.transform.css },
        z = {
          color: [l, N],
          background: [l, N, "background-color"],
          "outline-color": [l, N],
          "border-color": [l, N],
          "border-top-color": [l, N],
          "border-right-color": [l, N],
          "border-bottom-color": [l, N],
          "border-left-color": [l, N],
          "border-width": [h, F],
          "border-top-width": [h, F],
          "border-right-width": [h, F],
          "border-bottom-width": [h, F],
          "border-left-width": [h, F],
          "border-spacing": [h, F],
          "letter-spacing": [h, F],
          margin: [h, F],
          "margin-top": [h, F],
          "margin-right": [h, F],
          "margin-bottom": [h, F],
          "margin-left": [h, F],
          padding: [h, F],
          "padding-top": [h, F],
          "padding-right": [h, F],
          "padding-bottom": [h, F],
          "padding-left": [h, F],
          "outline-width": [h, F],
          opacity: [h, C],
          top: [h, q],
          right: [h, q],
          bottom: [h, q],
          left: [h, q],
          "font-size": [h, q],
          "text-indent": [h, q],
          "word-spacing": [h, q],
          width: [h, q],
          "min-width": [h, q],
          "max-width": [h, q],
          height: [h, q],
          "min-height": [h, q],
          "max-height": [h, q],
          "line-height": [h, j],
          "scroll-top": [D, C, "scrollTop"],
          "scroll-left": [D, C, "scrollLeft"],
        },
        le = {};
      V.transform &&
        ((z.transform = [X]),
          (le = {
            x: [q, "translateX"],
            y: [q, "translateY"],
            rotate: [K],
            rotateX: [K],
            rotateY: [K],
            scale: [C],
            scaleX: [C],
            scaleY: [C],
            skew: [K],
            skewX: [K],
            skewY: [K],
          })),
        V.transform &&
        V.backface &&
        ((le.z = [q, "translateZ"]),
          (le.rotateZ = [K]),
          (le.scaleZ = [C]),
          (le.perspective = [F]));
      var Te = /ms/,
        Ce = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Xs = c((iW, Gs) => {
    "use strict";
    var f_ = window.$,
      d_ = Di() && f_.tram;
    Gs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        u = r.concat,
        s = n.toString,
        f = n.hasOwnProperty,
        _ = r.forEach,
        p = r.map,
        b = r.reduce,
        m = r.reduceRight,
        E = r.filter,
        I = r.every,
        x = r.some,
        T = r.indexOf,
        P = r.lastIndexOf,
        C = Array.isArray,
        N = Object.keys,
        F = i.bind,
        q =
          (e.each =
            e.forEach =
            function (S, k, B) {
              if (S == null) return S;
              if (_ && S.forEach === _) S.forEach(k, B);
              else if (S.length === +S.length) {
                for (var V = 0, ee = S.length; V < ee; V++)
                  if (k.call(B, S[V], V, S) === t) return;
              } else
                for (var ie = e.keys(S), V = 0, ee = ie.length; V < ee; V++)
                  if (k.call(B, S[ie[V]], ie[V], S) === t) return;
              return S;
            });
      (e.map = e.collect =
        function (S, k, B) {
          var V = [];
          return S == null
            ? V
            : p && S.map === p
              ? S.map(k, B)
              : (q(S, function (ee, ie, U) {
                V.push(k.call(B, ee, ie, U));
              }),
                V);
        }),
        (e.find = e.detect =
          function (S, k, B) {
            var V;
            return (
              K(S, function (ee, ie, U) {
                if (k.call(B, ee, ie, U)) return (V = ee), !0;
              }),
              V
            );
          }),
        (e.filter = e.select =
          function (S, k, B) {
            var V = [];
            return S == null
              ? V
              : E && S.filter === E
                ? S.filter(k, B)
                : (q(S, function (ee, ie, U) {
                  k.call(B, ee, ie, U) && V.push(ee);
                }),
                  V);
          });
      var K =
        (e.some =
          e.any =
          function (S, k, B) {
            k || (k = e.identity);
            var V = !1;
            return S == null
              ? V
              : x && S.some === x
                ? S.some(k, B)
                : (q(S, function (ee, ie, U) {
                  if (V || (V = k.call(B, ee, ie, U))) return t;
                }),
                  !!V);
          });
      (e.contains = e.include =
        function (S, k) {
          return S == null
            ? !1
            : T && S.indexOf === T
              ? S.indexOf(k) != -1
              : K(S, function (B) {
                return B === k;
              });
        }),
        (e.delay = function (S, k) {
          var B = a.call(arguments, 2);
          return setTimeout(function () {
            return S.apply(null, B);
          }, k);
        }),
        (e.defer = function (S) {
          return e.delay.apply(e, [S, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (S) {
          var k, B, V;
          return function () {
            k ||
              ((k = !0),
                (B = arguments),
                (V = this),
                d_.frame(function () {
                  (k = !1), S.apply(V, B);
                }));
          };
        }),
        (e.debounce = function (S, k, B) {
          var V,
            ee,
            ie,
            U,
            H,
            v = function () {
              var g = e.now() - U;
              g < k
                ? (V = setTimeout(v, k - g))
                : ((V = null), B || ((H = S.apply(ie, ee)), (ie = ee = null)));
            };
          return function () {
            (ie = this), (ee = arguments), (U = e.now());
            var g = B && !V;
            return (
              V || (V = setTimeout(v, k)),
              g && ((H = S.apply(ie, ee)), (ie = ee = null)),
              H
            );
          };
        }),
        (e.defaults = function (S) {
          if (!e.isObject(S)) return S;
          for (var k = 1, B = arguments.length; k < B; k++) {
            var V = arguments[k];
            for (var ee in V) S[ee] === void 0 && (S[ee] = V[ee]);
          }
          return S;
        }),
        (e.keys = function (S) {
          if (!e.isObject(S)) return [];
          if (N) return N(S);
          var k = [];
          for (var B in S) e.has(S, B) && k.push(B);
          return k;
        }),
        (e.has = function (S, k) {
          return f.call(S, k);
        }),
        (e.isObject = function (S) {
          return S === Object(S);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var j = /(.)^/,
        $ = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        J = /\\|'|\r|\n|\u2028|\u2029/g,
        ne = function (S) {
          return "\\" + $[S];
        },
        G = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (S, k, B) {
          !k && B && (k = B), (k = e.defaults({}, k, e.templateSettings));
          var V = RegExp(
            [
              (k.escape || j).source,
              (k.interpolate || j).source,
              (k.evaluate || j).source,
            ].join("|") + "|$",
            "g"
          ),
            ee = 0,
            ie = "__p+='";
          S.replace(V, function (g, h, l, D, X) {
            return (
              (ie += S.slice(ee, X).replace(J, ne)),
              (ee = X + g.length),
              h
                ? (ie +=
                  `'+
    ((__t=(` +
                  h +
                  `))==null?'':_.escape(__t))+
    '`)
                : l
                  ? (ie +=
                    `'+
    ((__t=(` +
                    l +
                    `))==null?'':__t)+
    '`)
                  : D &&
                  (ie +=
                    `';
    ` +
                    D +
                    `
    __p+='`),
              g
            );
          }),
            (ie += `';
    `);
          var U = k.variable;
          if (U) {
            if (!G.test(U))
              throw new Error("variable is not a bare identifier: " + U);
          } else
            (ie =
              `with(obj||{}){
    ` +
              ie +
              `}
    `),
              (U = "obj");
          ie =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            ie +
            `return __p;
    `;
          var H;
          try {
            H = new Function(k.variable || "obj", "_", ie);
          } catch (g) {
            throw ((g.source = ie), g);
          }
          var v = function (g) {
            return H.call(this, g, e);
          };
          return (
            (v.source =
              "function(" +
              U +
              `){
    ` +
              ie +
              "}"),
            v
          );
        }),
        e
      );
    })();
  });
  var qe = c((oW, Ks) => {
    "use strict";
    var ge = {},
      Wt = {},
      Vt = [],
      Fi = window.Webflow || [],
      bt = window.jQuery,
      Ke = bt(window),
      p_ = bt(document),
      it = bt.isFunction,
      ze = (ge._ = Xs()),
      Ws = (ge.tram = Di() && bt.tram),
      fn = !1,
      ki = !1;
    Ws.config.hideBackface = !1;
    Ws.config.keepInherited = !0;
    ge.define = function (e, t, r) {
      Wt[e] && Hs(Wt[e]);
      var n = (Wt[e] = t(bt, ze, r) || {});
      return Vs(n), n;
    };
    ge.require = function (e) {
      return Wt[e];
    };
    function Vs(e) {
      ge.env() &&
        (it(e.design) && Ke.on("__wf_design", e.design),
          it(e.preview) && Ke.on("__wf_preview", e.preview)),
        it(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && g_(e);
    }
    function g_(e) {
      if (fn) {
        e.ready();
        return;
      }
      ze.contains(Vt, e.ready) || Vt.push(e.ready);
    }
    function Hs(e) {
      it(e.design) && Ke.off("__wf_design", e.design),
        it(e.preview) && Ke.off("__wf_preview", e.preview),
        it(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && v_(e);
    }
    function v_(e) {
      Vt = ze.filter(Vt, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (fn) {
        it(e) && e();
        return;
      }
      Fi.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var ln = navigator.userAgent.toLowerCase(),
      Bs = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      h_ = (ge.env.chrome =
        /chrome/.test(ln) &&
        /Google/.test(navigator.vendor) &&
        parseInt(ln.match(/chrome\/(\d+)\./)[1], 10)),
      m_ = (ge.env.ios = /(ipod|iphone|ipad)/.test(ln));
    ge.env.safari = /safari/.test(ln) && !h_ && !m_;
    var Mi;
    Bs &&
      p_.on("touchstart mousedown", function (e) {
        Mi = e.target;
      });
    ge.validClick = Bs
      ? function (e) {
        return e === Mi || bt.contains(e, Mi);
      }
      : function () {
        return !0;
      };
    var js = "resize.webflow orientationchange.webflow load.webflow",
      y_ = "scroll.webflow " + js;
    ge.resize = Gi(Ke, js);
    ge.scroll = Gi(Ke, y_);
    ge.redraw = Gi();
    function Gi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (i) {
          ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () { });
    ge.ready = function () {
      (fn = !0), ki ? E_() : ze.each(Vt, Us), ze.each(Fi, Us), ge.resize.up();
    };
    function Us(e) {
      it(e) && e();
    }
    function E_() {
      (ki = !1), ze.each(Wt, Vs);
    }
    var Ct;
    ge.load = function (e) {
      Ct.then(e);
    };
    function zs() {
      Ct && (Ct.reject(), Ke.off("load", Ct.resolve)),
        (Ct = new bt.Deferred()),
        Ke.on("load", Ct.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        (ki = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (fn = e.domready),
        ze.each(Wt, Hs),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (Vt = []),
        (Fi = []),
        Ct.state() === "pending" && zs();
    };
    bt(ge.ready);
    zs();
    Ks.exports = window.Webflow = ge;
  });
  var $s = c((aW, Qs) => {
    "use strict";
    var Ys = qe();
    Ys.define(
      "brand",
      (Qs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          s =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            E = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(E) && a.hostname !== E && (m = !0),
            m &&
            !u &&
            ((f = f || p()),
              b(),
              setTimeout(b, 500),
              e(r).off(s, _).on(s, _));
        };
        function _() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", m ? "display: none !important;" : "");
        }
        function p() {
          var m = e('<a class="w-webflow-badge"></a>').attr(
            "href",
            "https://webflow.com?utm_campaign=brandjs"
          ),
            E = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            I = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return m.append(E, I), m[0];
        }
        function b() {
          var m = i.children(o),
            E = m.length && m.get(0) === f,
            I = Ys.env("editor");
          if (E) {
            I && m.remove();
            return;
          }
          m.length && m.remove(), I || i.append(f);
        }
        return t;
      })
    );
  });
  var Js = c((sW, Zs) => {
    "use strict";
    var Xi = qe();
    Xi.define(
      "edit",
      (Zs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
            (Xi.env("test") || Xi.env("frame")) && !r.fixture && !b_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          u = "hashchange",
          s,
          f = r.load || b,
          _ = !1;
        try {
          _ =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch { }
        _
          ? f()
          : a.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
            : i.on(u, p).triggerHandler(u);
        function p() {
          s || (/\?edit/.test(a.hash) && f());
        }
        function b() {
          (s = !0),
            (window.WebflowEditor = !0),
            i.off(u, p),
            P(function (N) {
              e.ajax({
                url: T("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: m(N),
              });
            });
        }
        function m(N) {
          return function (F) {
            if (!F) {
              console.error("Could not load editor data");
              return;
            }
            (F.thirdPartyCookiesSupported = N),
              E(x(F.scriptPath), function () {
                window.WebflowEditor(F);
              });
          };
        }
        function E(N, F) {
          e.ajax({ type: "GET", url: N, dataType: "script", cache: !0 }).then(
            F,
            I
          );
        }
        function I(N, F, q) {
          throw (console.error("Could not load editor script: " + F), q);
        }
        function x(N) {
          return N.indexOf("//") >= 0
            ? N
            : T("https://editor-api.webflow.com" + N);
        }
        function T(N) {
          return N.replace(/([^:])\/\//g, "$1/");
        }
        function P(N) {
          var F = window.document.createElement("iframe");
          (F.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (F.style.display = "none"),
            (F.sandbox = "allow-scripts allow-same-origin");
          var q = function (K) {
            K.data === "WF_third_party_cookies_unsupported"
              ? (C(F, q), N(!1))
              : K.data === "WF_third_party_cookies_supported" &&
              (C(F, q), N(!0));
          };
          (F.onerror = function () {
            C(F, q), N(!1);
          }),
            window.addEventListener("message", q, !1),
            window.document.body.appendChild(F);
        }
        function C(N, F) {
          window.removeEventListener("message", F, !1), N.remove();
        }
        return n;
      })
    );
    function b_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var tu = c((uW, eu) => {
    "use strict";
    var __ = qe();
    __.define(
      "focus-visible",
      (eu.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(C) {
            return !!(
              C &&
              C !== document &&
              C.nodeName !== "HTML" &&
              C.nodeName !== "BODY" &&
              "classList" in C &&
              "contains" in C.classList
            );
          }
          function s(C) {
            var N = C.type,
              F = C.tagName;
            return !!(
              (F === "INPUT" && a[N] && !C.readOnly) ||
              (F === "TEXTAREA" && !C.readOnly) ||
              C.isContentEditable
            );
          }
          function f(C) {
            C.getAttribute("data-wf-focus-visible") ||
              C.setAttribute("data-wf-focus-visible", "true");
          }
          function _(C) {
            C.getAttribute("data-wf-focus-visible") &&
              C.removeAttribute("data-wf-focus-visible");
          }
          function p(C) {
            C.metaKey ||
              C.altKey ||
              C.ctrlKey ||
              (u(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function b() {
            n = !1;
          }
          function m(C) {
            u(C.target) && (n || s(C.target)) && f(C.target);
          }
          function E(C) {
            u(C.target) &&
              C.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
                window.clearTimeout(o),
                (o = window.setTimeout(function () {
                  i = !1;
                }, 100)),
                _(C.target));
          }
          function I() {
            document.visibilityState === "hidden" && (i && (n = !0), x());
          }
          function x() {
            document.addEventListener("mousemove", P),
              document.addEventListener("mousedown", P),
              document.addEventListener("mouseup", P),
              document.addEventListener("pointermove", P),
              document.addEventListener("pointerdown", P),
              document.addEventListener("pointerup", P),
              document.addEventListener("touchmove", P),
              document.addEventListener("touchstart", P),
              document.addEventListener("touchend", P);
          }
          function T() {
            document.removeEventListener("mousemove", P),
              document.removeEventListener("mousedown", P),
              document.removeEventListener("mouseup", P),
              document.removeEventListener("pointermove", P),
              document.removeEventListener("pointerdown", P),
              document.removeEventListener("pointerup", P),
              document.removeEventListener("touchmove", P),
              document.removeEventListener("touchstart", P),
              document.removeEventListener("touchend", P);
          }
          function P(C) {
            (C.target.nodeName && C.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), T());
          }
          document.addEventListener("keydown", p, !0),
            document.addEventListener("mousedown", b, !0),
            document.addEventListener("pointerdown", b, !0),
            document.addEventListener("touchstart", b, !0),
            document.addEventListener("visibilitychange", I, !0),
            x(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", E, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var iu = c((cW, nu) => {
    "use strict";
    var ru = qe();
    ru.define(
      "focus",
      (nu.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            s = u.tagName;
          return (
            (/^a$/i.test(s) && u.href != null) ||
            (/^(button|textarea)$/i.test(s) && u.disabled !== !0) ||
            (/^input$/i.test(s) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(s) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(s) ||
            (/^video$/i.test(s) && u.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
              setTimeout(() => {
                for (t = !1, a.target.focus(); e.length > 0;) {
                  var u = e.pop();
                  u.target.dispatchEvent(new MouseEvent(u.type, u));
                }
              }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            ru.env.safari &&
            (document.addEventListener("mousedown", i, !0),
              document.addEventListener("mouseup", r, !0),
              document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var su = c((lW, au) => {
    "use strict";
    var Ui = window.jQuery,
      ot = {},
      dn = [],
      ou = ".w-ix",
      pn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Ui(t).triggerHandler(ot.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Ui(t).triggerHandler(ot.types.OUTRO));
        },
      };
    ot.triggers = {};
    ot.types = { INTRO: "w-ix-intro" + ou, OUTRO: "w-ix-outro" + ou };
    ot.init = function () {
      for (var e = dn.length, t = 0; t < e; t++) {
        var r = dn[t];
        r[0](0, r[1]);
      }
      (dn = []), Ui.extend(ot.triggers, pn);
    };
    ot.async = function () {
      for (var e in pn) {
        var t = pn[e];
        pn.hasOwnProperty(e) &&
          (ot.triggers[e] = function (r, n) {
            dn.push([t, n]);
          });
      }
    };
    ot.async();
    au.exports = ot;
  });
  var _r = c((fW, lu) => {
    "use strict";
    var Wi = su();
    function uu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var I_ = window.jQuery,
      gn = {},
      cu = ".w-ix",
      T_ = {
        reset: function (e, t) {
          Wi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Wi.triggers.intro(e, t), uu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Wi.triggers.outro(e, t), uu(t, "COMPONENT_INACTIVE");
        },
      };
    gn.triggers = {};
    gn.types = { INTRO: "w-ix-intro" + cu, OUTRO: "w-ix-outro" + cu };
    I_.extend(gn.triggers, T_);
    lu.exports = gn;
  });
  var fu = c((dW, pt) => {
    function Vi(e) {
      return (
        (pt.exports = Vi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
              return typeof t;
            }
            : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
        (pt.exports.__esModule = !0),
        (pt.exports.default = pt.exports),
        Vi(e)
      );
    }
    (pt.exports = Vi),
      (pt.exports.__esModule = !0),
      (pt.exports.default = pt.exports);
  });
  var vn = c((pW, Ir) => {
    var w_ = fu().default;
    function du(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (du = function (i) {
        return i ? r : t;
      })(e);
    }
    function x_(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (w_(e) != "object" && typeof e != "function"))
        return { default: e };
      var r = du(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Ir.exports = x_),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var pu = c((gW, Tr) => {
    function O_(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Tr.exports = O_),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var ye = c((vW, gu) => {
    var hn = function (e) {
      return e && e.Math == Math && e;
    };
    gu.exports =
      hn(typeof globalThis == "object" && globalThis) ||
      hn(typeof window == "object" && window) ||
      hn(typeof self == "object" && self) ||
      hn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Ht = c((hW, vu) => {
    vu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Pt = c((mW, hu) => {
    var A_ = Ht();
    hu.exports = !A_(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var mn = c((yW, mu) => {
    var wr = Function.prototype.call;
    mu.exports = wr.bind
      ? wr.bind(wr)
      : function () {
        return wr.apply(wr, arguments);
      };
  });
  var _u = c((bu) => {
    "use strict";
    var yu = {}.propertyIsEnumerable,
      Eu = Object.getOwnPropertyDescriptor,
      S_ = Eu && !yu.call({ 1: 2 }, 1);
    bu.f = S_
      ? function (t) {
        var r = Eu(this, t);
        return !!r && r.enumerable;
      }
      : yu;
  });
  var Hi = c((bW, Iu) => {
    Iu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((_W, wu) => {
    var Tu = Function.prototype,
      Bi = Tu.bind,
      ji = Tu.call,
      R_ = Bi && Bi.bind(ji);
    wu.exports = Bi
      ? function (e) {
        return e && R_(ji, e);
      }
      : function (e) {
        return (
          e &&
          function () {
            return ji.apply(e, arguments);
          }
        );
      };
  });
  var Au = c((IW, Ou) => {
    var xu = Ye(),
      C_ = xu({}.toString),
      P_ = xu("".slice);
    Ou.exports = function (e) {
      return P_(C_(e), 8, -1);
    };
  });
  var Ru = c((TW, Su) => {
    var L_ = ye(),
      N_ = Ye(),
      q_ = Ht(),
      D_ = Au(),
      zi = L_.Object,
      M_ = N_("".split);
    Su.exports = q_(function () {
      return !zi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
        return D_(e) == "String" ? M_(e, "") : zi(e);
      }
      : zi;
  });
  var Ki = c((wW, Cu) => {
    var F_ = ye(),
      k_ = F_.TypeError;
    Cu.exports = function (e) {
      if (e == null) throw k_("Can't call method on " + e);
      return e;
    };
  });
  var xr = c((xW, Pu) => {
    var G_ = Ru(),
      X_ = Ki();
    Pu.exports = function (e) {
      return G_(X_(e));
    };
  });
  var at = c((OW, Lu) => {
    Lu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Bt = c((AW, Nu) => {
    var U_ = at();
    Nu.exports = function (e) {
      return typeof e == "object" ? e !== null : U_(e);
    };
  });
  var Or = c((SW, qu) => {
    var Yi = ye(),
      W_ = at(),
      V_ = function (e) {
        return W_(e) ? e : void 0;
      };
    qu.exports = function (e, t) {
      return arguments.length < 2 ? V_(Yi[e]) : Yi[e] && Yi[e][t];
    };
  });
  var Mu = c((RW, Du) => {
    var H_ = Ye();
    Du.exports = H_({}.isPrototypeOf);
  });
  var ku = c((CW, Fu) => {
    var B_ = Or();
    Fu.exports = B_("navigator", "userAgent") || "";
  });
  var Bu = c((PW, Hu) => {
    var Vu = ye(),
      Qi = ku(),
      Gu = Vu.process,
      Xu = Vu.Deno,
      Uu = (Gu && Gu.versions) || (Xu && Xu.version),
      Wu = Uu && Uu.v8,
      Qe,
      yn;
    Wu &&
      ((Qe = Wu.split(".")),
        (yn = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1])));
    !yn &&
      Qi &&
      ((Qe = Qi.match(/Edge\/(\d+)/)),
        (!Qe || Qe[1] >= 74) &&
        ((Qe = Qi.match(/Chrome\/(\d+)/)), Qe && (yn = +Qe[1])));
    Hu.exports = yn;
  });
  var $i = c((LW, zu) => {
    var ju = Bu(),
      j_ = Ht();
    zu.exports =
      !!Object.getOwnPropertySymbols &&
      !j_(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && ju && ju < 41)
        );
      });
  });
  var Zi = c((NW, Ku) => {
    var z_ = $i();
    Ku.exports = z_ && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Ji = c((qW, Yu) => {
    var K_ = ye(),
      Y_ = Or(),
      Q_ = at(),
      $_ = Mu(),
      Z_ = Zi(),
      J_ = K_.Object;
    Yu.exports = Z_
      ? function (e) {
        return typeof e == "symbol";
      }
      : function (e) {
        var t = Y_("Symbol");
        return Q_(t) && $_(t.prototype, J_(e));
      };
  });
  var $u = c((DW, Qu) => {
    var eI = ye(),
      tI = eI.String;
    Qu.exports = function (e) {
      try {
        return tI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Ju = c((MW, Zu) => {
    var rI = ye(),
      nI = at(),
      iI = $u(),
      oI = rI.TypeError;
    Zu.exports = function (e) {
      if (nI(e)) return e;
      throw oI(iI(e) + " is not a function");
    };
  });
  var tc = c((FW, ec) => {
    var aI = Ju();
    ec.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : aI(r);
    };
  });
  var nc = c((kW, rc) => {
    var sI = ye(),
      eo = mn(),
      to = at(),
      ro = Bt(),
      uI = sI.TypeError;
    rc.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && to((r = e.toString)) && !ro((n = eo(r, e)))) ||
        (to((r = e.valueOf)) && !ro((n = eo(r, e)))) ||
        (t !== "string" && to((r = e.toString)) && !ro((n = eo(r, e))))
      )
        return n;
      throw uI("Can't convert object to primitive value");
    };
  });
  var oc = c((GW, ic) => {
    ic.exports = !1;
  });
  var En = c((XW, sc) => {
    var ac = ye(),
      cI = Object.defineProperty;
    sc.exports = function (e, t) {
      try {
        cI(ac, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        ac[e] = t;
      }
      return t;
    };
  });
  var bn = c((UW, cc) => {
    var lI = ye(),
      fI = En(),
      uc = "__core-js_shared__",
      dI = lI[uc] || fI(uc, {});
    cc.exports = dI;
  });
  var no = c((WW, fc) => {
    var pI = oc(),
      lc = bn();
    (fc.exports = function (e, t) {
      return lc[e] || (lc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: pI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var pc = c((VW, dc) => {
    var gI = ye(),
      vI = Ki(),
      hI = gI.Object;
    dc.exports = function (e) {
      return hI(vI(e));
    };
  });
  var _t = c((HW, gc) => {
    var mI = Ye(),
      yI = pc(),
      EI = mI({}.hasOwnProperty);
    gc.exports =
      Object.hasOwn ||
      function (t, r) {
        return EI(yI(t), r);
      };
  });
  var io = c((BW, vc) => {
    var bI = Ye(),
      _I = 0,
      II = Math.random(),
      TI = bI((1).toString);
    vc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + TI(++_I + II, 36);
    };
  });
  var oo = c((jW, bc) => {
    var wI = ye(),
      xI = no(),
      hc = _t(),
      OI = io(),
      mc = $i(),
      Ec = Zi(),
      jt = xI("wks"),
      Lt = wI.Symbol,
      yc = Lt && Lt.for,
      AI = Ec ? Lt : (Lt && Lt.withoutSetter) || OI;
    bc.exports = function (e) {
      if (!hc(jt, e) || !(mc || typeof jt[e] == "string")) {
        var t = "Symbol." + e;
        mc && hc(Lt, e)
          ? (jt[e] = Lt[e])
          : Ec && yc
            ? (jt[e] = yc(t))
            : (jt[e] = AI(t));
      }
      return jt[e];
    };
  });
  var wc = c((zW, Tc) => {
    var SI = ye(),
      RI = mn(),
      _c = Bt(),
      Ic = Ji(),
      CI = tc(),
      PI = nc(),
      LI = oo(),
      NI = SI.TypeError,
      qI = LI("toPrimitive");
    Tc.exports = function (e, t) {
      if (!_c(e) || Ic(e)) return e;
      var r = CI(e, qI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = RI(r, e, t)), !_c(n) || Ic(n))
        )
          return n;
        throw NI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), PI(e, t);
    };
  });
  var ao = c((KW, xc) => {
    var DI = wc(),
      MI = Ji();
    xc.exports = function (e) {
      var t = DI(e, "string");
      return MI(t) ? t : t + "";
    };
  });
  var uo = c((YW, Ac) => {
    var FI = ye(),
      Oc = Bt(),
      so = FI.document,
      kI = Oc(so) && Oc(so.createElement);
    Ac.exports = function (e) {
      return kI ? so.createElement(e) : {};
    };
  });
  var co = c((QW, Sc) => {
    var GI = Pt(),
      XI = Ht(),
      UI = uo();
    Sc.exports =
      !GI &&
      !XI(function () {
        return (
          Object.defineProperty(UI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var lo = c((Cc) => {
    var WI = Pt(),
      VI = mn(),
      HI = _u(),
      BI = Hi(),
      jI = xr(),
      zI = ao(),
      KI = _t(),
      YI = co(),
      Rc = Object.getOwnPropertyDescriptor;
    Cc.f = WI
      ? Rc
      : function (t, r) {
        if (((t = jI(t)), (r = zI(r)), YI))
          try {
            return Rc(t, r);
          } catch { }
        if (KI(t, r)) return BI(!VI(HI.f, t, r), t[r]);
      };
  });
  var Ar = c((ZW, Lc) => {
    var Pc = ye(),
      QI = Bt(),
      $I = Pc.String,
      ZI = Pc.TypeError;
    Lc.exports = function (e) {
      if (QI(e)) return e;
      throw ZI($I(e) + " is not an object");
    };
  });
  var Sr = c((Dc) => {
    var JI = ye(),
      eT = Pt(),
      tT = co(),
      Nc = Ar(),
      rT = ao(),
      nT = JI.TypeError,
      qc = Object.defineProperty;
    Dc.f = eT
      ? qc
      : function (t, r, n) {
        if ((Nc(t), (r = rT(r)), Nc(n), tT))
          try {
            return qc(t, r, n);
          } catch { }
        if ("get" in n || "set" in n) throw nT("Accessors not supported");
        return "value" in n && (t[r] = n.value), t;
      };
  });
  var _n = c((eV, Mc) => {
    var iT = Pt(),
      oT = Sr(),
      aT = Hi();
    Mc.exports = iT
      ? function (e, t, r) {
        return oT.f(e, t, aT(1, r));
      }
      : function (e, t, r) {
        return (e[t] = r), e;
      };
  });
  var po = c((tV, Fc) => {
    var sT = Ye(),
      uT = at(),
      fo = bn(),
      cT = sT(Function.toString);
    uT(fo.inspectSource) ||
      (fo.inspectSource = function (e) {
        return cT(e);
      });
    Fc.exports = fo.inspectSource;
  });
  var Xc = c((rV, Gc) => {
    var lT = ye(),
      fT = at(),
      dT = po(),
      kc = lT.WeakMap;
    Gc.exports = fT(kc) && /native code/.test(dT(kc));
  });
  var go = c((nV, Wc) => {
    var pT = no(),
      gT = io(),
      Uc = pT("keys");
    Wc.exports = function (e) {
      return Uc[e] || (Uc[e] = gT(e));
    };
  });
  var In = c((iV, Vc) => {
    Vc.exports = {};
  });
  var Yc = c((oV, Kc) => {
    var vT = Xc(),
      zc = ye(),
      vo = Ye(),
      hT = Bt(),
      mT = _n(),
      ho = _t(),
      mo = bn(),
      yT = go(),
      ET = In(),
      Hc = "Object already initialized",
      Eo = zc.TypeError,
      bT = zc.WeakMap,
      Tn,
      Rr,
      wn,
      _T = function (e) {
        return wn(e) ? Rr(e) : Tn(e, {});
      },
      IT = function (e) {
        return function (t) {
          var r;
          if (!hT(t) || (r = Rr(t)).type !== e)
            throw Eo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    vT || mo.state
      ? ((It = mo.state || (mo.state = new bT())),
        (Bc = vo(It.get)),
        (yo = vo(It.has)),
        (jc = vo(It.set)),
        (Tn = function (e, t) {
          if (yo(It, e)) throw new Eo(Hc);
          return (t.facade = e), jc(It, e, t), t;
        }),
        (Rr = function (e) {
          return Bc(It, e) || {};
        }),
        (wn = function (e) {
          return yo(It, e);
        }))
      : ((Nt = yT("state")),
        (ET[Nt] = !0),
        (Tn = function (e, t) {
          if (ho(e, Nt)) throw new Eo(Hc);
          return (t.facade = e), mT(e, Nt, t), t;
        }),
        (Rr = function (e) {
          return ho(e, Nt) ? e[Nt] : {};
        }),
        (wn = function (e) {
          return ho(e, Nt);
        }));
    var It, Bc, yo, jc, Nt;
    Kc.exports = { set: Tn, get: Rr, has: wn, enforce: _T, getterFor: IT };
  });
  var Zc = c((aV, $c) => {
    var bo = Pt(),
      TT = _t(),
      Qc = Function.prototype,
      wT = bo && Object.getOwnPropertyDescriptor,
      _o = TT(Qc, "name"),
      xT = _o && function () { }.name === "something",
      OT = _o && (!bo || (bo && wT(Qc, "name").configurable));
    $c.exports = { EXISTS: _o, PROPER: xT, CONFIGURABLE: OT };
  });
  var nl = c((sV, rl) => {
    var AT = ye(),
      Jc = at(),
      ST = _t(),
      el = _n(),
      RT = En(),
      CT = po(),
      tl = Yc(),
      PT = Zc().CONFIGURABLE,
      LT = tl.get,
      NT = tl.enforce,
      qT = String(String).split("String");
    (rl.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        u = n && n.name !== void 0 ? n.name : t,
        s;
      if (
        (Jc(r) &&
          (String(u).slice(0, 7) === "Symbol(" &&
            (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!ST(r, "name") || (PT && r.name !== u)) && el(r, "name", u),
            (s = NT(r)),
            s.source || (s.source = qT.join(typeof u == "string" ? u : ""))),
          e === AT)
      ) {
        o ? (e[t] = r) : RT(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : el(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Jc(this) && LT(this).source) || CT(this);
    });
  });
  var Io = c((uV, il) => {
    var DT = Math.ceil,
      MT = Math.floor;
    il.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? MT : DT)(t);
    };
  });
  var al = c((cV, ol) => {
    var FT = Io(),
      kT = Math.max,
      GT = Math.min;
    ol.exports = function (e, t) {
      var r = FT(e);
      return r < 0 ? kT(r + t, 0) : GT(r, t);
    };
  });
  var ul = c((lV, sl) => {
    var XT = Io(),
      UT = Math.min;
    sl.exports = function (e) {
      return e > 0 ? UT(XT(e), 9007199254740991) : 0;
    };
  });
  var ll = c((fV, cl) => {
    var WT = ul();
    cl.exports = function (e) {
      return WT(e.length);
    };
  });
  var To = c((dV, dl) => {
    var VT = xr(),
      HT = al(),
      BT = ll(),
      fl = function (e) {
        return function (t, r, n) {
          var i = VT(t),
            o = BT(i),
            a = HT(n, o),
            u;
          if (e && r != r) {
            for (; o > a;) if (((u = i[a++]), u != u)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    dl.exports = { includes: fl(!0), indexOf: fl(!1) };
  });
  var xo = c((pV, gl) => {
    var jT = Ye(),
      wo = _t(),
      zT = xr(),
      KT = To().indexOf,
      YT = In(),
      pl = jT([].push);
    gl.exports = function (e, t) {
      var r = zT(e),
        n = 0,
        i = [],
        o;
      for (o in r) !wo(YT, o) && wo(r, o) && pl(i, o);
      for (; t.length > n;) wo(r, (o = t[n++])) && (~KT(i, o) || pl(i, o));
      return i;
    };
  });
  var xn = c((gV, vl) => {
    vl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var ml = c((hl) => {
    var QT = xo(),
      $T = xn(),
      ZT = $T.concat("length", "prototype");
    hl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return QT(t, ZT);
      };
  });
  var El = c((yl) => {
    yl.f = Object.getOwnPropertySymbols;
  });
  var _l = c((mV, bl) => {
    var JT = Or(),
      ew = Ye(),
      tw = ml(),
      rw = El(),
      nw = Ar(),
      iw = ew([].concat);
    bl.exports =
      JT("Reflect", "ownKeys") ||
      function (t) {
        var r = tw.f(nw(t)),
          n = rw.f;
        return n ? iw(r, n(t)) : r;
      };
  });
  var Tl = c((yV, Il) => {
    var ow = _t(),
      aw = _l(),
      sw = lo(),
      uw = Sr();
    Il.exports = function (e, t) {
      for (var r = aw(t), n = uw.f, i = sw.f, o = 0; o < r.length; o++) {
        var a = r[o];
        ow(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var xl = c((EV, wl) => {
    var cw = Ht(),
      lw = at(),
      fw = /#|\.prototype\./,
      Cr = function (e, t) {
        var r = pw[dw(e)];
        return r == vw ? !0 : r == gw ? !1 : lw(t) ? cw(t) : !!t;
      },
      dw = (Cr.normalize = function (e) {
        return String(e).replace(fw, ".").toLowerCase();
      }),
      pw = (Cr.data = {}),
      gw = (Cr.NATIVE = "N"),
      vw = (Cr.POLYFILL = "P");
    wl.exports = Cr;
  });
  var Al = c((bV, Ol) => {
    var Oo = ye(),
      hw = lo().f,
      mw = _n(),
      yw = nl(),
      Ew = En(),
      bw = Tl(),
      _w = xl();
    Ol.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        u,
        s,
        f,
        _;
      if (
        (n
          ? (a = Oo)
          : i
            ? (a = Oo[r] || Ew(r, {}))
            : (a = (Oo[r] || {}).prototype),
          a)
      )
        for (u in t) {
          if (
            ((f = t[u]),
              e.noTargetGet ? ((_ = hw(a, u)), (s = _ && _.value)) : (s = a[u]),
              (o = _w(n ? u : r + (i ? "." : "#") + u, e.forced)),
              !o && s !== void 0)
          ) {
            if (typeof f == typeof s) continue;
            bw(f, s);
          }
          (e.sham || (s && s.sham)) && mw(f, "sham", !0), yw(a, u, f, e);
        }
    };
  });
  var Rl = c((_V, Sl) => {
    var Iw = xo(),
      Tw = xn();
    Sl.exports =
      Object.keys ||
      function (t) {
        return Iw(t, Tw);
      };
  });
  var Pl = c((IV, Cl) => {
    var ww = Pt(),
      xw = Sr(),
      Ow = Ar(),
      Aw = xr(),
      Sw = Rl();
    Cl.exports = ww
      ? Object.defineProperties
      : function (t, r) {
        Ow(t);
        for (var n = Aw(r), i = Sw(r), o = i.length, a = 0, u; o > a;)
          xw.f(t, (u = i[a++]), n[u]);
        return t;
      };
  });
  var Nl = c((TV, Ll) => {
    var Rw = Or();
    Ll.exports = Rw("document", "documentElement");
  });
  var Ul = c((wV, Xl) => {
    var Cw = Ar(),
      Pw = Pl(),
      ql = xn(),
      Lw = In(),
      Nw = Nl(),
      qw = uo(),
      Dw = go(),
      Dl = ">",
      Ml = "<",
      So = "prototype",
      Ro = "script",
      kl = Dw("IE_PROTO"),
      Ao = function () { },
      Gl = function (e) {
        return Ml + Ro + Dl + e + Ml + "/" + Ro + Dl;
      },
      Fl = function (e) {
        e.write(Gl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      Mw = function () {
        var e = qw("iframe"),
          t = "java" + Ro + ":",
          r;
        return (
          (e.style.display = "none"),
          Nw.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Gl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      On,
      An = function () {
        try {
          On = new ActiveXObject("htmlfile");
        } catch { }
        An =
          typeof document < "u"
            ? document.domain && On
              ? Fl(On)
              : Mw()
            : Fl(On);
        for (var e = ql.length; e--;) delete An[So][ql[e]];
        return An();
      };
    Lw[kl] = !0;
    Xl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Ao[So] = Cw(t)), (n = new Ao()), (Ao[So] = null), (n[kl] = t))
            : (n = An()),
          r === void 0 ? n : Pw(n, r)
        );
      };
  });
  var Vl = c((xV, Wl) => {
    var Fw = oo(),
      kw = Ul(),
      Gw = Sr(),
      Co = Fw("unscopables"),
      Po = Array.prototype;
    Po[Co] == null && Gw.f(Po, Co, { configurable: !0, value: kw(null) });
    Wl.exports = function (e) {
      Po[Co][e] = !0;
    };
  });
  var Hl = c(() => {
    "use strict";
    var Xw = Al(),
      Uw = To().includes,
      Ww = Vl();
    Xw(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return Uw(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    Ww("includes");
  });
  var jl = c((SV, Bl) => {
    var Vw = ye(),
      Hw = Ye();
    Bl.exports = function (e, t) {
      return Hw(Vw[e].prototype[t]);
    };
  });
  var Kl = c((RV, zl) => {
    Hl();
    var Bw = jl();
    zl.exports = Bw("Array", "includes");
  });
  var Ql = c((CV, Yl) => {
    var jw = Kl();
    Yl.exports = jw;
  });
  var Zl = c((PV, $l) => {
    var zw = Ql();
    $l.exports = zw;
  });
  var Lo = c((LV, Jl) => {
    var Kw =
      typeof global == "object" && global && global.Object === Object && global;
    Jl.exports = Kw;
  });
  var $e = c((NV, ef) => {
    var Yw = Lo(),
      Qw = typeof self == "object" && self && self.Object === Object && self,
      $w = Yw || Qw || Function("return this")();
    ef.exports = $w;
  });
  var zt = c((qV, tf) => {
    var Zw = $e(),
      Jw = Zw.Symbol;
    tf.exports = Jw;
  });
  var af = c((DV, of) => {
    var rf = zt(),
      nf = Object.prototype,
      ex = nf.hasOwnProperty,
      tx = nf.toString,
      Pr = rf ? rf.toStringTag : void 0;
    function rx(e) {
      var t = ex.call(e, Pr),
        r = e[Pr];
      try {
        e[Pr] = void 0;
        var n = !0;
      } catch { }
      var i = tx.call(e);
      return n && (t ? (e[Pr] = r) : delete e[Pr]), i;
    }
    of.exports = rx;
  });
  var uf = c((MV, sf) => {
    var nx = Object.prototype,
      ix = nx.toString;
    function ox(e) {
      return ix.call(e);
    }
    sf.exports = ox;
  });
  var Tt = c((FV, ff) => {
    var cf = zt(),
      ax = af(),
      sx = uf(),
      ux = "[object Null]",
      cx = "[object Undefined]",
      lf = cf ? cf.toStringTag : void 0;
    function lx(e) {
      return e == null
        ? e === void 0
          ? cx
          : ux
        : lf && lf in Object(e)
          ? ax(e)
          : sx(e);
    }
    ff.exports = lx;
  });
  var No = c((kV, df) => {
    function fx(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    df.exports = fx;
  });
  var qo = c((GV, pf) => {
    var dx = No(),
      px = dx(Object.getPrototypeOf, Object);
    pf.exports = px;
  });
  var gt = c((XV, gf) => {
    function gx(e) {
      return e != null && typeof e == "object";
    }
    gf.exports = gx;
  });
  var Do = c((UV, hf) => {
    var vx = Tt(),
      hx = qo(),
      mx = gt(),
      yx = "[object Object]",
      Ex = Function.prototype,
      bx = Object.prototype,
      vf = Ex.toString,
      _x = bx.hasOwnProperty,
      Ix = vf.call(Object);
    function Tx(e) {
      if (!mx(e) || vx(e) != yx) return !1;
      var t = hx(e);
      if (t === null) return !0;
      var r = _x.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && vf.call(r) == Ix;
    }
    hf.exports = Tx;
  });
  var mf = c((Mo) => {
    "use strict";
    Object.defineProperty(Mo, "__esModule", { value: !0 });
    Mo.default = wx;
    function wx(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var yf = c((ko, Fo) => {
    "use strict";
    Object.defineProperty(ko, "__esModule", { value: !0 });
    var xx = mf(),
      Ox = Ax(xx);
    function Ax(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Kt;
    typeof self < "u"
      ? (Kt = self)
      : typeof window < "u"
        ? (Kt = window)
        : typeof global < "u"
          ? (Kt = global)
          : typeof Fo < "u"
            ? (Kt = Fo)
            : (Kt = Function("return this")());
    var Sx = (0, Ox.default)(Kt);
    ko.default = Sx;
  });
  var Go = c((Lr) => {
    "use strict";
    Lr.__esModule = !0;
    Lr.ActionTypes = void 0;
    Lr.default = If;
    var Rx = Do(),
      Cx = _f(Rx),
      Px = yf(),
      Ef = _f(Px);
    function _f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var bf = (Lr.ActionTypes = { INIT: "@@redux/INIT" });
    function If(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
          typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(If)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        u = a,
        s = !1;
      function f() {
        u === a && (u = a.slice());
      }
      function _() {
        return o;
      }
      function p(I) {
        if (typeof I != "function")
          throw new Error("Expected listener to be a function.");
        var x = !0;
        return (
          f(),
          u.push(I),
          function () {
            if (x) {
              (x = !1), f();
              var P = u.indexOf(I);
              u.splice(P, 1);
            }
          }
        );
      }
      function b(I) {
        if (!(0, Cx.default)(I))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof I.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (o = i(o, I));
        } finally {
          s = !1;
        }
        for (var x = (a = u), T = 0; T < x.length; T++) x[T]();
        return I;
      }
      function m(I) {
        if (typeof I != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = I), b({ type: bf.INIT });
      }
      function E() {
        var I,
          x = p;
        return (
          (I = {
            subscribe: function (P) {
              if (typeof P != "object")
                throw new TypeError("Expected the observer to be an object.");
              function C() {
                P.next && P.next(_());
              }
              C();
              var N = x(C);
              return { unsubscribe: N };
            },
          }),
          (I[Ef.default] = function () {
            return this;
          }),
          I
        );
      }
      return (
        b({ type: bf.INIT }),
        (n = { dispatch: b, subscribe: p, getState: _, replaceReducer: m }),
        (n[Ef.default] = E),
        n
      );
    }
  });
  var Uo = c((Xo) => {
    "use strict";
    Xo.__esModule = !0;
    Xo.default = Lx;
    function Lx(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch { }
    }
  });
  var xf = c((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    Wo.default = Fx;
    var Tf = Go(),
      Nx = Do(),
      BV = wf(Nx),
      qx = Uo(),
      jV = wf(qx);
    function wf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Dx(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Mx(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: Tf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
            t +
            '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
            t +
            '" returned undefined when probed with a random type. ' +
            ("Don't try to handle " +
              Tf.ActionTypes.INIT +
              ' or other actions in "redux/*" ') +
            "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Fx(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        Mx(r);
      } catch (s) {
        u = s;
      }
      return function () {
        var f =
          arguments.length <= 0 || arguments[0] === void 0
            ? {}
            : arguments[0],
          _ = arguments[1];
        if (u) throw u;
        if (!1) var p;
        for (var b = !1, m = {}, E = 0; E < o.length; E++) {
          var I = o[E],
            x = r[I],
            T = f[I],
            P = x(T, _);
          if (typeof P > "u") {
            var C = Dx(I, _);
            throw new Error(C);
          }
          (m[I] = P), (b = b || P !== T);
        }
        return b ? m : f;
      };
    }
  });
  var Af = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = kx;
    function Of(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function kx(e, t) {
      if (typeof e == "function") return Of(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
          (e === null ? "null" : typeof e) +
          '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = Of(a, t));
      }
      return n;
    }
  });
  var Bo = c((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    Ho.default = Gx;
    function Gx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Sf = c((jo) => {
    "use strict";
    jo.__esModule = !0;
    var Xx =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    jo.default = Hx;
    var Ux = Bo(),
      Wx = Vx(Ux);
    function Vx(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Hx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var u = n(i, o, a),
            s = u.dispatch,
            f = [],
            _ = {
              getState: u.getState,
              dispatch: function (b) {
                return s(b);
              },
            };
          return (
            (f = t.map(function (p) {
              return p(_);
            })),
            (s = Wx.default.apply(void 0, f)(u.dispatch)),
            Xx({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var zo = c((He) => {
    "use strict";
    He.__esModule = !0;
    He.compose =
      He.applyMiddleware =
      He.bindActionCreators =
      He.combineReducers =
      He.createStore =
      void 0;
    var Bx = Go(),
      jx = Yt(Bx),
      zx = xf(),
      Kx = Yt(zx),
      Yx = Af(),
      Qx = Yt(Yx),
      $x = Sf(),
      Zx = Yt($x),
      Jx = Bo(),
      e0 = Yt(Jx),
      t0 = Uo(),
      $V = Yt(t0);
    function Yt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    He.createStore = jx.default;
    He.combineReducers = Kx.default;
    He.bindActionCreators = Qx.default;
    He.applyMiddleware = Zx.default;
    He.compose = e0.default;
  });
  var Ze,
    Ko,
    st,
    r0,
    n0,
    Sn,
    i0,
    Yo = me(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Ko = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (st = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (r0 = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (n0 = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Sn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (i0 = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Xe,
    o0,
    Rn = me(() => {
      "use strict";
      (Xe = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (o0 = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var a0,
    Rf = me(() => {
      "use strict";
      a0 = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var s0,
    u0,
    c0,
    l0,
    f0,
    d0,
    p0,
    Qo,
    Cf = me(() => {
      "use strict";
      Rn();
      ({
        TRANSFORM_MOVE: s0,
        TRANSFORM_SCALE: u0,
        TRANSFORM_ROTATE: c0,
        TRANSFORM_SKEW: l0,
        STYLE_SIZE: f0,
        STYLE_FILTER: d0,
        STYLE_FONT_VARIATION: p0,
      } = Xe),
        (Qo = {
          [s0]: !0,
          [u0]: !0,
          [c0]: !0,
          [l0]: !0,
          [f0]: !0,
          [d0]: !0,
          [p0]: !0,
        });
    });
  var we = {};
  Ge(we, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => C0,
    IX2_ANIMATION_FRAME_CHANGED: () => w0,
    IX2_CLEAR_REQUESTED: () => _0,
    IX2_ELEMENT_STATE_CHANGED: () => R0,
    IX2_EVENT_LISTENER_ADDED: () => I0,
    IX2_EVENT_STATE_CHANGED: () => T0,
    IX2_INSTANCE_ADDED: () => O0,
    IX2_INSTANCE_REMOVED: () => S0,
    IX2_INSTANCE_STARTED: () => A0,
    IX2_MEDIA_QUERIES_DEFINED: () => L0,
    IX2_PARAMETER_CHANGED: () => x0,
    IX2_PLAYBACK_REQUESTED: () => E0,
    IX2_PREVIEW_REQUESTED: () => y0,
    IX2_RAW_DATA_IMPORTED: () => g0,
    IX2_SESSION_INITIALIZED: () => v0,
    IX2_SESSION_STARTED: () => h0,
    IX2_SESSION_STOPPED: () => m0,
    IX2_STOP_REQUESTED: () => b0,
    IX2_TEST_FRAME_RENDERED: () => N0,
    IX2_VIEWPORT_WIDTH_CHANGED: () => P0,
  });
  var g0,
    v0,
    h0,
    m0,
    y0,
    E0,
    b0,
    _0,
    I0,
    T0,
    w0,
    x0,
    O0,
    A0,
    S0,
    R0,
    C0,
    P0,
    L0,
    N0,
    Pf = me(() => {
      "use strict";
      (g0 = "IX2_RAW_DATA_IMPORTED"),
        (v0 = "IX2_SESSION_INITIALIZED"),
        (h0 = "IX2_SESSION_STARTED"),
        (m0 = "IX2_SESSION_STOPPED"),
        (y0 = "IX2_PREVIEW_REQUESTED"),
        (E0 = "IX2_PLAYBACK_REQUESTED"),
        (b0 = "IX2_STOP_REQUESTED"),
        (_0 = "IX2_CLEAR_REQUESTED"),
        (I0 = "IX2_EVENT_LISTENER_ADDED"),
        (T0 = "IX2_EVENT_STATE_CHANGED"),
        (w0 = "IX2_ANIMATION_FRAME_CHANGED"),
        (x0 = "IX2_PARAMETER_CHANGED"),
        (O0 = "IX2_INSTANCE_ADDED"),
        (A0 = "IX2_INSTANCE_STARTED"),
        (S0 = "IX2_INSTANCE_REMOVED"),
        (R0 = "IX2_ELEMENT_STATE_CHANGED"),
        (C0 = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (P0 = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (L0 = "IX2_MEDIA_QUERIES_DEFINED"),
        (N0 = "IX2_TEST_FRAME_RENDERED");
    });
  var Pe = {};
  Ge(Pe, {
    ABSTRACT_NODE: () => PO,
    AUTO: () => bO,
    BACKGROUND: () => gO,
    BACKGROUND_COLOR: () => pO,
    BAR_DELIMITER: () => TO,
    BORDER_COLOR: () => vO,
    BOUNDARY_SELECTOR: () => k0,
    CHILDREN: () => wO,
    COLON_DELIMITER: () => IO,
    COLOR: () => hO,
    COMMA_DELIMITER: () => _O,
    CONFIG_UNIT: () => j0,
    CONFIG_VALUE: () => W0,
    CONFIG_X_UNIT: () => V0,
    CONFIG_X_VALUE: () => G0,
    CONFIG_Y_UNIT: () => H0,
    CONFIG_Y_VALUE: () => X0,
    CONFIG_Z_UNIT: () => B0,
    CONFIG_Z_VALUE: () => U0,
    DISPLAY: () => mO,
    FILTER: () => cO,
    FLEX: () => yO,
    FONT_VARIATION_SETTINGS: () => lO,
    HEIGHT: () => dO,
    HTML_ELEMENT: () => RO,
    IMMEDIATE_CHILDREN: () => xO,
    IX2_ID_DELIMITER: () => q0,
    OPACITY: () => uO,
    PARENT: () => AO,
    PLAIN_OBJECT: () => CO,
    PRESERVE_3D: () => SO,
    RENDER_GENERAL: () => NO,
    RENDER_PLUGIN: () => DO,
    RENDER_STYLE: () => qO,
    RENDER_TRANSFORM: () => LO,
    ROTATE_X: () => rO,
    ROTATE_Y: () => nO,
    ROTATE_Z: () => iO,
    SCALE_3D: () => tO,
    SCALE_X: () => Z0,
    SCALE_Y: () => J0,
    SCALE_Z: () => eO,
    SIBLINGS: () => OO,
    SKEW: () => oO,
    SKEW_X: () => aO,
    SKEW_Y: () => sO,
    TRANSFORM: () => z0,
    TRANSLATE_3D: () => $0,
    TRANSLATE_X: () => K0,
    TRANSLATE_Y: () => Y0,
    TRANSLATE_Z: () => Q0,
    WF_PAGE: () => D0,
    WIDTH: () => fO,
    WILL_CHANGE: () => EO,
    W_MOD_IX: () => F0,
    W_MOD_JS: () => M0,
  });
  var q0,
    D0,
    M0,
    F0,
    k0,
    G0,
    X0,
    U0,
    W0,
    V0,
    H0,
    B0,
    j0,
    z0,
    K0,
    Y0,
    Q0,
    $0,
    Z0,
    J0,
    eO,
    tO,
    rO,
    nO,
    iO,
    oO,
    aO,
    sO,
    uO,
    cO,
    lO,
    fO,
    dO,
    pO,
    gO,
    vO,
    hO,
    mO,
    yO,
    EO,
    bO,
    _O,
    IO,
    TO,
    wO,
    xO,
    OO,
    AO,
    SO,
    RO,
    CO,
    PO,
    LO,
    NO,
    qO,
    DO,
    Lf = me(() => {
      "use strict";
      (q0 = "|"),
        (D0 = "data-wf-page"),
        (M0 = "w-mod-js"),
        (F0 = "w-mod-ix"),
        (k0 = ".w-dyn-item"),
        (G0 = "xValue"),
        (X0 = "yValue"),
        (U0 = "zValue"),
        (W0 = "value"),
        (V0 = "xUnit"),
        (H0 = "yUnit"),
        (B0 = "zUnit"),
        (j0 = "unit"),
        (z0 = "transform"),
        (K0 = "translateX"),
        (Y0 = "translateY"),
        (Q0 = "translateZ"),
        ($0 = "translate3d"),
        (Z0 = "scaleX"),
        (J0 = "scaleY"),
        (eO = "scaleZ"),
        (tO = "scale3d"),
        (rO = "rotateX"),
        (nO = "rotateY"),
        (iO = "rotateZ"),
        (oO = "skew"),
        (aO = "skewX"),
        (sO = "skewY"),
        (uO = "opacity"),
        (cO = "filter"),
        (lO = "font-variation-settings"),
        (fO = "width"),
        (dO = "height"),
        (pO = "backgroundColor"),
        (gO = "background"),
        (vO = "borderColor"),
        (hO = "color"),
        (mO = "display"),
        (yO = "flex"),
        (EO = "willChange"),
        (bO = "AUTO"),
        (_O = ","),
        (IO = ":"),
        (TO = "|"),
        (wO = "CHILDREN"),
        (xO = "IMMEDIATE_CHILDREN"),
        (OO = "SIBLINGS"),
        (AO = "PARENT"),
        (SO = "preserve-3d"),
        (RO = "HTML_ELEMENT"),
        (CO = "PLAIN_OBJECT"),
        (PO = "ABSTRACT_NODE"),
        (LO = "RENDER_TRANSFORM"),
        (NO = "RENDER_GENERAL"),
        (qO = "RENDER_STYLE"),
        (DO = "RENDER_PLUGIN");
    });
  var Nf = {};
  Ge(Nf, {
    ActionAppliesTo: () => o0,
    ActionTypeConsts: () => Xe,
    EventAppliesTo: () => Ko,
    EventBasedOn: () => st,
    EventContinuousMouseAxes: () => r0,
    EventLimitAffectedElements: () => n0,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => we,
    IX2EngineConstants: () => Pe,
    InteractionTypeConsts: () => a0,
    QuickEffectDirectionConsts: () => i0,
    QuickEffectIds: () => Sn,
    ReducedMotionTypes: () => Qo,
  });
  var Ue = me(() => {
    "use strict";
    Yo();
    Rn();
    Rf();
    Cf();
    Pf();
    Lf();
    Rn();
    Yo();
  });
  var MO,
    qf,
    Df = me(() => {
      "use strict";
      Ue();
      ({ IX2_RAW_DATA_IMPORTED: MO } = we),
        (qf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case MO:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Qt = c((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    var FO =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
          return typeof e;
        }
        : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        };
    be.clone = Pn;
    be.addLast = kf;
    be.addFirst = Gf;
    be.removeLast = Xf;
    be.removeFirst = Uf;
    be.insert = Wf;
    be.removeAt = Vf;
    be.replaceAt = Hf;
    be.getIn = Ln;
    be.set = Nn;
    be.setIn = qn;
    be.update = jf;
    be.updateIn = zf;
    be.merge = Kf;
    be.mergeDeep = Yf;
    be.mergeIn = Qf;
    be.omit = $f;
    be.addDefaults = Zf;
    var Mf = "INVALID_ARGS";
    function Ff(e) {
      throw new Error(e);
    }
    function $o(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var kO = {}.hasOwnProperty;
    function Pn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = $o(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function We(e, t, r) {
      var n = r;
      n == null && Ff(Mf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3;
        u < o;
        u++
      )
        a[u - 3] = arguments[u];
      for (var s = 0; s < a.length; s++) {
        var f = a[s];
        if (f != null) {
          var _ = $o(f);
          if (_.length)
            for (var p = 0; p <= _.length; p++) {
              var b = _[p];
              if (!(e && n[b] !== void 0)) {
                var m = f[b];
                t && Cn(n[b]) && Cn(m) && (m = We(e, t, n[b], m)),
                  !(m === void 0 || m === n[b]) &&
                  (i || ((i = !0), (n = Pn(n))), (n[b] = m));
              }
            }
        }
      }
      return n;
    }
    function Cn(e) {
      var t = typeof e > "u" ? "undefined" : FO(e);
      return e != null && (t === "object" || t === "function");
    }
    function kf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Gf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Xf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Uf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Wf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Vf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Hf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Ln(e, t) {
      if ((!Array.isArray(t) && Ff(Mf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Nn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Pn(i);
      return (o[t] = r), o;
    }
    function Bf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Cn(e) && Cn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Bf(a, t, r, n + 1);
      }
      return Nn(e, o, i);
    }
    function qn(e, t, r) {
      return t.length ? Bf(e, t, r, 0) : r;
    }
    function jf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Nn(e, t, i);
    }
    function zf(e, t, r) {
      var n = Ln(e, t),
        i = r(n);
      return qn(e, t, i);
    }
    function Kf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? We.call.apply(We, [null, !1, !1, e, t, r, n, i, o].concat(u))
        : We(!1, !1, e, t, r, n, i, o);
    }
    function Yf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? We.call.apply(We, [null, !1, !0, e, t, r, n, i, o].concat(u))
        : We(!1, !0, e, t, r, n, i, o);
    }
    function Qf(e, t, r, n, i, o, a) {
      var u = Ln(e, t);
      u == null && (u = {});
      for (
        var s = void 0,
        f = arguments.length,
        _ = Array(f > 7 ? f - 7 : 0),
        p = 7;
        p < f;
        p++
      )
        _[p - 7] = arguments[p];
      return (
        _.length
          ? (s = We.call.apply(We, [null, !1, !1, u, r, n, i, o, a].concat(_)))
          : (s = We(!1, !1, u, r, n, i, o, a)),
        qn(e, t, s)
      );
    }
    function $f(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (kO.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = $o(e), u = 0; u < a.length; u++) {
        var s = a[u];
        r.indexOf(s) >= 0 || (o[s] = e[s]);
      }
      return o;
    }
    function Zf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? We.call.apply(We, [null, !0, !1, e, t, r, n, i, o].concat(u))
        : We(!0, !1, e, t, r, n, i, o);
    }
    var GO = {
      clone: Pn,
      addLast: kf,
      addFirst: Gf,
      removeLast: Xf,
      removeFirst: Uf,
      insert: Wf,
      removeAt: Vf,
      replaceAt: Hf,
      getIn: Ln,
      set: Nn,
      setIn: qn,
      update: jf,
      updateIn: zf,
      merge: Kf,
      mergeDeep: Yf,
      mergeIn: Qf,
      omit: $f,
      addDefaults: Zf,
    };
    be.default = GO;
  });
  var ed,
    XO,
    UO,
    WO,
    VO,
    HO,
    Jf,
    td,
    rd = me(() => {
      "use strict";
      Ue();
      (ed = de(Qt())),
        ({
          IX2_PREVIEW_REQUESTED: XO,
          IX2_PLAYBACK_REQUESTED: UO,
          IX2_STOP_REQUESTED: WO,
          IX2_CLEAR_REQUESTED: VO,
        } = we),
        (HO = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Jf = Object.create(null, {
          [XO]: { value: "preview" },
          [UO]: { value: "playback" },
          [WO]: { value: "stop" },
          [VO]: { value: "clear" },
        })),
        (td = (e = HO, t) => {
          if (t.type in Jf) {
            let r = [Jf[t.type]];
            return (0, ed.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var De,
    BO,
    jO,
    zO,
    KO,
    YO,
    QO,
    $O,
    ZO,
    JO,
    eA,
    nd,
    tA,
    id,
    od = me(() => {
      "use strict";
      Ue();
      (De = de(Qt())),
        ({
          IX2_SESSION_INITIALIZED: BO,
          IX2_SESSION_STARTED: jO,
          IX2_TEST_FRAME_RENDERED: zO,
          IX2_SESSION_STOPPED: KO,
          IX2_EVENT_LISTENER_ADDED: YO,
          IX2_EVENT_STATE_CHANGED: QO,
          IX2_ANIMATION_FRAME_CHANGED: $O,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: ZO,
          IX2_VIEWPORT_WIDTH_CHANGED: JO,
          IX2_MEDIA_QUERIES_DEFINED: eA,
        } = we),
        (nd = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (tA = 20),
        (id = (e = nd, t) => {
          switch (t.type) {
            case BO: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, De.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case jO:
              return (0, De.set)(e, "active", !0);
            case zO: {
              let {
                payload: { step: r = tA },
              } = t;
              return (0, De.set)(e, "tick", e.tick + r);
            }
            case KO:
              return nd;
            case $O: {
              let {
                payload: { now: r },
              } = t;
              return (0, De.set)(e, "tick", r);
            }
            case YO: {
              let r = (0, De.addLast)(e.eventListeners, t.payload);
              return (0, De.set)(e, "eventListeners", r);
            }
            case QO: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, De.setIn)(e, ["eventState", r], n);
            }
            case ZO: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, De.setIn)(e, ["playbackState", r], n);
            }
            case JO: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: u, min: s, max: f } = n[a];
                if (r >= s && r <= f) {
                  o = u;
                  break;
                }
              }
              return (0, De.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case eA:
              return (0, De.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var sd = c((mH, ad) => {
    function rA() {
      (this.__data__ = []), (this.size = 0);
    }
    ad.exports = rA;
  });
  var Dn = c((yH, ud) => {
    function nA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    ud.exports = nA;
  });
  var Nr = c((EH, cd) => {
    var iA = Dn();
    function oA(e, t) {
      for (var r = e.length; r--;) if (iA(e[r][0], t)) return r;
      return -1;
    }
    cd.exports = oA;
  });
  var fd = c((bH, ld) => {
    var aA = Nr(),
      sA = Array.prototype,
      uA = sA.splice;
    function cA(e) {
      var t = this.__data__,
        r = aA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : uA.call(t, r, 1), --this.size, !0;
    }
    ld.exports = cA;
  });
  var pd = c((_H, dd) => {
    var lA = Nr();
    function fA(e) {
      var t = this.__data__,
        r = lA(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    dd.exports = fA;
  });
  var vd = c((IH, gd) => {
    var dA = Nr();
    function pA(e) {
      return dA(this.__data__, e) > -1;
    }
    gd.exports = pA;
  });
  var md = c((TH, hd) => {
    var gA = Nr();
    function vA(e, t) {
      var r = this.__data__,
        n = gA(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    hd.exports = vA;
  });
  var qr = c((wH, yd) => {
    var hA = sd(),
      mA = fd(),
      yA = pd(),
      EA = vd(),
      bA = md();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = hA;
    $t.prototype.delete = mA;
    $t.prototype.get = yA;
    $t.prototype.has = EA;
    $t.prototype.set = bA;
    yd.exports = $t;
  });
  var bd = c((xH, Ed) => {
    var _A = qr();
    function IA() {
      (this.__data__ = new _A()), (this.size = 0);
    }
    Ed.exports = IA;
  });
  var Id = c((OH, _d) => {
    function TA(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    _d.exports = TA;
  });
  var wd = c((AH, Td) => {
    function wA(e) {
      return this.__data__.get(e);
    }
    Td.exports = wA;
  });
  var Od = c((SH, xd) => {
    function xA(e) {
      return this.__data__.has(e);
    }
    xd.exports = xA;
  });
  var ut = c((RH, Ad) => {
    function OA(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Ad.exports = OA;
  });
  var Zo = c((CH, Sd) => {
    var AA = Tt(),
      SA = ut(),
      RA = "[object AsyncFunction]",
      CA = "[object Function]",
      PA = "[object GeneratorFunction]",
      LA = "[object Proxy]";
    function NA(e) {
      if (!SA(e)) return !1;
      var t = AA(e);
      return t == CA || t == PA || t == RA || t == LA;
    }
    Sd.exports = NA;
  });
  var Cd = c((PH, Rd) => {
    var qA = $e(),
      DA = qA["__core-js_shared__"];
    Rd.exports = DA;
  });
  var Nd = c((LH, Ld) => {
    var Jo = Cd(),
      Pd = (function () {
        var e = /[^.]+$/.exec((Jo && Jo.keys && Jo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function MA(e) {
      return !!Pd && Pd in e;
    }
    Ld.exports = MA;
  });
  var ea = c((NH, qd) => {
    var FA = Function.prototype,
      kA = FA.toString;
    function GA(e) {
      if (e != null) {
        try {
          return kA.call(e);
        } catch { }
        try {
          return e + "";
        } catch { }
      }
      return "";
    }
    qd.exports = GA;
  });
  var Md = c((qH, Dd) => {
    var XA = Zo(),
      UA = Nd(),
      WA = ut(),
      VA = ea(),
      HA = /[\\^$.*+?()[\]{}|]/g,
      BA = /^\[object .+?Constructor\]$/,
      jA = Function.prototype,
      zA = Object.prototype,
      KA = jA.toString,
      YA = zA.hasOwnProperty,
      QA = RegExp(
        "^" +
        KA.call(YA)
          .replace(HA, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
      );
    function $A(e) {
      if (!WA(e) || UA(e)) return !1;
      var t = XA(e) ? QA : BA;
      return t.test(VA(e));
    }
    Dd.exports = $A;
  });
  var kd = c((DH, Fd) => {
    function ZA(e, t) {
      return e?.[t];
    }
    Fd.exports = ZA;
  });
  var wt = c((MH, Gd) => {
    var JA = Md(),
      eS = kd();
    function tS(e, t) {
      var r = eS(e, t);
      return JA(r) ? r : void 0;
    }
    Gd.exports = tS;
  });
  var Mn = c((FH, Xd) => {
    var rS = wt(),
      nS = $e(),
      iS = rS(nS, "Map");
    Xd.exports = iS;
  });
  var Dr = c((kH, Ud) => {
    var oS = wt(),
      aS = oS(Object, "create");
    Ud.exports = aS;
  });
  var Hd = c((GH, Vd) => {
    var Wd = Dr();
    function sS() {
      (this.__data__ = Wd ? Wd(null) : {}), (this.size = 0);
    }
    Vd.exports = sS;
  });
  var jd = c((XH, Bd) => {
    function uS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Bd.exports = uS;
  });
  var Kd = c((UH, zd) => {
    var cS = Dr(),
      lS = "__lodash_hash_undefined__",
      fS = Object.prototype,
      dS = fS.hasOwnProperty;
    function pS(e) {
      var t = this.__data__;
      if (cS) {
        var r = t[e];
        return r === lS ? void 0 : r;
      }
      return dS.call(t, e) ? t[e] : void 0;
    }
    zd.exports = pS;
  });
  var Qd = c((WH, Yd) => {
    var gS = Dr(),
      vS = Object.prototype,
      hS = vS.hasOwnProperty;
    function mS(e) {
      var t = this.__data__;
      return gS ? t[e] !== void 0 : hS.call(t, e);
    }
    Yd.exports = mS;
  });
  var Zd = c((VH, $d) => {
    var yS = Dr(),
      ES = "__lodash_hash_undefined__";
    function bS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = yS && t === void 0 ? ES : t),
        this
      );
    }
    $d.exports = bS;
  });
  var ep = c((HH, Jd) => {
    var _S = Hd(),
      IS = jd(),
      TS = Kd(),
      wS = Qd(),
      xS = Zd();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = _S;
    Zt.prototype.delete = IS;
    Zt.prototype.get = TS;
    Zt.prototype.has = wS;
    Zt.prototype.set = xS;
    Jd.exports = Zt;
  });
  var np = c((BH, rp) => {
    var tp = ep(),
      OS = qr(),
      AS = Mn();
    function SS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new tp(),
          map: new (AS || OS)(),
          string: new tp(),
        });
    }
    rp.exports = SS;
  });
  var op = c((jH, ip) => {
    function RS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    ip.exports = RS;
  });
  var Mr = c((zH, ap) => {
    var CS = op();
    function PS(e, t) {
      var r = e.__data__;
      return CS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    ap.exports = PS;
  });
  var up = c((KH, sp) => {
    var LS = Mr();
    function NS(e) {
      var t = LS(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    sp.exports = NS;
  });
  var lp = c((YH, cp) => {
    var qS = Mr();
    function DS(e) {
      return qS(this, e).get(e);
    }
    cp.exports = DS;
  });
  var dp = c((QH, fp) => {
    var MS = Mr();
    function FS(e) {
      return MS(this, e).has(e);
    }
    fp.exports = FS;
  });
  var gp = c(($H, pp) => {
    var kS = Mr();
    function GS(e, t) {
      var r = kS(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    pp.exports = GS;
  });
  var Fn = c((ZH, vp) => {
    var XS = np(),
      US = up(),
      WS = lp(),
      VS = dp(),
      HS = gp();
    function Jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Jt.prototype.clear = XS;
    Jt.prototype.delete = US;
    Jt.prototype.get = WS;
    Jt.prototype.has = VS;
    Jt.prototype.set = HS;
    vp.exports = Jt;
  });
  var mp = c((JH, hp) => {
    var BS = qr(),
      jS = Mn(),
      zS = Fn(),
      KS = 200;
    function YS(e, t) {
      var r = this.__data__;
      if (r instanceof BS) {
        var n = r.__data__;
        if (!jS || n.length < KS - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new zS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    hp.exports = YS;
  });
  var ta = c((eB, yp) => {
    var QS = qr(),
      $S = bd(),
      ZS = Id(),
      JS = wd(),
      eR = Od(),
      tR = mp();
    function er(e) {
      var t = (this.__data__ = new QS(e));
      this.size = t.size;
    }
    er.prototype.clear = $S;
    er.prototype.delete = ZS;
    er.prototype.get = JS;
    er.prototype.has = eR;
    er.prototype.set = tR;
    yp.exports = er;
  });
  var bp = c((tB, Ep) => {
    var rR = "__lodash_hash_undefined__";
    function nR(e) {
      return this.__data__.set(e, rR), this;
    }
    Ep.exports = nR;
  });
  var Ip = c((rB, _p) => {
    function iR(e) {
      return this.__data__.has(e);
    }
    _p.exports = iR;
  });
  var wp = c((nB, Tp) => {
    var oR = Fn(),
      aR = bp(),
      sR = Ip();
    function kn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new oR(); ++t < r;) this.add(e[t]);
    }
    kn.prototype.add = kn.prototype.push = aR;
    kn.prototype.has = sR;
    Tp.exports = kn;
  });
  var Op = c((iB, xp) => {
    function uR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    xp.exports = uR;
  });
  var Sp = c((oB, Ap) => {
    function cR(e, t) {
      return e.has(t);
    }
    Ap.exports = cR;
  });
  var ra = c((aB, Rp) => {
    var lR = wp(),
      fR = Op(),
      dR = Sp(),
      pR = 1,
      gR = 2;
    function vR(e, t, r, n, i, o) {
      var a = r & pR,
        u = e.length,
        s = t.length;
      if (u != s && !(a && s > u)) return !1;
      var f = o.get(e),
        _ = o.get(t);
      if (f && _) return f == t && _ == e;
      var p = -1,
        b = !0,
        m = r & gR ? new lR() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < u;) {
        var E = e[p],
          I = t[p];
        if (n) var x = a ? n(I, E, p, t, e, o) : n(E, I, p, e, t, o);
        if (x !== void 0) {
          if (x) continue;
          b = !1;
          break;
        }
        if (m) {
          if (
            !fR(t, function (T, P) {
              if (!dR(m, P) && (E === T || i(E, T, r, n, o))) return m.push(P);
            })
          ) {
            b = !1;
            break;
          }
        } else if (!(E === I || i(E, I, r, n, o))) {
          b = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), b;
    }
    Rp.exports = vR;
  });
  var Pp = c((sB, Cp) => {
    var hR = $e(),
      mR = hR.Uint8Array;
    Cp.exports = mR;
  });
  var Np = c((uB, Lp) => {
    function yR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Lp.exports = yR;
  });
  var Dp = c((cB, qp) => {
    function ER(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    qp.exports = ER;
  });
  var Xp = c((lB, Gp) => {
    var Mp = zt(),
      Fp = Pp(),
      bR = Dn(),
      _R = ra(),
      IR = Np(),
      TR = Dp(),
      wR = 1,
      xR = 2,
      OR = "[object Boolean]",
      AR = "[object Date]",
      SR = "[object Error]",
      RR = "[object Map]",
      CR = "[object Number]",
      PR = "[object RegExp]",
      LR = "[object Set]",
      NR = "[object String]",
      qR = "[object Symbol]",
      DR = "[object ArrayBuffer]",
      MR = "[object DataView]",
      kp = Mp ? Mp.prototype : void 0,
      na = kp ? kp.valueOf : void 0;
    function FR(e, t, r, n, i, o, a) {
      switch (r) {
        case MR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case DR:
          return !(e.byteLength != t.byteLength || !o(new Fp(e), new Fp(t)));
        case OR:
        case AR:
        case CR:
          return bR(+e, +t);
        case SR:
          return e.name == t.name && e.message == t.message;
        case PR:
        case NR:
          return e == t + "";
        case RR:
          var u = IR;
        case LR:
          var s = n & wR;
          if ((u || (u = TR), e.size != t.size && !s)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= xR), a.set(e, t);
          var _ = _R(u(e), u(t), n, i, o, a);
          return a.delete(e), _;
        case qR:
          if (na) return na.call(e) == na.call(t);
      }
      return !1;
    }
    Gp.exports = FR;
  });
  var Gn = c((fB, Up) => {
    function kR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
      return e;
    }
    Up.exports = kR;
  });
  var xe = c((dB, Wp) => {
    var GR = Array.isArray;
    Wp.exports = GR;
  });
  var ia = c((pB, Vp) => {
    var XR = Gn(),
      UR = xe();
    function WR(e, t, r) {
      var n = t(e);
      return UR(e) ? n : XR(n, r(e));
    }
    Vp.exports = WR;
  });
  var Bp = c((gB, Hp) => {
    function VR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Hp.exports = VR;
  });
  var oa = c((vB, jp) => {
    function HR() {
      return [];
    }
    jp.exports = HR;
  });
  var aa = c((hB, Kp) => {
    var BR = Bp(),
      jR = oa(),
      zR = Object.prototype,
      KR = zR.propertyIsEnumerable,
      zp = Object.getOwnPropertySymbols,
      YR = zp
        ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              BR(zp(e), function (t) {
                return KR.call(e, t);
              }));
        }
        : jR;
    Kp.exports = YR;
  });
  var Qp = c((mB, Yp) => {
    function QR(e, t) {
      for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
      return n;
    }
    Yp.exports = QR;
  });
  var Zp = c((yB, $p) => {
    var $R = Tt(),
      ZR = gt(),
      JR = "[object Arguments]";
    function eC(e) {
      return ZR(e) && $R(e) == JR;
    }
    $p.exports = eC;
  });
  var Fr = c((EB, tg) => {
    var Jp = Zp(),
      tC = gt(),
      eg = Object.prototype,
      rC = eg.hasOwnProperty,
      nC = eg.propertyIsEnumerable,
      iC = Jp(
        (function () {
          return arguments;
        })()
      )
        ? Jp
        : function (e) {
          return tC(e) && rC.call(e, "callee") && !nC.call(e, "callee");
        };
    tg.exports = iC;
  });
  var ng = c((bB, rg) => {
    function oC() {
      return !1;
    }
    rg.exports = oC;
  });
  var Xn = c((kr, tr) => {
    var aC = $e(),
      sC = ng(),
      ag = typeof kr == "object" && kr && !kr.nodeType && kr,
      ig = ag && typeof tr == "object" && tr && !tr.nodeType && tr,
      uC = ig && ig.exports === ag,
      og = uC ? aC.Buffer : void 0,
      cC = og ? og.isBuffer : void 0,
      lC = cC || sC;
    tr.exports = lC;
  });
  var Un = c((_B, sg) => {
    var fC = 9007199254740991,
      dC = /^(?:0|[1-9]\d*)$/;
    function pC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? fC),
        !!t &&
        (r == "number" || (r != "symbol" && dC.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    }
    sg.exports = pC;
  });
  var Wn = c((IB, ug) => {
    var gC = 9007199254740991;
    function vC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gC;
    }
    ug.exports = vC;
  });
  var lg = c((TB, cg) => {
    var hC = Tt(),
      mC = Wn(),
      yC = gt(),
      EC = "[object Arguments]",
      bC = "[object Array]",
      _C = "[object Boolean]",
      IC = "[object Date]",
      TC = "[object Error]",
      wC = "[object Function]",
      xC = "[object Map]",
      OC = "[object Number]",
      AC = "[object Object]",
      SC = "[object RegExp]",
      RC = "[object Set]",
      CC = "[object String]",
      PC = "[object WeakMap]",
      LC = "[object ArrayBuffer]",
      NC = "[object DataView]",
      qC = "[object Float32Array]",
      DC = "[object Float64Array]",
      MC = "[object Int8Array]",
      FC = "[object Int16Array]",
      kC = "[object Int32Array]",
      GC = "[object Uint8Array]",
      XC = "[object Uint8ClampedArray]",
      UC = "[object Uint16Array]",
      WC = "[object Uint32Array]",
      he = {};
    he[qC] =
      he[DC] =
      he[MC] =
      he[FC] =
      he[kC] =
      he[GC] =
      he[XC] =
      he[UC] =
      he[WC] =
      !0;
    he[EC] =
      he[bC] =
      he[LC] =
      he[_C] =
      he[NC] =
      he[IC] =
      he[TC] =
      he[wC] =
      he[xC] =
      he[OC] =
      he[AC] =
      he[SC] =
      he[RC] =
      he[CC] =
      he[PC] =
      !1;
    function VC(e) {
      return yC(e) && mC(e.length) && !!he[hC(e)];
    }
    cg.exports = VC;
  });
  var dg = c((wB, fg) => {
    function HC(e) {
      return function (t) {
        return e(t);
      };
    }
    fg.exports = HC;
  });
  var gg = c((Gr, rr) => {
    var BC = Lo(),
      pg = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
      Xr = pg && typeof rr == "object" && rr && !rr.nodeType && rr,
      jC = Xr && Xr.exports === pg,
      sa = jC && BC.process,
      zC = (function () {
        try {
          var e = Xr && Xr.require && Xr.require("util").types;
          return e || (sa && sa.binding && sa.binding("util"));
        } catch { }
      })();
    rr.exports = zC;
  });
  var Vn = c((xB, mg) => {
    var KC = lg(),
      YC = dg(),
      vg = gg(),
      hg = vg && vg.isTypedArray,
      QC = hg ? YC(hg) : KC;
    mg.exports = QC;
  });
  var ua = c((OB, yg) => {
    var $C = Qp(),
      ZC = Fr(),
      JC = xe(),
      eP = Xn(),
      tP = Un(),
      rP = Vn(),
      nP = Object.prototype,
      iP = nP.hasOwnProperty;
    function oP(e, t) {
      var r = JC(e),
        n = !r && ZC(e),
        i = !r && !n && eP(e),
        o = !r && !n && !i && rP(e),
        a = r || n || i || o,
        u = a ? $C(e.length, String) : [],
        s = u.length;
      for (var f in e)
        (t || iP.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              tP(f, s))
          ) &&
          u.push(f);
      return u;
    }
    yg.exports = oP;
  });
  var Hn = c((AB, Eg) => {
    var aP = Object.prototype;
    function sP(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || aP;
      return e === r;
    }
    Eg.exports = sP;
  });
  var _g = c((SB, bg) => {
    var uP = No(),
      cP = uP(Object.keys, Object);
    bg.exports = cP;
  });
  var Bn = c((RB, Ig) => {
    var lP = Hn(),
      fP = _g(),
      dP = Object.prototype,
      pP = dP.hasOwnProperty;
    function gP(e) {
      if (!lP(e)) return fP(e);
      var t = [];
      for (var r in Object(e)) pP.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Ig.exports = gP;
  });
  var qt = c((CB, Tg) => {
    var vP = Zo(),
      hP = Wn();
    function mP(e) {
      return e != null && hP(e.length) && !vP(e);
    }
    Tg.exports = mP;
  });
  var Ur = c((PB, wg) => {
    var yP = ua(),
      EP = Bn(),
      bP = qt();
    function _P(e) {
      return bP(e) ? yP(e) : EP(e);
    }
    wg.exports = _P;
  });
  var Og = c((LB, xg) => {
    var IP = ia(),
      TP = aa(),
      wP = Ur();
    function xP(e) {
      return IP(e, wP, TP);
    }
    xg.exports = xP;
  });
  var Rg = c((NB, Sg) => {
    var Ag = Og(),
      OP = 1,
      AP = Object.prototype,
      SP = AP.hasOwnProperty;
    function RP(e, t, r, n, i, o) {
      var a = r & OP,
        u = Ag(e),
        s = u.length,
        f = Ag(t),
        _ = f.length;
      if (s != _ && !a) return !1;
      for (var p = s; p--;) {
        var b = u[p];
        if (!(a ? b in t : SP.call(t, b))) return !1;
      }
      var m = o.get(e),
        E = o.get(t);
      if (m && E) return m == t && E == e;
      var I = !0;
      o.set(e, t), o.set(t, e);
      for (var x = a; ++p < s;) {
        b = u[p];
        var T = e[b],
          P = t[b];
        if (n) var C = a ? n(P, T, b, t, e, o) : n(T, P, b, e, t, o);
        if (!(C === void 0 ? T === P || i(T, P, r, n, o) : C)) {
          I = !1;
          break;
        }
        x || (x = b == "constructor");
      }
      if (I && !x) {
        var N = e.constructor,
          F = t.constructor;
        N != F &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof N == "function" &&
            N instanceof N &&
            typeof F == "function" &&
            F instanceof F
          ) &&
          (I = !1);
      }
      return o.delete(e), o.delete(t), I;
    }
    Sg.exports = RP;
  });
  var Pg = c((qB, Cg) => {
    var CP = wt(),
      PP = $e(),
      LP = CP(PP, "DataView");
    Cg.exports = LP;
  });
  var Ng = c((DB, Lg) => {
    var NP = wt(),
      qP = $e(),
      DP = NP(qP, "Promise");
    Lg.exports = DP;
  });
  var Dg = c((MB, qg) => {
    var MP = wt(),
      FP = $e(),
      kP = MP(FP, "Set");
    qg.exports = kP;
  });
  var ca = c((FB, Mg) => {
    var GP = wt(),
      XP = $e(),
      UP = GP(XP, "WeakMap");
    Mg.exports = UP;
  });
  var jn = c((kB, Vg) => {
    var la = Pg(),
      fa = Mn(),
      da = Ng(),
      pa = Dg(),
      ga = ca(),
      Wg = Tt(),
      nr = ea(),
      Fg = "[object Map]",
      WP = "[object Object]",
      kg = "[object Promise]",
      Gg = "[object Set]",
      Xg = "[object WeakMap]",
      Ug = "[object DataView]",
      VP = nr(la),
      HP = nr(fa),
      BP = nr(da),
      jP = nr(pa),
      zP = nr(ga),
      Dt = Wg;
    ((la && Dt(new la(new ArrayBuffer(1))) != Ug) ||
      (fa && Dt(new fa()) != Fg) ||
      (da && Dt(da.resolve()) != kg) ||
      (pa && Dt(new pa()) != Gg) ||
      (ga && Dt(new ga()) != Xg)) &&
      (Dt = function (e) {
        var t = Wg(e),
          r = t == WP ? e.constructor : void 0,
          n = r ? nr(r) : "";
        if (n)
          switch (n) {
            case VP:
              return Ug;
            case HP:
              return Fg;
            case BP:
              return kg;
            case jP:
              return Gg;
            case zP:
              return Xg;
          }
        return t;
      });
    Vg.exports = Dt;
  });
  var $g = c((GB, Qg) => {
    var va = ta(),
      KP = ra(),
      YP = Xp(),
      QP = Rg(),
      Hg = jn(),
      Bg = xe(),
      jg = Xn(),
      $P = Vn(),
      ZP = 1,
      zg = "[object Arguments]",
      Kg = "[object Array]",
      zn = "[object Object]",
      JP = Object.prototype,
      Yg = JP.hasOwnProperty;
    function eL(e, t, r, n, i, o) {
      var a = Bg(e),
        u = Bg(t),
        s = a ? Kg : Hg(e),
        f = u ? Kg : Hg(t);
      (s = s == zg ? zn : s), (f = f == zg ? zn : f);
      var _ = s == zn,
        p = f == zn,
        b = s == f;
      if (b && jg(e)) {
        if (!jg(t)) return !1;
        (a = !0), (_ = !1);
      }
      if (b && !_)
        return (
          o || (o = new va()),
          a || $P(e) ? KP(e, t, r, n, i, o) : YP(e, t, s, r, n, i, o)
        );
      if (!(r & ZP)) {
        var m = _ && Yg.call(e, "__wrapped__"),
          E = p && Yg.call(t, "__wrapped__");
        if (m || E) {
          var I = m ? e.value() : e,
            x = E ? t.value() : t;
          return o || (o = new va()), i(I, x, r, n, o);
        }
      }
      return b ? (o || (o = new va()), QP(e, t, r, n, i, o)) : !1;
    }
    Qg.exports = eL;
  });
  var ha = c((XB, ev) => {
    var tL = $g(),
      Zg = gt();
    function Jg(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Zg(e) && !Zg(t))
          ? e !== e && t !== t
          : tL(e, t, r, n, Jg, i);
    }
    ev.exports = Jg;
  });
  var rv = c((UB, tv) => {
    var rL = ta(),
      nL = ha(),
      iL = 1,
      oL = 2;
    function aL(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--;) {
        var u = r[i];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++i < o;) {
        u = r[i];
        var s = u[0],
          f = e[s],
          _ = u[1];
        if (a && u[2]) {
          if (f === void 0 && !(s in e)) return !1;
        } else {
          var p = new rL();
          if (n) var b = n(f, _, s, e, t, p);
          if (!(b === void 0 ? nL(_, f, iL | oL, n, p) : b)) return !1;
        }
      }
      return !0;
    }
    tv.exports = aL;
  });
  var ma = c((WB, nv) => {
    var sL = ut();
    function uL(e) {
      return e === e && !sL(e);
    }
    nv.exports = uL;
  });
  var ov = c((VB, iv) => {
    var cL = ma(),
      lL = Ur();
    function fL(e) {
      for (var t = lL(e), r = t.length; r--;) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, cL(i)];
      }
      return t;
    }
    iv.exports = fL;
  });
  var ya = c((HB, av) => {
    function dL(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    av.exports = dL;
  });
  var uv = c((BB, sv) => {
    var pL = rv(),
      gL = ov(),
      vL = ya();
    function hL(e) {
      var t = gL(e);
      return t.length == 1 && t[0][2]
        ? vL(t[0][0], t[0][1])
        : function (r) {
          return r === e || pL(r, e, t);
        };
    }
    sv.exports = hL;
  });
  var Wr = c((jB, cv) => {
    var mL = Tt(),
      yL = gt(),
      EL = "[object Symbol]";
    function bL(e) {
      return typeof e == "symbol" || (yL(e) && mL(e) == EL);
    }
    cv.exports = bL;
  });
  var Kn = c((zB, lv) => {
    var _L = xe(),
      IL = Wr(),
      TL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      wL = /^\w*$/;
    function xL(e, t) {
      if (_L(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        IL(e)
        ? !0
        : wL.test(e) || !TL.test(e) || (t != null && e in Object(t));
    }
    lv.exports = xL;
  });
  var pv = c((KB, dv) => {
    var fv = Fn(),
      OL = "Expected a function";
    function Ea(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(OL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Ea.Cache || fv)()), r;
    }
    Ea.Cache = fv;
    dv.exports = Ea;
  });
  var vv = c((YB, gv) => {
    var AL = pv(),
      SL = 500;
    function RL(e) {
      var t = AL(e, function (n) {
        return r.size === SL && r.clear(), n;
      }),
        r = t.cache;
      return t;
    }
    gv.exports = RL;
  });
  var mv = c((QB, hv) => {
    var CL = vv(),
      PL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      LL = /\\(\\)?/g,
      NL = CL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(PL, function (r, n, i, o) {
            t.push(i ? o.replace(LL, "$1") : n || r);
          }),
          t
        );
      });
    hv.exports = NL;
  });
  var ba = c(($B, yv) => {
    function qL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;)
        i[r] = t(e[r], r, e);
      return i;
    }
    yv.exports = qL;
  });
  var wv = c((ZB, Tv) => {
    var Ev = zt(),
      DL = ba(),
      ML = xe(),
      FL = Wr(),
      kL = 1 / 0,
      bv = Ev ? Ev.prototype : void 0,
      _v = bv ? bv.toString : void 0;
    function Iv(e) {
      if (typeof e == "string") return e;
      if (ML(e)) return DL(e, Iv) + "";
      if (FL(e)) return _v ? _v.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -kL ? "-0" : t;
    }
    Tv.exports = Iv;
  });
  var Ov = c((JB, xv) => {
    var GL = wv();
    function XL(e) {
      return e == null ? "" : GL(e);
    }
    xv.exports = XL;
  });
  var Vr = c((e5, Av) => {
    var UL = xe(),
      WL = Kn(),
      VL = mv(),
      HL = Ov();
    function BL(e, t) {
      return UL(e) ? e : WL(e, t) ? [e] : VL(HL(e));
    }
    Av.exports = BL;
  });
  var ir = c((t5, Sv) => {
    var jL = Wr(),
      zL = 1 / 0;
    function KL(e) {
      if (typeof e == "string" || jL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -zL ? "-0" : t;
    }
    Sv.exports = KL;
  });
  var Yn = c((r5, Rv) => {
    var YL = Vr(),
      QL = ir();
    function $L(e, t) {
      t = YL(t, e);
      for (var r = 0, n = t.length; e != null && r < n;) e = e[QL(t[r++])];
      return r && r == n ? e : void 0;
    }
    Rv.exports = $L;
  });
  var Qn = c((n5, Cv) => {
    var ZL = Yn();
    function JL(e, t, r) {
      var n = e == null ? void 0 : ZL(e, t);
      return n === void 0 ? r : n;
    }
    Cv.exports = JL;
  });
  var Lv = c((i5, Pv) => {
    function eN(e, t) {
      return e != null && t in Object(e);
    }
    Pv.exports = eN;
  });
  var qv = c((o5, Nv) => {
    var tN = Vr(),
      rN = Fr(),
      nN = xe(),
      iN = Un(),
      oN = Wn(),
      aN = ir();
    function sN(e, t, r) {
      t = tN(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i;) {
        var a = aN(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && oN(i) && iN(a, i) && (nN(e) || rN(e)));
    }
    Nv.exports = sN;
  });
  var Mv = c((a5, Dv) => {
    var uN = Lv(),
      cN = qv();
    function lN(e, t) {
      return e != null && cN(e, t, uN);
    }
    Dv.exports = lN;
  });
  var kv = c((s5, Fv) => {
    var fN = ha(),
      dN = Qn(),
      pN = Mv(),
      gN = Kn(),
      vN = ma(),
      hN = ya(),
      mN = ir(),
      yN = 1,
      EN = 2;
    function bN(e, t) {
      return gN(e) && vN(t)
        ? hN(mN(e), t)
        : function (r) {
          var n = dN(r, e);
          return n === void 0 && n === t ? pN(r, e) : fN(t, n, yN | EN);
        };
    }
    Fv.exports = bN;
  });
  var $n = c((u5, Gv) => {
    function _N(e) {
      return e;
    }
    Gv.exports = _N;
  });
  var _a = c((c5, Xv) => {
    function IN(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Xv.exports = IN;
  });
  var Wv = c((l5, Uv) => {
    var TN = Yn();
    function wN(e) {
      return function (t) {
        return TN(t, e);
      };
    }
    Uv.exports = wN;
  });
  var Hv = c((f5, Vv) => {
    var xN = _a(),
      ON = Wv(),
      AN = Kn(),
      SN = ir();
    function RN(e) {
      return AN(e) ? xN(SN(e)) : ON(e);
    }
    Vv.exports = RN;
  });
  var xt = c((d5, Bv) => {
    var CN = uv(),
      PN = kv(),
      LN = $n(),
      NN = xe(),
      qN = Hv();
    function DN(e) {
      return typeof e == "function"
        ? e
        : e == null
          ? LN
          : typeof e == "object"
            ? NN(e)
              ? PN(e[0], e[1])
              : CN(e)
            : qN(e);
    }
    Bv.exports = DN;
  });
  var Ia = c((p5, jv) => {
    var MN = xt(),
      FN = qt(),
      kN = Ur();
    function GN(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!FN(t)) {
          var o = MN(r, 3);
          (t = kN(t)),
            (r = function (u) {
              return o(i[u], u, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    jv.exports = GN;
  });
  var Ta = c((g5, zv) => {
    function XN(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
        if (t(e[o], o, e)) return o;
      return -1;
    }
    zv.exports = XN;
  });
  var Yv = c((v5, Kv) => {
    var UN = /\s/;
    function WN(e) {
      for (var t = e.length; t-- && UN.test(e.charAt(t)););
      return t;
    }
    Kv.exports = WN;
  });
  var $v = c((h5, Qv) => {
    var VN = Yv(),
      HN = /^\s+/;
    function BN(e) {
      return e && e.slice(0, VN(e) + 1).replace(HN, "");
    }
    Qv.exports = BN;
  });
  var Zn = c((m5, eh) => {
    var jN = $v(),
      Zv = ut(),
      zN = Wr(),
      Jv = 0 / 0,
      KN = /^[-+]0x[0-9a-f]+$/i,
      YN = /^0b[01]+$/i,
      QN = /^0o[0-7]+$/i,
      $N = parseInt;
    function ZN(e) {
      if (typeof e == "number") return e;
      if (zN(e)) return Jv;
      if (Zv(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Zv(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = jN(e);
      var r = YN.test(e);
      return r || QN.test(e) ? $N(e.slice(2), r ? 2 : 8) : KN.test(e) ? Jv : +e;
    }
    eh.exports = ZN;
  });
  var nh = c((y5, rh) => {
    var JN = Zn(),
      th = 1 / 0,
      eq = 17976931348623157e292;
    function tq(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = JN(e)), e === th || e === -th)) {
        var t = e < 0 ? -1 : 1;
        return t * eq;
      }
      return e === e ? e : 0;
    }
    rh.exports = tq;
  });
  var wa = c((E5, ih) => {
    var rq = nh();
    function nq(e) {
      var t = rq(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    ih.exports = nq;
  });
  var ah = c((b5, oh) => {
    var iq = Ta(),
      oq = xt(),
      aq = wa(),
      sq = Math.max;
    function uq(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : aq(r);
      return i < 0 && (i = sq(n + i, 0)), iq(e, oq(t, 3), i);
    }
    oh.exports = uq;
  });
  var xa = c((_5, sh) => {
    var cq = Ia(),
      lq = ah(),
      fq = cq(lq);
    sh.exports = fq;
  });
  var lh = {};
  Ge(lh, {
    ELEMENT_MATCHES: () => dq,
    FLEX_PREFIXED: () => Oa,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => Ot,
    TRANSFORM_STYLE_PREFIXED: () => ei,
    withBrowser: () => Jn,
  });
  var ch,
    Je,
    Jn,
    dq,
    Oa,
    Ot,
    uh,
    ei,
    ti = me(() => {
      "use strict";
      (ch = de(xa())),
        (Je = typeof window < "u"),
        (Jn = (e, t) => (Je ? e() : t)),
        (dq = Jn(() =>
          (0, ch.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Oa = Jn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (Ot = Jn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (uh = Ot.split("transform")[0]),
        (ei = uh ? uh + "TransformStyle" : "transformStyle");
    });
  var Aa = c((I5, vh) => {
    var pq = 4,
      gq = 0.001,
      vq = 1e-7,
      hq = 10,
      Hr = 11,
      ri = 1 / (Hr - 1),
      mq = typeof Float32Array == "function";
    function fh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function dh(e, t) {
      return 3 * t - 6 * e;
    }
    function ph(e) {
      return 3 * e;
    }
    function ni(e, t, r) {
      return ((fh(t, r) * e + dh(t, r)) * e + ph(t)) * e;
    }
    function gh(e, t, r) {
      return 3 * fh(t, r) * e * e + 2 * dh(t, r) * e + ph(t);
    }
    function yq(e, t, r, n, i) {
      var o,
        a,
        u = 0;
      do
        (a = t + (r - t) / 2), (o = ni(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > vq && ++u < hq);
      return a;
    }
    function Eq(e, t, r, n) {
      for (var i = 0; i < pq; ++i) {
        var o = gh(t, r, n);
        if (o === 0) return t;
        var a = ni(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    vh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = mq ? new Float32Array(Hr) : new Array(Hr);
      if (t !== r || n !== i)
        for (var a = 0; a < Hr; ++a) o[a] = ni(a * ri, t, n);
      function u(s) {
        for (var f = 0, _ = 1, p = Hr - 1; _ !== p && o[_] <= s; ++_) f += ri;
        --_;
        var b = (s - o[_]) / (o[_ + 1] - o[_]),
          m = f + b * ri,
          E = gh(m, t, n);
        return E >= gq ? Eq(s, m, t, n) : E === 0 ? m : yq(s, f, f + ri, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
            ? 0
            : f === 1
              ? 1
              : ni(u(f), r, i);
      };
    };
  });
  var jr = {};
  Ge(jr, {
    bounce: () => tD,
    bouncePast: () => rD,
    ease: () => bq,
    easeIn: () => _q,
    easeInOut: () => Tq,
    easeOut: () => Iq,
    inBack: () => jq,
    inCirc: () => Wq,
    inCubic: () => Aq,
    inElastic: () => Yq,
    inExpo: () => Gq,
    inOutBack: () => Kq,
    inOutCirc: () => Hq,
    inOutCubic: () => Rq,
    inOutElastic: () => $q,
    inOutExpo: () => Uq,
    inOutQuad: () => Oq,
    inOutQuart: () => Lq,
    inOutQuint: () => Dq,
    inOutSine: () => kq,
    inQuad: () => wq,
    inQuart: () => Cq,
    inQuint: () => Nq,
    inSine: () => Mq,
    outBack: () => zq,
    outBounce: () => Bq,
    outCirc: () => Vq,
    outCubic: () => Sq,
    outElastic: () => Qq,
    outExpo: () => Xq,
    outQuad: () => xq,
    outQuart: () => Pq,
    outQuint: () => qq,
    outSine: () => Fq,
    swingFrom: () => Jq,
    swingFromTo: () => Zq,
    swingTo: () => eD,
  });
  function wq(e) {
    return Math.pow(e, 2);
  }
  function xq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function Oq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function Aq(e) {
    return Math.pow(e, 3);
  }
  function Sq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function Rq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function Cq(e) {
    return Math.pow(e, 4);
  }
  function Pq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function Lq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Nq(e) {
    return Math.pow(e, 5);
  }
  function qq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Dq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Mq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Fq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function kq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Gq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Xq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Uq(e) {
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Wq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Vq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Hq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Bq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function jq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function zq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Kq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Yq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
  }
  function Qq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function $q(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r) *
            0.5 +
            1);
  }
  function Zq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Jq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function eD(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function tD(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function rD(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Br,
    vt,
    bq,
    _q,
    Iq,
    Tq,
    Sa = me(() => {
      "use strict";
      (Br = de(Aa())),
        (vt = 1.70158),
        (bq = (0, Br.default)(0.25, 0.1, 0.25, 1)),
        (_q = (0, Br.default)(0.42, 0, 1, 1)),
        (Iq = (0, Br.default)(0, 0, 0.58, 1)),
        (Tq = (0, Br.default)(0.42, 0, 0.58, 1));
    });
  var mh = {};
  Ge(mh, {
    applyEasing: () => iD,
    createBezierEasing: () => nD,
    optimizeFloat: () => zr,
  });
  function zr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function nD(e) {
    return (0, hh.default)(...e);
  }
  function iD(e, t, r) {
    return t === 0
      ? 0
      : t === 1
        ? 1
        : zr(r ? (t > 0 ? r(t) : t) : t > 0 && e && jr[e] ? jr[e](t) : t);
  }
  var hh,
    Ra = me(() => {
      "use strict";
      Sa();
      hh = de(Aa());
    });
  var bh = {};
  Ge(bh, {
    createElementState: () => Eh,
    ixElements: () => yD,
    mergeActionState: () => Ca,
  });
  function Eh(e, t, r, n, i) {
    let o =
      r === oD ? (0, or.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, or.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ca(e, t, r, n, i) {
    let o = bD(i);
    return (0, or.mergeIn)(e, [t, mD, r], n, o);
  }
  function bD(e) {
    let { config: t } = e;
    return ED.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        u = t[o];
      return a != null && u != null && (r[o] = u), r;
    }, {});
  }
  var or,
    w5,
    oD,
    x5,
    aD,
    sD,
    uD,
    cD,
    lD,
    fD,
    dD,
    pD,
    gD,
    vD,
    hD,
    yh,
    mD,
    yD,
    ED,
    _h = me(() => {
      "use strict";
      or = de(Qt());
      Ue();
      ({
        HTML_ELEMENT: w5,
        PLAIN_OBJECT: oD,
        ABSTRACT_NODE: x5,
        CONFIG_X_VALUE: aD,
        CONFIG_Y_VALUE: sD,
        CONFIG_Z_VALUE: uD,
        CONFIG_VALUE: cD,
        CONFIG_X_UNIT: lD,
        CONFIG_Y_UNIT: fD,
        CONFIG_Z_UNIT: dD,
        CONFIG_UNIT: pD,
      } = Pe),
        ({
          IX2_SESSION_STOPPED: gD,
          IX2_INSTANCE_ADDED: vD,
          IX2_ELEMENT_STATE_CHANGED: hD,
        } = we),
        (yh = {}),
        (mD = "refState"),
        (yD = (e = yh, t = {}) => {
          switch (t.type) {
            case gD:
              return yh;
            case vD: {
              let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: o,
                refType: a,
              } = t.payload,
                { actionTypeId: u } = o,
                s = e;
              return (
                (0, or.getIn)(s, [r, n]) !== n && (s = Eh(s, n, a, r, o)),
                Ca(s, r, u, i, o)
              );
            }
            case hD: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ca(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      ED = [
        [aD, lD],
        [sD, fD],
        [uD, dD],
        [cD, pD],
      ];
    });
  var Ih = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.renderPlugin =
      Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
      void 0;
    var _D = (e) => e.value;
    Oe.getPluginConfig = _D;
    var ID = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Oe.getPluginDuration = ID;
    var TD = (e) => e || { value: 0 };
    Oe.getPluginOrigin = TD;
    var wD = (e) => ({ value: e.value });
    Oe.getPluginDestination = wD;
    var xD = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Oe.createPluginInstance = xD;
    var OD = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Oe.renderPlugin = OD;
    var AD = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Oe.clearPlugin = AD;
  });
  var wh = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
      void 0;
    var SD = (e) => document.querySelector(`[data-w-id="${e}"]`),
      RD = () => window.Webflow.require("spline"),
      CD = (e, t) => e.filter((r) => !t.includes(r)),
      PD = (e, t) => e.value[t];
    Ae.getPluginConfig = PD;
    var LD = () => null;
    Ae.getPluginDuration = LD;
    var Th = Object.freeze({
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
    }),
      ND = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = CD(n, o);
          return a.length ? a.reduce((s, f) => ((s[f] = Th[f]), s), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = Th[a]), o), {});
      };
    Ae.getPluginOrigin = ND;
    var qD = (e) => e.value;
    Ae.getPluginDestination = qD;
    var DD = (e, t) => {
      var r;
      let n =
        t == null ||
          (r = t.config) === null ||
          r === void 0 ||
          (r = r.target) === null ||
          r === void 0
          ? void 0
          : r.pluginElement;
      return n ? SD(n) : null;
    };
    Ae.createPluginInstance = DD;
    var MD = (e, t, r) => {
      let n = RD(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (u) => {
          if (!u) throw new Error("Invalid spline app passed to renderSpline");
          let s = o && u.findObjectById(o);
          if (!s) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (s.position.x = f.positionX),
            f.positionY != null && (s.position.y = f.positionY),
            f.positionZ != null && (s.position.z = f.positionZ),
            f.rotationX != null && (s.rotation.x = f.rotationX),
            f.rotationY != null && (s.rotation.y = f.rotationY),
            f.rotationZ != null && (s.rotation.z = f.rotationZ),
            f.scaleX != null && (s.scale.x = f.scaleX),
            f.scaleY != null && (s.scale.y = f.scaleY),
            f.scaleZ != null && (s.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = MD;
    var FD = () => null;
    Ae.clearPlugin = FD;
  });
  var La = c((Pa) => {
    "use strict";
    Object.defineProperty(Pa, "__esModule", { value: !0 });
    Pa.normalizeColor = kD;
    var xh = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function kD(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof xh[o] == "string" ? xh[o].toLowerCase() : null) || o;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3 || s.length === 4
          ? ((t = parseInt(s[0] + s[0], 16)),
            (r = parseInt(s[1] + s[1], 16)),
            (n = parseInt(s[2] + s[2], 16)),
            s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255))
          : (s.length === 6 || s.length === 8) &&
          ((t = parseInt(s.substring(0, 2), 16)),
            (r = parseInt(s.substring(2, 4), 16)),
            (n = parseInt(s.substring(4, 6), 16)),
            s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10)),
          (i = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          _ = parseFloat(s[1].replace("%", "")) / 100,
          p = parseFloat(s[2].replace("%", "")) / 100;
        i = parseFloat(s[3]);
        let b = (1 - Math.abs(2 * p - 1)) * _,
          m = b * (1 - Math.abs(((f / 60) % 2) - 1)),
          E = p - b / 2,
          I,
          x,
          T;
        f >= 0 && f < 60
          ? ((I = b), (x = m), (T = 0))
          : f >= 60 && f < 120
            ? ((I = m), (x = b), (T = 0))
            : f >= 120 && f < 180
              ? ((I = 0), (x = b), (T = m))
              : f >= 180 && f < 240
                ? ((I = 0), (x = m), (T = b))
                : f >= 240 && f < 300
                  ? ((I = m), (x = 0), (T = b))
                  : ((I = b), (x = 0), (T = m)),
          (t = Math.round((I + E) * 255)),
          (r = Math.round((x + E) * 255)),
          (n = Math.round((T + E) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          _ = parseFloat(s[1].replace("%", "")) / 100,
          p = parseFloat(s[2].replace("%", "")) / 100,
          b = (1 - Math.abs(2 * p - 1)) * _,
          m = b * (1 - Math.abs(((f / 60) % 2) - 1)),
          E = p - b / 2,
          I,
          x,
          T;
        f >= 0 && f < 60
          ? ((I = b), (x = m), (T = 0))
          : f >= 60 && f < 120
            ? ((I = m), (x = b), (T = 0))
            : f >= 120 && f < 180
              ? ((I = 0), (x = b), (T = m))
              : f >= 180 && f < 240
                ? ((I = 0), (x = m), (T = b))
                : f >= 240 && f < 300
                  ? ((I = m), (x = 0), (T = b))
                  : ((I = b), (x = 0), (T = m)),
          (t = Math.round((I + E) * 255)),
          (r = Math.round((x + E) * 255)),
          (n = Math.round((T + E) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var Oh = c((Se) => {
    "use strict";
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.renderPlugin =
      Se.getPluginOrigin =
      Se.getPluginDuration =
      Se.getPluginDestination =
      Se.getPluginConfig =
      Se.createPluginInstance =
      Se.clearPlugin =
      void 0;
    var GD = La(),
      XD = (e, t) => e.value[t];
    Se.getPluginConfig = XD;
    var UD = () => null;
    Se.getPluginDuration = UD;
    var WD = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, GD.normalizeColor)(i);
    };
    Se.getPluginOrigin = WD;
    var VD = (e) => e.value;
    Se.getPluginDestination = VD;
    var HD = () => null;
    Se.createPluginInstance = HD;
    var BD = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: u, green: s, blue: f, alpha: _ } = o,
        p;
      a != null && (p = a + i),
        u != null &&
        f != null &&
        s != null &&
        _ != null &&
        (p = `rgba(${u}, ${s}, ${f}, ${_})`),
        p != null && document.documentElement.style.setProperty(n, p);
    };
    Se.renderPlugin = BD;
    var jD = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Se.clearPlugin = jD;
  });
  var Ah = c((ii) => {
    "use strict";
    var qa = vn().default;
    Object.defineProperty(ii, "__esModule", { value: !0 });
    ii.pluginMethodMap = void 0;
    var Na = (Ue(), nt(Nf)),
      zD = qa(Ih()),
      KD = qa(wh()),
      YD = qa(Oh()),
      C5 = (ii.pluginMethodMap = new Map([
        [Na.ActionTypeConsts.PLUGIN_LOTTIE, { ...zD }],
        [Na.ActionTypeConsts.PLUGIN_SPLINE, { ...KD }],
        [Na.ActionTypeConsts.PLUGIN_VARIABLE, { ...YD }],
      ]));
  });
  var Sh = {};
  Ge(Sh, {
    clearPlugin: () => Xa,
    createPluginInstance: () => $D,
    getPluginConfig: () => Ma,
    getPluginDestination: () => ka,
    getPluginDuration: () => QD,
    getPluginOrigin: () => Fa,
    isPluginType: () => Mt,
    renderPlugin: () => Ga,
  });
  function Mt(e) {
    return Da.pluginMethodMap.has(e);
  }
  var Da,
    Ft,
    Ma,
    Fa,
    QD,
    ka,
    $D,
    Ga,
    Xa,
    Ua = me(() => {
      "use strict";
      ti();
      Da = de(Ah());
      (Ft = (e) => (t) => {
        if (!Je) return () => null;
        let r = Da.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ma = Ft("getPluginConfig")),
        (Fa = Ft("getPluginOrigin")),
        (QD = Ft("getPluginDuration")),
        (ka = Ft("getPluginDestination")),
        ($D = Ft("createPluginInstance")),
        (Ga = Ft("renderPlugin")),
        (Xa = Ft("clearPlugin"));
    });
  var Ch = c((N5, Rh) => {
    function ZD(e, t) {
      return e == null || e !== e ? t : e;
    }
    Rh.exports = ZD;
  });
  var Lh = c((q5, Ph) => {
    function JD(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
      return r;
    }
    Ph.exports = JD;
  });
  var qh = c((D5, Nh) => {
    function eM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), u = a.length; u--;) {
          var s = a[e ? u : ++i];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    Nh.exports = eM;
  });
  var Mh = c((M5, Dh) => {
    var tM = qh(),
      rM = tM();
    Dh.exports = rM;
  });
  var Wa = c((F5, Fh) => {
    var nM = Mh(),
      iM = Ur();
    function oM(e, t) {
      return e && nM(e, t, iM);
    }
    Fh.exports = oM;
  });
  var Gh = c((k5, kh) => {
    var aM = qt();
    function sM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!aM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    kh.exports = sM;
  });
  var Va = c((G5, Xh) => {
    var uM = Wa(),
      cM = Gh(),
      lM = cM(uM);
    Xh.exports = lM;
  });
  var Wh = c((X5, Uh) => {
    function fM(e, t, r, n, i) {
      return (
        i(e, function (o, a, u) {
          r = n ? ((n = !1), o) : t(r, o, a, u);
        }),
        r
      );
    }
    Uh.exports = fM;
  });
  var Hh = c((U5, Vh) => {
    var dM = Lh(),
      pM = Va(),
      gM = xt(),
      vM = Wh(),
      hM = xe();
    function mM(e, t, r) {
      var n = hM(e) ? dM : vM,
        i = arguments.length < 3;
      return n(e, gM(t, 4), r, i, pM);
    }
    Vh.exports = mM;
  });
  var jh = c((W5, Bh) => {
    var yM = Ta(),
      EM = xt(),
      bM = wa(),
      _M = Math.max,
      IM = Math.min;
    function TM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
        ((i = bM(r)), (i = r < 0 ? _M(n + i, 0) : IM(i, n - 1))),
        yM(e, EM(t, 3), i, !0)
      );
    }
    Bh.exports = TM;
  });
  var Kh = c((V5, zh) => {
    var wM = Ia(),
      xM = jh(),
      OM = wM(xM);
    zh.exports = OM;
  });
  function Yh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function AM(e, t) {
    if (Yh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Yh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var Ha,
    Qh = me(() => {
      "use strict";
      Ha = AM;
    });
  var gm = {};
  Ge(gm, {
    cleanupHTMLElement: () => wF,
    clearAllStyles: () => TF,
    clearObjectCache: () => HM,
    getActionListProgress: () => OF,
    getAffectedElements: () => Ya,
    getComputedStyle: () => ZM,
    getDestinationValues: () => oF,
    getElementId: () => KM,
    getInstanceId: () => jM,
    getInstanceOrigin: () => tF,
    getItemConfigByKey: () => iF,
    getMaxDurationItemIndex: () => pm,
    getNamespacedParameterId: () => RF,
    getRenderType: () => lm,
    getStyleProp: () => aF,
    mediaQueriesEqual: () => PF,
    observeStore: () => $M,
    reduceListToGroup: () => AF,
    reifyState: () => YM,
    renderHTMLElement: () => sF,
    shallowEqual: () => Ha,
    shouldAllowMediaQuery: () => CF,
    shouldNamespaceEventParameter: () => SF,
    stringifyTarget: () => LF,
  });
  function HM() {
    oi.clear();
  }
  function jM() {
    return "i" + BM++;
  }
  function KM(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + zM++;
  }
  function YM({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ci.default)(
      e,
      (a, u) => {
        let { eventTypeId: s } = u;
        return a[s] || (a[s] = {}), (a[s][u.id] = u), a;
      },
      {}
    ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function $M({ store: e, select: t, onChange: r, comparator: n = QM }) {
    let { getState: i, subscribe: o } = e,
      a = o(s),
      u = t(i());
    function s() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, u) || ((u = f), r(u, e));
    }
    return a;
  }
  function Jh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      };
    }
    return {};
  }
  function Ya({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (G, S) =>
          G.concat(
            Ya({
              config: { target: S },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
      getValidDocument: a,
      getQuerySelector: u,
      queryDocument: s,
      getChildElements: f,
      getSiblingElements: _,
      matchSelector: p,
      elementContains: b,
      isSiblingNode: m,
    } = i,
      { target: E } = e;
    if (!E) return [];
    let {
      id: I,
      objectId: x,
      selector: T,
      selectorGuids: P,
      appliesTo: C,
      useEventTarget: N,
    } = Jh(E);
    if (x) return [oi.has(x) ? oi.get(x) : oi.set(x, {}).get(x)];
    if (C === Ko.PAGE) {
      let G = a(I);
      return G ? [G] : [];
    }
    let q = (t?.action?.config?.affectedElements ?? {})[I || T] || {},
      K = !!(q.id || q.selector),
      j,
      $,
      J,
      ne = t && u(Jh(t.target));
    if (
      (K
        ? ((j = q.limitAffectedElements), ($ = ne), (J = u(q)))
        : ($ = J = u({ id: I, selector: T, selectorGuids: P })),
        t && N)
    ) {
      let G = r && (J || N === !0) ? [r] : s(ne);
      if (J) {
        if (N === UM) return s(J).filter((S) => G.some((k) => b(S, k)));
        if (N === $h) return s(J).filter((S) => G.some((k) => b(k, S)));
        if (N === Zh) return s(J).filter((S) => G.some((k) => m(k, S)));
      }
      return G;
    }
    return $ == null || J == null
      ? []
      : Je && n
        ? s(J).filter((G) => n.contains(G))
        : j === $h
          ? s($, J)
          : j === XM
            ? f(s($)).filter(p(J))
            : j === Zh
              ? _(s($)).filter(p(J))
              : s(J);
  }
  function ZM({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case lr:
      case fr:
      case dr:
      case pr:
      case fi:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function tF(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Mt(a)) return Fa(a)(t[a], n);
    switch (n.actionTypeId) {
      case sr:
      case ur:
      case cr:
      case $r:
        return t[n.actionTypeId] || Qa[n.actionTypeId];
      case Zr:
        return JM(t[n.actionTypeId], n.config.filters);
      case Jr:
        return eF(t[n.actionTypeId], n.config.fontVariations);
      case sm:
        return { value: (0, ht.default)(parseFloat(o(e, si)), 1) };
      case lr: {
        let u = o(e, ct),
          s = o(e, lt),
          f,
          _;
        return (
          n.config.widthUnit === At
            ? (f = em.test(u) ? parseFloat(u) : parseFloat(r.width))
            : (f = (0, ht.default)(parseFloat(u), parseFloat(r.width))),
          n.config.heightUnit === At
            ? (_ = em.test(s) ? parseFloat(s) : parseFloat(r.height))
            : (_ = (0, ht.default)(parseFloat(s), parseFloat(r.height))),
          { widthValue: f, heightValue: _ }
        );
      }
      case fr:
      case dr:
      case pr:
        return bF({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case fi:
        return { value: (0, ht.default)(o(e, ui), r.display) };
      case VM:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function oF({ element: e, actionItem: t, elementApi: r }) {
    if (Mt(t.actionTypeId)) return ka(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case sr:
      case ur:
      case cr:
      case $r: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case lr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: u } = t.config,
          { widthValue: s, heightValue: f } = t.config;
        if (!Je) return { widthValue: s, heightValue: f };
        if (a === At) {
          let _ = n(e, ct);
          i(e, ct, ""), (s = o(e, "offsetWidth")), i(e, ct, _);
        }
        if (u === At) {
          let _ = n(e, lt);
          i(e, lt, ""), (f = o(e, "offsetHeight")), i(e, lt, _);
        }
        return { widthValue: s, heightValue: f };
      }
      case fr:
      case dr:
      case pr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: u,
        } = t.config;
        if (u && u.startsWith("--")) {
          let { getStyle: s } = r,
            f = s(e, u),
            _ = (0, nm.normalizeColor)(f);
          return {
            rValue: _.red,
            gValue: _.green,
            bValue: _.blue,
            aValue: _.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Zr:
        return t.config.filters.reduce(rF, {});
      case Jr:
        return t.config.fontVariations.reduce(nF, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function lm(e) {
    if (/^TRANSFORM_/.test(e)) return om;
    if (/^STYLE_/.test(e)) return za;
    if (/^GENERAL_/.test(e)) return ja;
    if (/^PLUGIN_/.test(e)) return am;
  }
  function aF(e, t) {
    return e === za ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function sF(e, t, r, n, i, o, a, u, s) {
    switch (u) {
      case om:
        return dF(e, t, r, i, a);
      case za:
        return _F(e, t, r, i, o, a);
      case ja:
        return IF(e, i, a);
      case am: {
        let { actionTypeId: f } = i;
        if (Mt(f)) return Ga(f)(s, t, i);
      }
    }
  }
  function dF(e, t, r, n, i) {
    let o = fF
      .map((u) => {
        let s = Qa[u],
          {
            xValue: f = s.xValue,
            yValue: _ = s.yValue,
            zValue: p = s.zValue,
            xUnit: b = "",
            yUnit: m = "",
            zUnit: E = "",
          } = t[u] || {};
        switch (u) {
          case sr:
            return `${CM}(${f}${b}, ${_}${m}, ${p}${E})`;
          case ur:
            return `${PM}(${f}${b}, ${_}${m}, ${p}${E})`;
          case cr:
            return `${LM}(${f}${b}) ${NM}(${_}${m}) ${qM}(${p}${E})`;
          case $r:
            return `${DM}(${f}${b}, ${_}${m})`;
          default:
            return "";
        }
      })
      .join(" "),
      { setStyle: a } = i;
    kt(e, Ot, i), a(e, Ot, o), vF(n, r) && a(e, ei, MM);
  }
  function pF(e, t, r, n) {
    let i = (0, ci.default)(t, (a, u, s) => `${a} ${s}(${u}${lF(s, r)})`, ""),
      { setStyle: o } = n;
    kt(e, Kr, n), o(e, Kr, i);
  }
  function gF(e, t, r, n) {
    let i = (0, ci.default)(
      t,
      (a, u, s) => (a.push(`"${s}" ${u}`), a),
      []
    ).join(", "),
      { setStyle: o } = n;
    kt(e, Yr, n), o(e, Yr, i);
  }
  function vF({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === sr && n !== void 0) ||
      (e === ur && n !== void 0) ||
      (e === cr && (t !== void 0 || r !== void 0))
    );
  }
  function EF(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function bF({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ka[t],
      o = n(e, i),
      a = mF.test(o) ? o : r[i],
      u = EF(yF, a).split(Qr);
    return {
      rValue: (0, ht.default)(parseInt(u[0], 10), 255),
      gValue: (0, ht.default)(parseInt(u[1], 10), 255),
      bValue: (0, ht.default)(parseInt(u[2], 10), 255),
      aValue: (0, ht.default)(parseFloat(u[3]), 1),
    };
  }
  function _F(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case lr: {
        let { widthUnit: u = "", heightUnit: s = "" } = n.config,
          { widthValue: f, heightValue: _ } = r;
        f !== void 0 && (u === At && (u = "px"), kt(e, ct, o), a(e, ct, f + u)),
          _ !== void 0 &&
          (s === At && (s = "px"), kt(e, lt, o), a(e, lt, _ + s));
        break;
      }
      case Zr: {
        pF(e, r, n.config, o);
        break;
      }
      case Jr: {
        gF(e, r, n.config, o);
        break;
      }
      case fr:
      case dr:
      case pr: {
        let u = Ka[n.actionTypeId],
          s = Math.round(r.rValue),
          f = Math.round(r.gValue),
          _ = Math.round(r.bValue),
          p = r.aValue;
        kt(e, u, o),
          a(e, u, p >= 1 ? `rgb(${s},${f},${_})` : `rgba(${s},${f},${_},${p})`);
        break;
      }
      default: {
        let { unit: u = "" } = n.config;
        kt(e, i, o), a(e, i, r.value + u);
        break;
      }
    }
  }
  function IF(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case fi: {
        let { value: i } = t.config;
        i === FM && Je ? n(e, ui, Oa) : n(e, ui, i);
        return;
      }
    }
  }
  function kt(e, t, r) {
    if (!Je) return;
    let n = cm[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ar);
    if (!a) {
      o(e, ar, n);
      return;
    }
    let u = a.split(Qr).map(um);
    u.indexOf(n) === -1 && o(e, ar, u.concat(n).join(Qr));
  }
  function fm(e, t, r) {
    if (!Je) return;
    let n = cm[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ar);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        ar,
        a
          .split(Qr)
          .map(um)
          .filter((u) => u !== n)
          .join(Qr)
      );
  }
  function TF({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: u } = a.action,
        { actionListId: s } = u,
        f = i[s];
      f && tm({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        tm({ actionList: i[o], elementApi: t });
      });
  }
  function tm({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        rm({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
      i.forEach((o) => {
        let { continuousActionGroups: a } = o;
        a.forEach((u) => {
          rm({ actionGroup: u, event: t, elementApi: r });
        });
      });
  }
  function rm({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        u;
      Mt(o)
        ? (u = (s) => Xa(o)(s, i))
        : (u = dm({ effect: xF, actionTypeId: o, elementApi: r })),
        Ya({ config: a, event: t, elementApi: r }).forEach(u);
    });
  }
  function wF(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === lr) {
      let { config: a } = t;
      a.widthUnit === At && n(e, ct, ""), a.heightUnit === At && n(e, lt, "");
    }
    i(e, ar) && dm({ effect: fm, actionTypeId: o, elementApi: r })(e);
  }
  function xF(e, t, r) {
    let { setStyle: n } = r;
    fm(e, t, r), n(e, t, ""), t === Ot && n(e, ei, "");
  }
  function pm(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function OF(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      u = 0;
    return (
      r.forEach((s, f) => {
        if (n && f === 0) return;
        let { actionItems: _ } = s,
          p = _[pm(_)],
          { config: b, actionTypeId: m } = p;
        i.id === p.id && (u = a + o);
        let E = lm(m) === ja ? 0 : b.duration;
        a += b.delay + E;
      }),
      a > 0 ? zr(u / a) : 0
    );
  }
  function AF({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (u) => (
        o.push((0, li.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
        u.id === t
      );
    return (
      n && n.some(({ actionItems: u }) => u.some(a)),
      i &&
      i.some((u) => {
        let { continuousActionGroups: s } = u;
        return s.some(({ actionItems: f }) => f.some(a));
      }),
      (0, li.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function SF(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === st.ELEMENT)
    );
  }
  function RF(e, t) {
    return e + WM + t;
  }
  function CF(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function PF(e, t) {
    return Ha(e && e.sort(), t && t.sort());
  }
  function LF(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ba + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ba + r + Ba + n;
  }
  var ht,
    ci,
    ai,
    li,
    nm,
    SM,
    RM,
    CM,
    PM,
    LM,
    NM,
    qM,
    DM,
    MM,
    FM,
    si,
    Kr,
    Yr,
    ct,
    lt,
    im,
    kM,
    GM,
    $h,
    XM,
    Zh,
    UM,
    ui,
    ar,
    At,
    Qr,
    WM,
    Ba,
    om,
    ja,
    za,
    am,
    sr,
    ur,
    cr,
    $r,
    sm,
    Zr,
    Jr,
    lr,
    fr,
    dr,
    pr,
    fi,
    VM,
    um,
    Ka,
    cm,
    oi,
    BM,
    zM,
    QM,
    em,
    JM,
    eF,
    rF,
    nF,
    iF,
    Qa,
    uF,
    cF,
    lF,
    fF,
    hF,
    mF,
    yF,
    dm,
    vm = me(() => {
      "use strict";
      (ht = de(Ch())), (ci = de(Hh())), (ai = de(Kh())), (li = de(Qt()));
      Ue();
      Qh();
      Ra();
      nm = de(La());
      Ua();
      ti();
      ({
        BACKGROUND: SM,
        TRANSFORM: RM,
        TRANSLATE_3D: CM,
        SCALE_3D: PM,
        ROTATE_X: LM,
        ROTATE_Y: NM,
        ROTATE_Z: qM,
        SKEW: DM,
        PRESERVE_3D: MM,
        FLEX: FM,
        OPACITY: si,
        FILTER: Kr,
        FONT_VARIATION_SETTINGS: Yr,
        WIDTH: ct,
        HEIGHT: lt,
        BACKGROUND_COLOR: im,
        BORDER_COLOR: kM,
        COLOR: GM,
        CHILDREN: $h,
        IMMEDIATE_CHILDREN: XM,
        SIBLINGS: Zh,
        PARENT: UM,
        DISPLAY: ui,
        WILL_CHANGE: ar,
        AUTO: At,
        COMMA_DELIMITER: Qr,
        COLON_DELIMITER: WM,
        BAR_DELIMITER: Ba,
        RENDER_TRANSFORM: om,
        RENDER_GENERAL: ja,
        RENDER_STYLE: za,
        RENDER_PLUGIN: am,
      } = Pe),
        ({
          TRANSFORM_MOVE: sr,
          TRANSFORM_SCALE: ur,
          TRANSFORM_ROTATE: cr,
          TRANSFORM_SKEW: $r,
          STYLE_OPACITY: sm,
          STYLE_FILTER: Zr,
          STYLE_FONT_VARIATION: Jr,
          STYLE_SIZE: lr,
          STYLE_BACKGROUND_COLOR: fr,
          STYLE_BORDER: dr,
          STYLE_TEXT_COLOR: pr,
          GENERAL_DISPLAY: fi,
          OBJECT_VALUE: VM,
        } = Xe),
        (um = (e) => e.trim()),
        (Ka = Object.freeze({ [fr]: im, [dr]: kM, [pr]: GM })),
        (cm = Object.freeze({
          [Ot]: RM,
          [im]: SM,
          [si]: si,
          [Kr]: Kr,
          [ct]: ct,
          [lt]: lt,
          [Yr]: Yr,
        })),
        (oi = new Map());
      BM = 1;
      zM = 1;
      QM = (e, t) => e === t;
      (em = /px/),
        (JM = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = uF[n.type]), r),
            e || {}
          )),
        (eF = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
              (r[n.type] = cF[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (rF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (nF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (iF = (e, t, r) => {
          if (Mt(e)) return Ma(e)(r, t);
          switch (e) {
            case Zr: {
              let n = (0, ai.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Jr: {
              let n = (0, ai.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Qa = {
        [sr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [ur]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [cr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [$r]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (uF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (cF = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (lF = (e, t) => {
          let r = (0, ai.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (fF = Object.keys(Qa));
      (hF = "\\(([^)]+)\\)"), (mF = /^rgb/), (yF = RegExp(`rgba?${hF}`));
      dm =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
          (n) => {
            switch (t) {
              case sr:
              case ur:
              case cr:
              case $r:
                e(n, Ot, r);
                break;
              case Zr:
                e(n, Kr, r);
                break;
              case Jr:
                e(n, Yr, r);
                break;
              case sm:
                e(n, si, r);
                break;
              case lr:
                e(n, ct, r), e(n, lt, r);
                break;
              case fr:
              case dr:
              case pr:
                e(n, Ka[t], r);
                break;
              case fi:
                e(n, ui, r);
                break;
            }
          };
    });
  var Gt = c((Me) => {
    "use strict";
    var gr = vn().default;
    Object.defineProperty(Me, "__esModule", { value: !0 });
    Me.IX2VanillaUtils =
      Me.IX2VanillaPlugins =
      Me.IX2ElementsReducer =
      Me.IX2Easings =
      Me.IX2EasingUtils =
      Me.IX2BrowserSupport =
      void 0;
    var NF = gr((ti(), nt(lh)));
    Me.IX2BrowserSupport = NF;
    var qF = gr((Sa(), nt(jr)));
    Me.IX2Easings = qF;
    var DF = gr((Ra(), nt(mh)));
    Me.IX2EasingUtils = DF;
    var MF = gr((_h(), nt(bh)));
    Me.IX2ElementsReducer = MF;
    var FF = gr((Ua(), nt(Sh)));
    Me.IX2VanillaPlugins = FF;
    var kF = gr((vm(), nt(gm)));
    Me.IX2VanillaUtils = kF;
  });
  var pi,
    mt,
    GF,
    XF,
    UF,
    WF,
    VF,
    HF,
    di,
    hm,
    BF,
    jF,
    $a,
    zF,
    KF,
    YF,
    QF,
    mm,
    ym = me(() => {
      "use strict";
      Ue();
      (pi = de(Gt())),
        (mt = de(Qt())),
        ({
          IX2_RAW_DATA_IMPORTED: GF,
          IX2_SESSION_STOPPED: XF,
          IX2_INSTANCE_ADDED: UF,
          IX2_INSTANCE_STARTED: WF,
          IX2_INSTANCE_REMOVED: VF,
          IX2_ANIMATION_FRAME_CHANGED: HF,
        } = we),
        ({
          optimizeFloat: di,
          applyEasing: hm,
          createBezierEasing: BF,
        } = pi.IX2EasingUtils),
        ({ RENDER_GENERAL: jF } = Pe),
        ({
          getItemConfigByKey: $a,
          getRenderType: zF,
          getStyleProp: KF,
        } = pi.IX2VanillaUtils),
        (YF = (e, t) => {
          let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: u,
            actionTypeId: s,
            customEasingFn: f,
            skipMotion: _,
            skipToValue: p,
          } = e,
            { parameters: b } = t.payload,
            m = Math.max(1 - a, 0.01),
            E = b[n];
          E == null && ((m = 1), (E = u));
          let I = Math.max(E, 0) || 0,
            x = di(I - r),
            T = _ ? p : di(r + x * m),
            P = T * 100;
          if (T === r && e.current) return e;
          let C, N, F, q;
          for (let j = 0, { length: $ } = i; j < $; j++) {
            let { keyframe: J, actionItems: ne } = i[j];
            if ((j === 0 && (C = ne[0]), P >= J)) {
              C = ne[0];
              let G = i[j + 1],
                S = G && P !== J;
              (N = S ? G.actionItems[0] : null),
                S && ((F = J / 100), (q = (G.keyframe - J) / 100));
            }
          }
          let K = {};
          if (C && !N)
            for (let j = 0, { length: $ } = o; j < $; j++) {
              let J = o[j];
              K[J] = $a(s, J, C.config);
            }
          else if (C && N && F !== void 0 && q !== void 0) {
            let j = (T - F) / q,
              $ = C.config.easing,
              J = hm($, j, f);
            for (let ne = 0, { length: G } = o; ne < G; ne++) {
              let S = o[ne],
                k = $a(s, S, C.config),
                ee = ($a(s, S, N.config) - k) * J + k;
              K[S] = ee;
            }
          }
          return (0, mt.merge)(e, { position: T, current: K });
        }),
        (QF = (e, t) => {
          let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: u,
            actionItem: s,
            destination: f,
            destinationKeys: _,
            pluginDuration: p,
            instanceDelay: b,
            customEasingFn: m,
            skipMotion: E,
          } = e,
            I = s.config.easing,
            { duration: x, delay: T } = s.config;
          p != null && (x = p),
            (T = b ?? T),
            a === jF ? (x = 0) : (o || E) && (x = T = 0);
          let { now: P } = t.payload;
          if (r && n) {
            let C = P - (i + T);
            if (u) {
              let j = P - i,
                $ = x + T,
                J = di(Math.min(Math.max(0, j / $), 1));
              e = (0, mt.set)(e, "verboseTimeElapsed", $ * J);
            }
            if (C < 0) return e;
            let N = di(Math.min(Math.max(0, C / x), 1)),
              F = hm(I, N, m),
              q = {},
              K = null;
            return (
              _.length &&
              (K = _.reduce((j, $) => {
                let J = f[$],
                  ne = parseFloat(n[$]) || 0,
                  S = (parseFloat(J) - ne) * F + ne;
                return (j[$] = S), j;
              }, {})),
              (q.current = K),
              (q.position = N),
              N === 1 && ((q.active = !1), (q.complete = !0)),
              (0, mt.merge)(e, q)
            );
          }
          return e;
        }),
        (mm = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case GF:
              return t.payload.ixInstances || Object.freeze({});
            case XF:
              return Object.freeze({});
            case UF: {
              let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: f,
                isCarrier: _,
                origin: p,
                destination: b,
                immediate: m,
                verbose: E,
                continuous: I,
                parameterId: x,
                actionGroups: T,
                smoothing: P,
                restingValue: C,
                pluginInstance: N,
                pluginDuration: F,
                instanceDelay: q,
                skipMotion: K,
                skipToValue: j,
              } = t.payload,
                { actionTypeId: $ } = i,
                J = zF($),
                ne = KF(J, $),
                G = Object.keys(b).filter(
                  (k) => b[k] != null && typeof b[k] != "string"
                ),
                { easing: S } = i.config;
              return (0, mt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: b,
                destinationKeys: G,
                immediate: m,
                verbose: E,
                current: null,
                actionItem: i,
                actionTypeId: $,
                eventId: o,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: f,
                renderType: J,
                isCarrier: _,
                styleProp: ne,
                continuous: I,
                parameterId: x,
                actionGroups: T,
                smoothing: P,
                restingValue: C,
                pluginInstance: N,
                pluginDuration: F,
                instanceDelay: q,
                skipMotion: K,
                skipToValue: j,
                customEasingFn:
                  Array.isArray(S) && S.length === 4 ? BF(S) : void 0,
              });
            }
            case WF: {
              let { instanceId: r, time: n } = t.payload;
              return (0, mt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case VF: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let u = i[a];
                u !== r && (n[u] = e[u]);
              }
              return n;
            }
            case HF: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  u = e[a],
                  s = u.continuous ? YF : QF;
                r = (0, mt.set)(r, a, s(u, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var $F,
    ZF,
    JF,
    Em,
    bm = me(() => {
      "use strict";
      Ue();
      ({
        IX2_RAW_DATA_IMPORTED: $F,
        IX2_SESSION_STOPPED: ZF,
        IX2_PARAMETER_CHANGED: JF,
      } = we),
        (Em = (e = {}, t) => {
          switch (t.type) {
            case $F:
              return t.payload.ixParameters || {};
            case ZF:
              return {};
            case JF: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var Tm = {};
  Ge(Tm, { default: () => t1 });
  var _m,
    Im,
    e1,
    t1,
    wm = me(() => {
      "use strict";
      _m = de(zo());
      Df();
      rd();
      od();
      Im = de(Gt());
      ym();
      bm();
      ({ ixElements: e1 } = Im.IX2ElementsReducer),
        (t1 = (0, _m.combineReducers)({
          ixData: qf,
          ixRequest: td,
          ixSession: id,
          ixElements: e1,
          ixInstances: mm,
          ixParameters: Em,
        }));
    });
  var Om = c((sj, xm) => {
    var r1 = Tt(),
      n1 = xe(),
      i1 = gt(),
      o1 = "[object String]";
    function a1(e) {
      return typeof e == "string" || (!n1(e) && i1(e) && r1(e) == o1);
    }
    xm.exports = a1;
  });
  var Sm = c((uj, Am) => {
    var s1 = _a(),
      u1 = s1("length");
    Am.exports = u1;
  });
  var Cm = c((cj, Rm) => {
    var c1 = "\\ud800-\\udfff",
      l1 = "\\u0300-\\u036f",
      f1 = "\\ufe20-\\ufe2f",
      d1 = "\\u20d0-\\u20ff",
      p1 = l1 + f1 + d1,
      g1 = "\\ufe0e\\ufe0f",
      v1 = "\\u200d",
      h1 = RegExp("[" + v1 + c1 + p1 + g1 + "]");
    function m1(e) {
      return h1.test(e);
    }
    Rm.exports = m1;
  });
  var Gm = c((lj, km) => {
    var Lm = "\\ud800-\\udfff",
      y1 = "\\u0300-\\u036f",
      E1 = "\\ufe20-\\ufe2f",
      b1 = "\\u20d0-\\u20ff",
      _1 = y1 + E1 + b1,
      I1 = "\\ufe0e\\ufe0f",
      T1 = "[" + Lm + "]",
      Za = "[" + _1 + "]",
      Ja = "\\ud83c[\\udffb-\\udfff]",
      w1 = "(?:" + Za + "|" + Ja + ")",
      Nm = "[^" + Lm + "]",
      qm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Dm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      x1 = "\\u200d",
      Mm = w1 + "?",
      Fm = "[" + I1 + "]?",
      O1 = "(?:" + x1 + "(?:" + [Nm, qm, Dm].join("|") + ")" + Fm + Mm + ")*",
      A1 = Fm + Mm + O1,
      S1 = "(?:" + [Nm + Za + "?", Za, qm, Dm, T1].join("|") + ")",
      Pm = RegExp(Ja + "(?=" + Ja + ")|" + S1 + A1, "g");
    function R1(e) {
      for (var t = (Pm.lastIndex = 0); Pm.test(e);) ++t;
      return t;
    }
    km.exports = R1;
  });
  var Um = c((fj, Xm) => {
    var C1 = Sm(),
      P1 = Cm(),
      L1 = Gm();
    function N1(e) {
      return P1(e) ? L1(e) : C1(e);
    }
    Xm.exports = N1;
  });
  var Vm = c((dj, Wm) => {
    var q1 = Bn(),
      D1 = jn(),
      M1 = qt(),
      F1 = Om(),
      k1 = Um(),
      G1 = "[object Map]",
      X1 = "[object Set]";
    function U1(e) {
      if (e == null) return 0;
      if (M1(e)) return F1(e) ? k1(e) : e.length;
      var t = D1(e);
      return t == G1 || t == X1 ? e.size : q1(e).length;
    }
    Wm.exports = U1;
  });
  var Bm = c((pj, Hm) => {
    var W1 = "Expected a function";
    function V1(e) {
      if (typeof e != "function") throw new TypeError(W1);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Hm.exports = V1;
  });
  var es = c((gj, jm) => {
    var H1 = wt(),
      B1 = (function () {
        try {
          var e = H1(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch { }
      })();
    jm.exports = B1;
  });
  var ts = c((vj, Km) => {
    var zm = es();
    function j1(e, t, r) {
      t == "__proto__" && zm
        ? zm(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Km.exports = j1;
  });
  var Qm = c((hj, Ym) => {
    var z1 = ts(),
      K1 = Dn(),
      Y1 = Object.prototype,
      Q1 = Y1.hasOwnProperty;
    function $1(e, t, r) {
      var n = e[t];
      (!(Q1.call(e, t) && K1(n, r)) || (r === void 0 && !(t in e))) &&
        z1(e, t, r);
    }
    Ym.exports = $1;
  });
  var Jm = c((mj, Zm) => {
    var Z1 = Qm(),
      J1 = Vr(),
      e2 = Un(),
      $m = ut(),
      t2 = ir();
    function r2(e, t, r, n) {
      if (!$m(e)) return e;
      t = J1(t, e);
      for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o;) {
        var s = t2(t[i]),
          f = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (i != a) {
          var _ = u[s];
          (f = n ? n(_, s, u) : void 0),
            f === void 0 && (f = $m(_) ? _ : e2(t[i + 1]) ? [] : {});
        }
        Z1(u, s, f), (u = u[s]);
      }
      return e;
    }
    Zm.exports = r2;
  });
  var ty = c((yj, ey) => {
    var n2 = Yn(),
      i2 = Jm(),
      o2 = Vr();
    function a2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i;) {
        var a = t[n],
          u = n2(e, a);
        r(u, a) && i2(o, o2(a, e), u);
      }
      return o;
    }
    ey.exports = a2;
  });
  var ny = c((Ej, ry) => {
    var s2 = Gn(),
      u2 = qo(),
      c2 = aa(),
      l2 = oa(),
      f2 = Object.getOwnPropertySymbols,
      d2 = f2
        ? function (e) {
          for (var t = []; e;) s2(t, c2(e)), (e = u2(e));
          return t;
        }
        : l2;
    ry.exports = d2;
  });
  var oy = c((bj, iy) => {
    function p2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    iy.exports = p2;
  });
  var sy = c((_j, ay) => {
    var g2 = ut(),
      v2 = Hn(),
      h2 = oy(),
      m2 = Object.prototype,
      y2 = m2.hasOwnProperty;
    function E2(e) {
      if (!g2(e)) return h2(e);
      var t = v2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !y2.call(e, n))) || r.push(n);
      return r;
    }
    ay.exports = E2;
  });
  var cy = c((Ij, uy) => {
    var b2 = ua(),
      _2 = sy(),
      I2 = qt();
    function T2(e) {
      return I2(e) ? b2(e, !0) : _2(e);
    }
    uy.exports = T2;
  });
  var fy = c((Tj, ly) => {
    var w2 = ia(),
      x2 = ny(),
      O2 = cy();
    function A2(e) {
      return w2(e, O2, x2);
    }
    ly.exports = A2;
  });
  var py = c((wj, dy) => {
    var S2 = ba(),
      R2 = xt(),
      C2 = ty(),
      P2 = fy();
    function L2(e, t) {
      if (e == null) return {};
      var r = S2(P2(e), function (n) {
        return [n];
      });
      return (
        (t = R2(t)),
        C2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    dy.exports = L2;
  });
  var vy = c((xj, gy) => {
    var N2 = xt(),
      q2 = Bm(),
      D2 = py();
    function M2(e, t) {
      return D2(e, q2(N2(t)));
    }
    gy.exports = M2;
  });
  var my = c((Oj, hy) => {
    var F2 = Bn(),
      k2 = jn(),
      G2 = Fr(),
      X2 = xe(),
      U2 = qt(),
      W2 = Xn(),
      V2 = Hn(),
      H2 = Vn(),
      B2 = "[object Map]",
      j2 = "[object Set]",
      z2 = Object.prototype,
      K2 = z2.hasOwnProperty;
    function Y2(e) {
      if (e == null) return !0;
      if (
        U2(e) &&
        (X2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          W2(e) ||
          H2(e) ||
          G2(e))
      )
        return !e.length;
      var t = k2(e);
      if (t == B2 || t == j2) return !e.size;
      if (V2(e)) return !F2(e).length;
      for (var r in e) if (K2.call(e, r)) return !1;
      return !0;
    }
    hy.exports = Y2;
  });
  var Ey = c((Aj, yy) => {
    var Q2 = ts(),
      $2 = Wa(),
      Z2 = xt();
    function J2(e, t) {
      var r = {};
      return (
        (t = Z2(t, 3)),
        $2(e, function (n, i, o) {
          Q2(r, i, t(n, i, o));
        }),
        r
      );
    }
    yy.exports = J2;
  });
  var _y = c((Sj, by) => {
    function ek(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    by.exports = ek;
  });
  var Ty = c((Rj, Iy) => {
    var tk = $n();
    function rk(e) {
      return typeof e == "function" ? e : tk;
    }
    Iy.exports = rk;
  });
  var xy = c((Cj, wy) => {
    var nk = _y(),
      ik = Va(),
      ok = Ty(),
      ak = xe();
    function sk(e, t) {
      var r = ak(e) ? nk : ik;
      return r(e, ok(t));
    }
    wy.exports = sk;
  });
  var Ay = c((Pj, Oy) => {
    var uk = $e(),
      ck = function () {
        return uk.Date.now();
      };
    Oy.exports = ck;
  });
  var Cy = c((Lj, Ry) => {
    var lk = ut(),
      rs = Ay(),
      Sy = Zn(),
      fk = "Expected a function",
      dk = Math.max,
      pk = Math.min;
    function gk(e, t, r) {
      var n,
        i,
        o,
        a,
        u,
        s,
        f = 0,
        _ = !1,
        p = !1,
        b = !0;
      if (typeof e != "function") throw new TypeError(fk);
      (t = Sy(t) || 0),
        lk(r) &&
        ((_ = !!r.leading),
          (p = "maxWait" in r),
          (o = p ? dk(Sy(r.maxWait) || 0, t) : o),
          (b = "trailing" in r ? !!r.trailing : b));
      function m(q) {
        var K = n,
          j = i;
        return (n = i = void 0), (f = q), (a = e.apply(j, K)), a;
      }
      function E(q) {
        return (f = q), (u = setTimeout(T, t)), _ ? m(q) : a;
      }
      function I(q) {
        var K = q - s,
          j = q - f,
          $ = t - K;
        return p ? pk($, o - j) : $;
      }
      function x(q) {
        var K = q - s,
          j = q - f;
        return s === void 0 || K >= t || K < 0 || (p && j >= o);
      }
      function T() {
        var q = rs();
        if (x(q)) return P(q);
        u = setTimeout(T, I(q));
      }
      function P(q) {
        return (u = void 0), b && n ? m(q) : ((n = i = void 0), a);
      }
      function C() {
        u !== void 0 && clearTimeout(u), (f = 0), (n = s = i = u = void 0);
      }
      function N() {
        return u === void 0 ? a : P(rs());
      }
      function F() {
        var q = rs(),
          K = x(q);
        if (((n = arguments), (i = this), (s = q), K)) {
          if (u === void 0) return E(s);
          if (p) return clearTimeout(u), (u = setTimeout(T, t)), m(s);
        }
        return u === void 0 && (u = setTimeout(T, t)), a;
      }
      return (F.cancel = C), (F.flush = N), F;
    }
    Ry.exports = gk;
  });
  var Ly = c((Nj, Py) => {
    var vk = Cy(),
      hk = ut(),
      mk = "Expected a function";
    function yk(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(mk);
      return (
        hk(r) &&
        ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        vk(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Py.exports = yk;
  });
  var qy = {};
  Ge(qy, {
    actionListPlaybackChanged: () => hr,
    animationFrameChanged: () => vi,
    clearRequested: () => Vk,
    elementStateChanged: () => ls,
    eventListenerAdded: () => gi,
    eventStateChanged: () => ss,
    instanceAdded: () => us,
    instanceRemoved: () => cs,
    instanceStarted: () => hi,
    mediaQueriesDefined: () => ds,
    parameterChanged: () => vr,
    playbackRequested: () => Uk,
    previewRequested: () => Xk,
    rawDataImported: () => ns,
    sessionInitialized: () => is,
    sessionStarted: () => os,
    sessionStopped: () => as,
    stopRequested: () => Wk,
    testFrameRendered: () => Hk,
    viewportWidthChanged: () => fs,
  });
  var Ny,
    Ek,
    bk,
    _k,
    Ik,
    Tk,
    wk,
    xk,
    Ok,
    Ak,
    Sk,
    Rk,
    Ck,
    Pk,
    Lk,
    Nk,
    qk,
    Dk,
    Mk,
    Fk,
    kk,
    Gk,
    ns,
    is,
    os,
    as,
    Xk,
    Uk,
    Wk,
    Vk,
    gi,
    Hk,
    ss,
    vi,
    vr,
    us,
    hi,
    cs,
    ls,
    hr,
    fs,
    ds,
    mi = me(() => {
      "use strict";
      Ue();
      (Ny = de(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: Ek,
          IX2_SESSION_INITIALIZED: bk,
          IX2_SESSION_STARTED: _k,
          IX2_SESSION_STOPPED: Ik,
          IX2_PREVIEW_REQUESTED: Tk,
          IX2_PLAYBACK_REQUESTED: wk,
          IX2_STOP_REQUESTED: xk,
          IX2_CLEAR_REQUESTED: Ok,
          IX2_EVENT_LISTENER_ADDED: Ak,
          IX2_TEST_FRAME_RENDERED: Sk,
          IX2_EVENT_STATE_CHANGED: Rk,
          IX2_ANIMATION_FRAME_CHANGED: Ck,
          IX2_PARAMETER_CHANGED: Pk,
          IX2_INSTANCE_ADDED: Lk,
          IX2_INSTANCE_STARTED: Nk,
          IX2_INSTANCE_REMOVED: qk,
          IX2_ELEMENT_STATE_CHANGED: Dk,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Mk,
          IX2_VIEWPORT_WIDTH_CHANGED: Fk,
          IX2_MEDIA_QUERIES_DEFINED: kk,
        } = we),
        ({ reifyState: Gk } = Ny.IX2VanillaUtils),
        (ns = (e) => ({ type: Ek, payload: { ...Gk(e) } })),
        (is = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: bk,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (os = () => ({ type: _k })),
        (as = () => ({ type: Ik })),
        (Xk = ({ rawData: e, defer: t }) => ({
          type: Tk,
          payload: { defer: t, rawData: e },
        })),
        (Uk = ({
          actionTypeId: e = Xe.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: u,
          rawData: s,
        }) => ({
          type: wk,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: u,
            rawData: s,
          },
        })),
        (Wk = (e) => ({ type: xk, payload: { actionListId: e } })),
        (Vk = () => ({ type: Ok })),
        (gi = (e, t) => ({
          type: Ak,
          payload: { target: e, listenerParams: t },
        })),
        (Hk = (e = 1) => ({ type: Sk, payload: { step: e } })),
        (ss = (e, t) => ({ type: Rk, payload: { stateKey: e, newState: t } })),
        (vi = (e, t) => ({ type: Ck, payload: { now: e, parameters: t } })),
        (vr = (e, t) => ({ type: Pk, payload: { key: e, value: t } })),
        (us = (e) => ({ type: Lk, payload: { ...e } })),
        (hi = (e, t) => ({ type: Nk, payload: { instanceId: e, time: t } })),
        (cs = (e) => ({ type: qk, payload: { instanceId: e } })),
        (ls = (e, t, r, n) => ({
          type: Dk,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (hr = ({ actionListId: e, isPlaying: t }) => ({
          type: Mk,
          payload: { actionListId: e, isPlaying: t },
        })),
        (fs = ({ width: e, mediaQueries: t }) => ({
          type: Fk,
          payload: { width: e, mediaQueries: t },
        })),
        (ds = () => ({ type: kk }));
    });
  var Fe = {};
  Ge(Fe, {
    elementContains: () => vs,
    getChildElements: () => eG,
    getClosestElement: () => en,
    getProperty: () => Yk,
    getQuerySelector: () => gs,
    getRefType: () => hs,
    getSiblingElements: () => tG,
    getStyle: () => Kk,
    getValidDocument: () => $k,
    isSiblingNode: () => Jk,
    matchSelector: () => Qk,
    queryDocument: () => Zk,
    setStyle: () => zk,
  });
  function zk(e, t, r) {
    e.style[t] = r;
  }
  function Kk(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function Yk(e, t) {
    return e[t];
  }
  function Qk(e) {
    return (t) => t[ps](e);
  }
  function gs({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Dy) !== -1) {
        let n = e.split(Dy),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Fy)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function $k(e) {
    return e == null || e === document.documentElement.getAttribute(Fy)
      ? document
      : null;
  }
  function Zk(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function vs(e, t) {
    return e.contains(t);
  }
  function Jk(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function eG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function tG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null;)
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function hs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? Bk
        : jk
      : null;
  }
  var My,
    ps,
    Dy,
    Bk,
    jk,
    Fy,
    en,
    ky = me(() => {
      "use strict";
      My = de(Gt());
      Ue();
      ({ ELEMENT_MATCHES: ps } = My.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Dy,
          HTML_ELEMENT: Bk,
          PLAIN_OBJECT: jk,
          WF_PAGE: Fy,
        } = Pe);
      en = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[ps] && r[ps](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    });
  var ms = c((Mj, Xy) => {
    var rG = ut(),
      Gy = Object.create,
      nG = (function () {
        function e() { }
        return function (t) {
          if (!rG(t)) return {};
          if (Gy) return Gy(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Xy.exports = nG;
  });
  var yi = c((Fj, Uy) => {
    function iG() { }
    Uy.exports = iG;
  });
  var bi = c((kj, Wy) => {
    var oG = ms(),
      aG = yi();
    function Ei(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ei.prototype = oG(aG.prototype);
    Ei.prototype.constructor = Ei;
    Wy.exports = Ei;
  });
  var jy = c((Gj, By) => {
    var Vy = zt(),
      sG = Fr(),
      uG = xe(),
      Hy = Vy ? Vy.isConcatSpreadable : void 0;
    function cG(e) {
      return uG(e) || sG(e) || !!(Hy && e && e[Hy]);
    }
    By.exports = cG;
  });
  var Yy = c((Xj, Ky) => {
    var lG = Gn(),
      fG = jy();
    function zy(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = fG), i || (i = []); ++o < a;) {
        var u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? zy(u, t - 1, r, n, i)
            : lG(i, u)
          : n || (i[i.length] = u);
      }
      return i;
    }
    Ky.exports = zy;
  });
  var $y = c((Uj, Qy) => {
    var dG = Yy();
    function pG(e) {
      var t = e == null ? 0 : e.length;
      return t ? dG(e, 1) : [];
    }
    Qy.exports = pG;
  });
  var Jy = c((Wj, Zy) => {
    function gG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Zy.exports = gG;
  });
  var rE = c((Vj, tE) => {
    var vG = Jy(),
      eE = Math.max;
    function hG(e, t, r) {
      return (
        (t = eE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = eE(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t;) u[i] = n[i];
          return (u[t] = r(a)), vG(e, this, u);
        }
      );
    }
    tE.exports = hG;
  });
  var iE = c((Hj, nE) => {
    function mG(e) {
      return function () {
        return e;
      };
    }
    nE.exports = mG;
  });
  var sE = c((Bj, aE) => {
    var yG = iE(),
      oE = es(),
      EG = $n(),
      bG = oE
        ? function (e, t) {
          return oE(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: yG(t),
            writable: !0,
          });
        }
        : EG;
    aE.exports = bG;
  });
  var cE = c((jj, uE) => {
    var _G = 800,
      IG = 16,
      TG = Date.now;
    function wG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = TG(),
          i = IG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= _G) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    uE.exports = wG;
  });
  var fE = c((zj, lE) => {
    var xG = sE(),
      OG = cE(),
      AG = OG(xG);
    lE.exports = AG;
  });
  var pE = c((Kj, dE) => {
    var SG = $y(),
      RG = rE(),
      CG = fE();
    function PG(e) {
      return CG(RG(e, void 0, SG), e + "");
    }
    dE.exports = PG;
  });
  var hE = c((Yj, vE) => {
    var gE = ca(),
      LG = gE && new gE();
    vE.exports = LG;
  });
  var yE = c((Qj, mE) => {
    function NG() { }
    mE.exports = NG;
  });
  var ys = c(($j, bE) => {
    var EE = hE(),
      qG = yE(),
      DG = EE
        ? function (e) {
          return EE.get(e);
        }
        : qG;
    bE.exports = DG;
  });
  var IE = c((Zj, _E) => {
    var MG = {};
    _E.exports = MG;
  });
  var Es = c((Jj, wE) => {
    var TE = IE(),
      FG = Object.prototype,
      kG = FG.hasOwnProperty;
    function GG(e) {
      for (
        var t = e.name + "", r = TE[t], n = kG.call(TE, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    wE.exports = GG;
  });
  var Ii = c((ez, xE) => {
    var XG = ms(),
      UG = yi(),
      WG = 4294967295;
    function _i(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = WG),
        (this.__views__ = []);
    }
    _i.prototype = XG(UG.prototype);
    _i.prototype.constructor = _i;
    xE.exports = _i;
  });
  var AE = c((tz, OE) => {
    function VG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
      return t;
    }
    OE.exports = VG;
  });
  var RE = c((rz, SE) => {
    var HG = Ii(),
      BG = bi(),
      jG = AE();
    function zG(e) {
      if (e instanceof HG) return e.clone();
      var t = new BG(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = jG(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    SE.exports = zG;
  });
  var LE = c((nz, PE) => {
    var KG = Ii(),
      CE = bi(),
      YG = yi(),
      QG = xe(),
      $G = gt(),
      ZG = RE(),
      JG = Object.prototype,
      eX = JG.hasOwnProperty;
    function Ti(e) {
      if ($G(e) && !QG(e) && !(e instanceof KG)) {
        if (e instanceof CE) return e;
        if (eX.call(e, "__wrapped__")) return ZG(e);
      }
      return new CE(e);
    }
    Ti.prototype = YG.prototype;
    Ti.prototype.constructor = Ti;
    PE.exports = Ti;
  });
  var qE = c((iz, NE) => {
    var tX = Ii(),
      rX = ys(),
      nX = Es(),
      iX = LE();
    function oX(e) {
      var t = nX(e),
        r = iX[t];
      if (typeof r != "function" || !(t in tX.prototype)) return !1;
      if (e === r) return !0;
      var n = rX(r);
      return !!n && e === n[0];
    }
    NE.exports = oX;
  });
  var kE = c((oz, FE) => {
    var DE = bi(),
      aX = pE(),
      sX = ys(),
      bs = Es(),
      uX = xe(),
      ME = qE(),
      cX = "Expected a function",
      lX = 8,
      fX = 32,
      dX = 128,
      pX = 256;
    function gX(e) {
      return aX(function (t) {
        var r = t.length,
          n = r,
          i = DE.prototype.thru;
        for (e && t.reverse(); n--;) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(cX);
          if (i && !a && bs(o) == "wrapper") var a = new DE([], !0);
        }
        for (n = a ? n : r; ++n < r;) {
          o = t[n];
          var u = bs(o),
            s = u == "wrapper" ? sX(o) : void 0;
          s &&
            ME(s[0]) &&
            s[1] == (dX | lX | fX | pX) &&
            !s[4].length &&
            s[9] == 1
            ? (a = a[bs(s[0])].apply(a, s[3]))
            : (a = o.length == 1 && ME(o) ? a[u]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            _ = f[0];
          if (a && f.length == 1 && uX(_)) return a.plant(_).value();
          for (var p = 0, b = r ? t[p].apply(this, f) : _; ++p < r;)
            b = t[p].call(this, b);
          return b;
        };
      });
    }
    FE.exports = gX;
  });
  var XE = c((az, GE) => {
    var vX = kE(),
      hX = vX();
    GE.exports = hX;
  });
  var WE = c((sz, UE) => {
    function mX(e, t, r) {
      return (
        e === e &&
        (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    UE.exports = mX;
  });
  var HE = c((uz, VE) => {
    var yX = WE(),
      _s = Zn();
    function EX(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = _s(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = _s(t)), (t = t === t ? t : 0)),
        yX(_s(e), t, r)
      );
    }
    VE.exports = EX;
  });
  var JE,
    eb,
    tb,
    rb,
    bX,
    _X,
    IX,
    TX,
    wX,
    xX,
    OX,
    AX,
    SX,
    RX,
    CX,
    PX,
    LX,
    NX,
    qX,
    nb,
    ib,
    DX,
    MX,
    FX,
    ob,
    kX,
    GX,
    ab,
    XX,
    Is,
    sb,
    BE,
    jE,
    ub,
    rn,
    UX,
    ft,
    cb,
    WX,
    Ve,
    et,
    nn,
    lb,
    Ts,
    zE,
    ws,
    VX,
    tn,
    HX,
    BX,
    jX,
    fb,
    KE,
    zX,
    YE,
    KX,
    YX,
    QX,
    QE,
    wi,
    xi,
    $E,
    ZE,
    db,
    pb = me(() => {
      "use strict";
      (JE = de(XE())), (eb = de(Qn())), (tb = de(HE()));
      Ue();
      xs();
      mi();
      (rb = de(Gt())),
        ({
          MOUSE_CLICK: bX,
          MOUSE_SECOND_CLICK: _X,
          MOUSE_DOWN: IX,
          MOUSE_UP: TX,
          MOUSE_OVER: wX,
          MOUSE_OUT: xX,
          DROPDOWN_CLOSE: OX,
          DROPDOWN_OPEN: AX,
          SLIDER_ACTIVE: SX,
          SLIDER_INACTIVE: RX,
          TAB_ACTIVE: CX,
          TAB_INACTIVE: PX,
          NAVBAR_CLOSE: LX,
          NAVBAR_OPEN: NX,
          MOUSE_MOVE: qX,
          PAGE_SCROLL_DOWN: nb,
          SCROLL_INTO_VIEW: ib,
          SCROLL_OUT_OF_VIEW: DX,
          PAGE_SCROLL_UP: MX,
          SCROLLING_IN_VIEW: FX,
          PAGE_FINISH: ob,
          ECOMMERCE_CART_CLOSE: kX,
          ECOMMERCE_CART_OPEN: GX,
          PAGE_START: ab,
          PAGE_SCROLL: XX,
        } = Ze),
        (Is = "COMPONENT_ACTIVE"),
        (sb = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: BE } = Pe),
        ({ getNamespacedParameterId: jE } = rb.IX2VanillaUtils),
        (ub = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (rn = ub(({ element: e, nativeEvent: t }) => e === t.target)),
        (UX = ub(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ft = (0, JE.default)([rn, UX])),
        (cb = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !VX[i.eventTypeId]) return i;
          }
          return null;
        }),
        (WX = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!cb(e, n);
        }),
        (Ve = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: u, autoStopEventId: s } = o.config,
            f = cb(e, s);
          return (
            f &&
            mr({
              store: e,
              eventId: s,
              eventTarget: r,
              eventStateKey: s + BE + n.split(BE)[1],
              actionListId: (0, eb.default)(f, "action.config.actionListId"),
            }),
            mr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            on({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (nn = { handler: et(ft, Ve) }),
        (lb = { ...nn, types: [Is, sb].join(" ") }),
        (Ts = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (zE = "mouseover mouseout"),
        (ws = { types: Ts }),
        (VX = { PAGE_START: ab, PAGE_FINISH: ob }),
        (tn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, tb.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (HX = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (BX = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (jX = (e) => {
          let {
            element: t,
            event: { config: r },
          } = e,
            { clientWidth: n, clientHeight: i } = tn(),
            o = r.scrollOffsetValue,
            s = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return HX(t.getBoundingClientRect(), {
            left: 0,
            top: s,
            right: n,
            bottom: i - s,
          });
        }),
        (fb = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [Is, sb].indexOf(n) !== -1 ? n === Is : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (KE = (e) => (t, r) => {
          let n = { elementHovered: BX(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (zX = (e) => (t, r) => {
          let n = { ...r, elementVisible: jX(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (YE =
          (e) =>
            (t, r = {}) => {
              let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = tn(),
                {
                  event: { config: a, eventTypeId: u },
                } = t,
                { scrollOffsetValue: s, scrollOffsetUnit: f } = a,
                _ = f === "PX",
                p = i - o,
                b = Number((n / p).toFixed(2));
              if (r && r.percentTop === b) return r;
              let m = (_ ? s : (o * (s || 0)) / 100) / p,
                E,
                I,
                x = 0;
              r &&
                ((E = b > r.percentTop),
                  (I = r.scrollingDown !== E),
                  (x = I ? b : r.anchorTop));
              let T = u === nb ? b >= x + m : b <= x - m,
                P = {
                  ...r,
                  percentTop: b,
                  inBounds: T,
                  anchorTop: x,
                  scrollingDown: E,
                };
              return (r && T && (I || P.inBounds !== r.inBounds) && e(t, P)) || P;
            }),
        (KX = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (YX = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (QX = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (QE =
          (e) =>
            (t, r = { clickCount: 0 }) => {
              let n = { clickCount: (r.clickCount % 2) + 1 };
              return (n.clickCount !== r.clickCount && e(t, n)) || n;
            }),
        (wi = (e = !0) => ({
          ...lb,
          handler: et(
            e ? ft : rn,
            fb((t, r) => (r.isActive ? nn.handler(t, r) : r))
          ),
        })),
        (xi = (e = !0) => ({
          ...lb,
          handler: et(
            e ? ft : rn,
            fb((t, r) => (r.isActive ? r : nn.handler(t, r)))
          ),
        })),
        ($E = {
          ...ws,
          handler: zX((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === ib) === r
                ? (Ve(e), { ...t, triggered: !0 })
                : t;
          }),
        }),
        (ZE = 0.05),
        (db = {
          [SX]: wi(),
          [RX]: xi(),
          [AX]: wi(),
          [OX]: xi(),
          [NX]: wi(!1),
          [LX]: xi(!1),
          [CX]: wi(),
          [PX]: xi(),
          [GX]: { types: "ecommerce-cart-open", handler: et(ft, Ve) },
          [kX]: { types: "ecommerce-cart-close", handler: et(ft, Ve) },
          [bX]: {
            types: "click",
            handler: et(
              ft,
              QE((e, { clickCount: t }) => {
                WX(e) ? t === 1 && Ve(e) : Ve(e);
              })
            ),
          },
          [_X]: {
            types: "click",
            handler: et(
              ft,
              QE((e, { clickCount: t }) => {
                t === 2 && Ve(e);
              })
            ),
          },
          [IX]: { ...nn, types: "mousedown" },
          [TX]: { ...nn, types: "mouseup" },
          [wX]: {
            types: zE,
            handler: et(
              ft,
              KE((e, t) => {
                t.elementHovered && Ve(e);
              })
            ),
          },
          [xX]: {
            types: zE,
            handler: et(
              ft,
              KE((e, t) => {
                t.elementHovered || Ve(e);
              })
            ),
          },
          [qX]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                basedOn: a,
                selectedAxis: u,
                continuousParameterGroupId: s,
                reverse: f,
                restingState: _ = 0,
              } = r,
                {
                  clientX: p = o.clientX,
                  clientY: b = o.clientY,
                  pageX: m = o.pageX,
                  pageY: E = o.pageY,
                } = n,
                I = u === "X_AXIS",
                x = n.type === "mouseout",
                T = _ / 100,
                P = s,
                C = !1;
              switch (a) {
                case st.VIEWPORT: {
                  T = I
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(b, window.innerHeight) / window.innerHeight;
                  break;
                }
                case st.PAGE: {
                  let {
                    scrollLeft: N,
                    scrollTop: F,
                    scrollWidth: q,
                    scrollHeight: K,
                  } = tn();
                  T = I ? Math.min(N + m, q) / q : Math.min(F + E, K) / K;
                  break;
                }
                case st.ELEMENT:
                default: {
                  P = jE(i, s);
                  let N = n.type.indexOf("mouse") === 0;
                  if (N && ft({ element: t, nativeEvent: n }) !== !0) break;
                  let F = t.getBoundingClientRect(),
                    { left: q, top: K, width: j, height: $ } = F;
                  if (!N && !KX({ left: p, top: b }, F)) break;
                  (C = !0), (T = I ? (p - q) / j : (b - K) / $);
                  break;
                }
              }
              return (
                x && (T > 1 - ZE || T < ZE) && (T = Math.round(T)),
                (a !== st.ELEMENT || C || C !== o.elementHovered) &&
                ((T = f ? 1 - T : T), e.dispatch(vr(P, T))),
                {
                  elementHovered: C,
                  clientX: p,
                  clientY: b,
                  pageX: m,
                  pageY: E,
                }
              );
            },
          },
          [XX]: {
            types: Ts,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = tn(),
                u = i / (o - a);
              (u = n ? 1 - u : u), e.dispatch(vr(r, u));
            },
          },
          [FX]: {
            types: Ts,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                scrollLeft: o,
                scrollTop: a,
                scrollWidth: u,
                scrollHeight: s,
                clientHeight: f,
              } = tn(),
                {
                  basedOn: _,
                  selectedAxis: p,
                  continuousParameterGroupId: b,
                  startsEntering: m,
                  startsExiting: E,
                  addEndOffset: I,
                  addStartOffset: x,
                  addOffsetValue: T = 0,
                  endOffsetValue: P = 0,
                } = r,
                C = p === "X_AXIS";
              if (_ === st.VIEWPORT) {
                let N = C ? o / u : a / s;
                return (
                  N !== i.scrollPercent && t.dispatch(vr(b, N)),
                  { scrollPercent: N }
                );
              } else {
                let N = jE(n, b),
                  F = e.getBoundingClientRect(),
                  q = (x ? T : 0) / 100,
                  K = (I ? P : 0) / 100;
                (q = m ? q : 1 - q), (K = E ? K : 1 - K);
                let j = F.top + Math.min(F.height * q, f),
                  J = F.top + F.height * K - j,
                  ne = Math.min(f + J, s),
                  S = Math.min(Math.max(0, f - j), ne) / ne;
                return (
                  S !== i.scrollPercent && t.dispatch(vr(N, S)),
                  { scrollPercent: S }
                );
              }
            },
          },
          [ib]: $E,
          [DX]: $E,
          [nb]: {
            ...ws,
            handler: YE((e, t) => {
              t.scrollingDown && Ve(e);
            }),
          },
          [MX]: {
            ...ws,
            handler: YE((e, t) => {
              t.scrollingDown || Ve(e);
            }),
          },
          [ob]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(rn, YX(Ve)),
          },
          [ab]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(rn, QX(Ve)),
          },
        });
    });
  var Cb = {};
  Ge(Cb, {
    observeRequests: () => hU,
    startActionGroup: () => on,
    startEngine: () => Pi,
    stopActionGroup: () => mr,
    stopAllActionGroups: () => Ab,
    stopEngine: () => Li,
  });
  function hU(e) {
    Xt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: EU }),
      Xt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: bU }),
      Xt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: _U }),
      Xt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: IU });
  }
  function mU(e) {
    Xt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Li(e),
          Tb({ store: e, elementApi: Fe }),
          Pi({ store: e, allowEvents: !0 }),
          wb();
      },
    });
  }
  function yU(e, t) {
    let r = Xt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function EU({ rawData: e, defer: t }, r) {
    let n = () => {
      Pi({ store: r, rawData: e, allowEvents: !0 }), wb();
    };
    t ? setTimeout(n, 0) : n();
  }
  function wb() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function bU(e, t) {
    let {
      actionTypeId: r,
      actionListId: n,
      actionItemId: i,
      eventId: o,
      allowEvents: a,
      immediate: u,
      testManual: s,
      verbose: f = !0,
    } = e,
      { rawData: _ } = e;
    if (n && i && _ && u) {
      let p = _.actionLists[n];
      p && (_ = oU({ actionList: p, actionItemId: i, rawData: _ }));
    }
    if (
      (Pi({ store: t, rawData: _, allowEvents: a, testManual: s }),
        (n && r === Xe.GENERAL_START_ACTION) || Os(r))
    ) {
      mr({ store: t, actionListId: n }),
        Ob({ store: t, actionListId: n, eventId: o });
      let p = on({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: u,
        verbose: f,
      });
      f && p && t.dispatch(hr({ actionListId: n, isPlaying: !u }));
    }
  }
  function _U({ actionListId: e }, t) {
    e ? mr({ store: t, actionListId: e }) : Ab({ store: t }), Li(t);
  }
  function IU(e, t) {
    Li(t), Tb({ store: t, elementApi: Fe });
  }
  function Pi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(ns(t)),
      i.active ||
      (e.dispatch(
        is({
          hasBoundaryNodes: !!document.querySelector(Ai),
          reducedMotion:
            document.body.hasAttribute("data-wf-ix-vacation") &&
            window.matchMedia("(prefers-reduced-motion)").matches,
        })
      ),
        r &&
        (SU(e), TU(), e.getState().ixSession.hasDefinedMediaQueries && mU(e)),
        e.dispatch(os()),
        wU(e, n));
  }
  function TU() {
    let { documentElement: e } = document;
    e.className.indexOf(gb) === -1 && (e.className += ` ${gb}`);
  }
  function wU(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(vi(n, o)), t ? yU(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Li(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(xU), cU(), e.dispatch(as());
    }
  }
  function xU({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function OU({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: u,
    restingValue: s,
  }) {
    let { ixData: f, ixSession: _ } = e.getState(),
      { events: p } = f,
      b = p[n],
      { eventTypeId: m } = b,
      E = {},
      I = {},
      x = [],
      { continuousActionGroups: T } = a,
      { id: P } = a;
    aU(m, i) && (P = sU(t, P));
    let C = _.hasBoundaryNodes && r ? en(r, Ai) : null;
    T.forEach((N) => {
      let { keyframe: F, actionItems: q } = N;
      q.forEach((K) => {
        let { actionTypeId: j } = K,
          { target: $ } = K.config;
        if (!$) return;
        let J = $.boundaryMode ? C : null,
          ne = lU($) + As + j;
        if (((I[ne] = AU(I[ne], F, K)), !E[ne])) {
          E[ne] = !0;
          let { config: G } = K;
          Si({
            config: G,
            event: b,
            eventTarget: r,
            elementRoot: J,
            elementApi: Fe,
          }).forEach((S) => {
            x.push({ element: S, key: ne });
          });
        }
      });
    }),
      x.forEach(({ element: N, key: F }) => {
        let q = I[F],
          K = (0, yt.default)(q, "[0].actionItems[0]", {}),
          { actionTypeId: j } = K,
          $ = Ci(j) ? Rs(j)(N, K) : null,
          J = Ss({ element: N, actionItem: K, elementApi: Fe }, $);
        Cs({
          store: e,
          element: N,
          eventId: n,
          actionListId: o,
          actionItem: K,
          destination: J,
          continuous: !0,
          parameterId: P,
          actionGroups: q,
          smoothing: u,
          restingValue: s,
          pluginInstance: $,
        });
      });
  }
  function AU(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function SU(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    xb(e),
      (0, yr.default)(r, (i, o) => {
        let a = db[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        qU({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && CU(e);
  }
  function CU(e) {
    let t = () => {
      xb(e);
    };
    RU.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(gi(window, [r, t]));
    }),
      t();
  }
  function xb(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(fs({ width: n, mediaQueries: i }));
    }
  }
  function qU({ logic: e, store: t, events: r }) {
    DU(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      u = PU(r, NU);
    if (!(0, mb.default)(u)) return;
    (0, yr.default)(u, (p, b) => {
      let m = r[b],
        { action: E, id: I, mediaQueries: x = o.mediaQueryKeys } = m,
        { actionListId: T } = E.config;
      fU(x, o.mediaQueryKeys) || t.dispatch(ds()),
        E.actionTypeId === Xe.GENERAL_CONTINUOUS_ACTION &&
        (Array.isArray(m.config) ? m.config : [m.config]).forEach((C) => {
          let { continuousParameterGroupId: N } = C,
            F = (0, yt.default)(a, `${T}.continuousParameterGroups`, []),
            q = (0, hb.default)(F, ({ id: $ }) => $ === N),
            K = (C.smoothing || 0) / 100,
            j = (C.restingState || 0) / 100;
          q &&
            p.forEach(($, J) => {
              let ne = I + As + J;
              OU({
                store: t,
                eventStateKey: ne,
                eventTarget: $,
                eventId: I,
                eventConfig: C,
                actionListId: T,
                parameterGroup: q,
                smoothing: K,
                restingValue: j,
              });
            });
        }),
        (E.actionTypeId === Xe.GENERAL_START_ACTION || Os(E.actionTypeId)) &&
        Ob({ store: t, actionListId: T, eventId: I });
    });
    let s = (p) => {
      let { ixSession: b } = t.getState();
      LU(u, (m, E, I) => {
        let x = r[E],
          T = b.eventState[I],
          { action: P, mediaQueries: C = o.mediaQueryKeys } = x;
        if (!Ri(C, b.mediaQueryKey)) return;
        let N = (F = {}) => {
          let q = i(
            {
              store: t,
              element: m,
              event: x,
              eventConfig: F,
              nativeEvent: p,
              eventStateKey: I,
            },
            T
          );
          dU(q, T) || t.dispatch(ss(I, q));
        };
        P.actionTypeId === Xe.GENERAL_CONTINUOUS_ACTION
          ? (Array.isArray(x.config) ? x.config : [x.config]).forEach(N)
          : N();
      });
    },
      f = (0, _b.default)(s, vU),
      _ = ({ target: p = document, types: b, throttle: m }) => {
        b.split(" ")
          .filter(Boolean)
          .forEach((E) => {
            let I = m ? f : s;
            p.addEventListener(E, I), t.dispatch(gi(p, [E, I]));
          });
      };
    Array.isArray(n) ? n.forEach(_) : typeof n == "string" && _(e);
  }
  function DU(e) {
    if (!gU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = gs(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function Ob({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      u = a[r],
      s = o[t];
    if (s && s.useFirstGroupAsInitialState) {
      let f = (0, yt.default)(s, "actionItemGroups[0].actionItems", []),
        _ = (0, yt.default)(u, "mediaQueries", n.mediaQueryKeys);
      if (!Ri(_, i.mediaQueryKey)) return;
      f.forEach((p) => {
        let { config: b, actionTypeId: m } = p,
          E =
            b?.target?.useEventTarget === !0 && b?.target?.objectId == null
              ? { target: u.target, targets: u.targets }
              : b,
          I = Si({ config: E, event: u, elementApi: Fe }),
          x = Ci(m);
        I.forEach((T) => {
          let P = x ? Rs(m)(T, p) : null;
          Cs({
            destination: Ss({ element: T, actionItem: p, elementApi: Fe }, P),
            immediate: !0,
            store: e,
            element: T,
            eventId: r,
            actionItem: p,
            actionListId: t,
            pluginInstance: P,
          });
        });
      });
    }
  }
  function Ab({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, yr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Ps(r, e), i && e.dispatch(hr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function mr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      u = a.hasBoundaryNodes && r ? en(r, Ai) : null;
    (0, yr.default)(o, (s) => {
      let f = (0, yt.default)(s, "actionItem.config.target.boundaryMode"),
        _ = n ? s.eventStateKey === n : !0;
      if (s.actionListId === i && s.eventId === t && _) {
        if (u && f && !vs(u, s.element)) return;
        Ps(s, e),
          s.verbose && e.dispatch(hr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function on({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: u,
  }) {
    let { ixData: s, ixSession: f } = e.getState(),
      { events: _ } = s,
      p = _[t] || {},
      { mediaQueries: b = s.mediaQueryKeys } = p,
      m = (0, yt.default)(s, `actionLists.${i}`, {}),
      { actionItemGroups: E, useFirstGroupAsInitialState: I } = m;
    if (!E || !E.length) return !1;
    o >= E.length && (0, yt.default)(p, "config.loop") && (o = 0),
      o === 0 && I && o++;
    let T =
      (o === 0 || (o === 1 && I)) && Os(p.action?.actionTypeId)
        ? p.config.delay
        : void 0,
      P = (0, yt.default)(E, [o, "actionItems"], []);
    if (!P.length || !Ri(b, f.mediaQueryKey)) return !1;
    let C = f.hasBoundaryNodes && r ? en(r, Ai) : null,
      N = rU(P),
      F = !1;
    return (
      P.forEach((q, K) => {
        let { config: j, actionTypeId: $ } = q,
          J = Ci($),
          { target: ne } = j;
        if (!ne) return;
        let G = ne.boundaryMode ? C : null;
        Si({
          config: j,
          event: p,
          eventTarget: r,
          elementRoot: G,
          elementApi: Fe,
        }).forEach((k, B) => {
          let V = J ? Rs($)(k, q) : null,
            ee = J ? pU($)(k, q) : null;
          F = !0;
          let ie = N === K && B === 0,
            U = nU({ element: k, actionItem: q }),
            H = Ss({ element: k, actionItem: q, elementApi: Fe }, V);
          Cs({
            store: e,
            element: k,
            actionItem: q,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: ie,
            computedStyle: U,
            destination: H,
            immediate: a,
            verbose: u,
            pluginInstance: V,
            pluginDuration: ee,
            instanceDelay: T,
          });
        });
      }),
      F
    );
  }
  function Cs(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: u,
        continuous: s,
        restingValue: f,
        eventId: _,
      } = n,
      p = !s,
      b = eU(),
      { ixElements: m, ixSession: E, ixData: I } = t.getState(),
      x = JX(m, i),
      { refState: T } = m[x] || {},
      P = hs(i),
      C = E.reducedMotion && Qo[o.actionTypeId],
      N;
    if (C && s)
      switch (I.events[_]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          N = f;
          break;
        default:
          N = 0.5;
          break;
      }
    let F = iU(i, T, r, o, Fe, u);
    if (
      (t.dispatch(
        us({
          instanceId: b,
          elementId: x,
          origin: F,
          refType: P,
          skipMotion: C,
          skipToValue: N,
          ...n,
        })
      ),
        Sb(document.body, "ix2-animation-started", b),
        a)
    ) {
      MU(t, b);
      return;
    }
    Xt({ store: t, select: ({ ixInstances: q }) => q[b], onChange: Rb }),
      p && t.dispatch(hi(b, E.tick));
  }
  function Ps(e, t) {
    Sb(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === Ib && uU(o, n, Fe), t.dispatch(cs(e.id));
  }
  function Sb(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function MU(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(hi(t, 0)), e.dispatch(vi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    Rb(n[t], e);
  }
  function Rb(e, t) {
    let {
      active: r,
      continuous: n,
      complete: i,
      elementId: o,
      actionItem: a,
      actionTypeId: u,
      renderType: s,
      current: f,
      groupIndex: _,
      eventId: p,
      eventTarget: b,
      eventStateKey: m,
      actionListId: E,
      isCarrier: I,
      styleProp: x,
      verbose: T,
      pluginInstance: P,
    } = e,
      { ixData: C, ixSession: N } = t.getState(),
      { events: F } = C,
      q = F && F[p] ? F[p] : {},
      { mediaQueries: K = C.mediaQueryKeys } = q;
    if (Ri(K, N.mediaQueryKey) && (n || r || i)) {
      if (f || (s === ZX && i)) {
        t.dispatch(ls(o, u, f, a));
        let { ixElements: j } = t.getState(),
          { ref: $, refType: J, refState: ne } = j[o] || {},
          G = ne && ne[u];
        (J === Ib || Ci(u)) && tU($, ne, G, p, a, x, Fe, s, P);
      }
      if (i) {
        if (I) {
          let j = on({
            store: t,
            eventId: p,
            eventTarget: b,
            eventStateKey: m,
            actionListId: E,
            groupIndex: _ + 1,
            verbose: T,
          });
          T && !j && t.dispatch(hr({ actionListId: E, isPlaying: !1 }));
        }
        Ps(e, t);
      }
    }
  }
  var hb,
    yt,
    mb,
    yb,
    Eb,
    bb,
    yr,
    _b,
    Oi,
    $X,
    Os,
    As,
    Ai,
    Ib,
    ZX,
    gb,
    Si,
    JX,
    Ss,
    Xt,
    eU,
    tU,
    Tb,
    rU,
    nU,
    iU,
    oU,
    aU,
    sU,
    Ri,
    uU,
    cU,
    lU,
    fU,
    dU,
    Ci,
    Rs,
    pU,
    vb,
    gU,
    vU,
    RU,
    PU,
    LU,
    NU,
    xs = me(() => {
      "use strict";
      (hb = de(xa())),
        (yt = de(Qn())),
        (mb = de(Vm())),
        (yb = de(vy())),
        (Eb = de(my())),
        (bb = de(Ey())),
        (yr = de(xy())),
        (_b = de(Ly()));
      Ue();
      Oi = de(Gt());
      mi();
      ky();
      pb();
      ($X = Object.keys(Sn)),
        (Os = (e) => $X.includes(e)),
        ({
          COLON_DELIMITER: As,
          BOUNDARY_SELECTOR: Ai,
          HTML_ELEMENT: Ib,
          RENDER_GENERAL: ZX,
          W_MOD_IX: gb,
        } = Pe),
        ({
          getAffectedElements: Si,
          getElementId: JX,
          getDestinationValues: Ss,
          observeStore: Xt,
          getInstanceId: eU,
          renderHTMLElement: tU,
          clearAllStyles: Tb,
          getMaxDurationItemIndex: rU,
          getComputedStyle: nU,
          getInstanceOrigin: iU,
          reduceListToGroup: oU,
          shouldNamespaceEventParameter: aU,
          getNamespacedParameterId: sU,
          shouldAllowMediaQuery: Ri,
          cleanupHTMLElement: uU,
          clearObjectCache: cU,
          stringifyTarget: lU,
          mediaQueriesEqual: fU,
          shallowEqual: dU,
        } = Oi.IX2VanillaUtils),
        ({
          isPluginType: Ci,
          createPluginInstance: Rs,
          getPluginDuration: pU,
        } = Oi.IX2VanillaPlugins),
        (vb = navigator.userAgent),
        (gU = vb.match(/iPad/i) || vb.match(/iPhone/)),
        (vU = 12);
      RU = ["resize", "orientationchange"];
      (PU = (e, t) => (0, yb.default)((0, bb.default)(e, t), Eb.default)),
        (LU = (e, t) => {
          (0, yr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + As + o;
              t(i, n, a);
            });
          });
        }),
        (NU = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Si({ config: t, elementApi: Fe });
        });
    });
  var Lb = c((Et) => {
    "use strict";
    var FU = vn().default,
      kU = pu().default;
    Object.defineProperty(Et, "__esModule", { value: !0 });
    Et.actions = void 0;
    Et.destroy = Pb;
    Et.init = VU;
    Et.setEnv = WU;
    Et.store = void 0;
    Zl();
    var GU = zo(),
      XU = kU((wm(), nt(Tm))),
      Ls = (xs(), nt(Cb)),
      UU = FU((mi(), nt(qy)));
    Et.actions = UU;
    var Ns = (Et.store = (0, GU.createStore)(XU.default));
    function WU(e) {
      e() && (0, Ls.observeRequests)(Ns);
    }
    function VU(e) {
      Pb(), (0, Ls.startEngine)({ store: Ns, rawData: e, allowEvents: !0 });
    }
    function Pb() {
      (0, Ls.stopEngine)(Ns);
    }
  });
  var Mb = c((yz, Db) => {
    "use strict";
    var Nb = qe(),
      qb = Lb();
    qb.setEnv(Nb.env);
    Nb.define(
      "ix2",
      (Db.exports = function () {
        return qb;
      })
    );
  });
  var kb = c((Ez, Fb) => {
    "use strict";
    var Er = qe();
    Er.define(
      "links",
      (Fb.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = Er.env(),
          a = window.location,
          u = document.createElement("a"),
          s = "w--current",
          f = /index\.(html|php)$/,
          _ = /\/$/,
          p,
          b;
        r.ready = r.design = r.preview = m;
        function m() {
          (i = o && Er.env("design")),
            (b = Er.env("slug") || a.pathname || ""),
            Er.scroll.off(I),
            (p = []);
          for (var T = document.links, P = 0; P < T.length; ++P) E(T[P]);
          p.length && (Er.scroll.on(I), I());
        }
        function E(T) {
          if (!T.getAttribute("hreflang")) {
            var P =
              (i && T.getAttribute("href-disabled")) || T.getAttribute("href");
            if (((u.href = P), !(P.indexOf(":") >= 0))) {
              var C = e(T);
              if (
                u.hash.length > 1 &&
                u.host + u.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var N = e(u.hash);
                N.length && p.push({ link: C, sec: N, active: !1 });
                return;
              }
              if (!(P === "#" || P === "")) {
                var F =
                  u.href === a.href || P === b || (f.test(P) && _.test(b));
                x(C, s, F);
              }
            }
          }
        }
        function I() {
          var T = n.scrollTop(),
            P = n.height();
          t.each(p, function (C) {
            if (!C.link.attr("hreflang")) {
              var N = C.link,
                F = C.sec,
                q = F.offset().top,
                K = F.outerHeight(),
                j = P * 0.5,
                $ = F.is(":visible") && q + K - j >= T && q + j <= T + P;
              C.active !== $ && ((C.active = $), x(N, s, $));
            }
          });
        }
        function x(T, P, C) {
          var N = T.hasClass(P);
          (C && N) || (!C && !N) || (C ? T.addClass(P) : T.removeClass(P));
        }
        return r;
      })
    );
  });
  var Xb = c((bz, Gb) => {
    "use strict";
    var Ni = qe();
    Ni.define(
      "scroll",
      (Gb.exports = function (e) {
        var t = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll",
        },
          r = window.location,
          n = E() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (G) {
              window.setTimeout(G, 15);
            },
          s = Ni.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          _ = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + _ + ")",
          b = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(b));
        function E() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var I = /^#[a-zA-Z0-9][\w:.-]*$/;
        function x(G) {
          return I.test(G.hash) && G.host + G.pathname === r.host + r.pathname;
        }
        let T =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function P() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            T.matches
          );
        }
        function C(G, S) {
          var k;
          switch (S) {
            case "add":
              (k = G.attr("tabindex")),
                k
                  ? G.attr("data-wf-tabindex-swap", k)
                  : G.attr("tabindex", "-1");
              break;
            case "remove":
              (k = G.attr("data-wf-tabindex-swap")),
                k
                  ? (G.attr("tabindex", k),
                    G.removeAttr("data-wf-tabindex-swap"))
                  : G.removeAttr("tabindex");
              break;
          }
          G.toggleClass("wf-force-outline-none", S === "add");
        }
        function N(G) {
          var S = G.currentTarget;
          if (
            !(
              Ni.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(S.className))
            )
          ) {
            var k = x(S) ? S.hash : "";
            if (k !== "") {
              var B = e(k);
              B.length &&
                (G && (G.preventDefault(), G.stopPropagation()),
                  F(k, G),
                  window.setTimeout(
                    function () {
                      q(B, function () {
                        C(B, "add"),
                          B.get(0).focus({ preventScroll: !0 }),
                          C(B, "remove");
                      });
                    },
                    G ? 0 : 300
                  ));
            }
          }
        }
        function F(G) {
          if (
            r.hash !== G &&
            n &&
            n.pushState &&
            !(Ni.env.chrome && r.protocol === "file:")
          ) {
            var S = n.state && n.state.hash;
            S !== G && n.pushState({ hash: G }, "", G);
          }
        }
        function q(G, S) {
          var k = i.scrollTop(),
            B = K(G);
          if (k !== B) {
            var V = j(G, k, B),
              ee = Date.now(),
              ie = function () {
                var U = Date.now() - ee;
                window.scroll(0, $(k, B, U, V)),
                  U <= V ? u(ie) : typeof S == "function" && S();
              };
            u(ie);
          }
        }
        function K(G) {
          var S = e(f),
            k = S.css("position") === "fixed" ? S.outerHeight() : 0,
            B = G.offset().top - k;
          if (G.data("scroll") === "mid") {
            var V = i.height() - k,
              ee = G.outerHeight();
            ee < V && (B -= Math.round((V - ee) / 2));
          }
          return B;
        }
        function j(G, S, k) {
          if (P()) return 0;
          var B = 1;
          return (
            a.add(G).each(function (V, ee) {
              var ie = parseFloat(ee.getAttribute("data-scroll-time"));
              !isNaN(ie) && ie >= 0 && (B = ie);
            }),
            (472.143 * Math.log(Math.abs(S - k) + 125) - 2e3) * B
          );
        }
        function $(G, S, k, B) {
          return k > B ? S : G + (S - G) * J(k / B);
        }
        function J(G) {
          return G < 0.5
            ? 4 * G * G * G
            : (G - 1) * (2 * G - 2) * (2 * G - 2) + 1;
        }
        function ne() {
          var { WF_CLICK_EMPTY: G, WF_CLICK_SCROLL: S } = t;
          o.on(S, p, N),
            o.on(G, _, function (k) {
              k.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: ne };
      })
    );
  });
  var Wb = c((_z, Ub) => {
    "use strict";
    var HU = qe();
    HU.define(
      "touch",
      (Ub.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            _;
          o.addEventListener("touchstart", p, !1),
            o.addEventListener("touchmove", b, !1),
            o.addEventListener("touchend", m, !1),
            o.addEventListener("touchcancel", E, !1),
            o.addEventListener("mousedown", p, !1),
            o.addEventListener("mousemove", b, !1),
            o.addEventListener("mouseup", m, !1),
            o.addEventListener("mouseout", E, !1);
          function p(x) {
            var T = x.touches;
            (T && T.length > 1) ||
              ((a = !0),
                T ? ((u = !0), (f = T[0].clientX)) : (f = x.clientX),
                (_ = f));
          }
          function b(x) {
            if (a) {
              if (u && x.type === "mousemove") {
                x.preventDefault(), x.stopPropagation();
                return;
              }
              var T = x.touches,
                P = T ? T[0].clientX : x.clientX,
                C = P - _;
              (_ = P),
                Math.abs(C) > s &&
                r &&
                String(r()) === "" &&
                (i("swipe", x, { direction: C > 0 ? "right" : "left" }), E());
            }
          }
          function m(x) {
            if (a && ((a = !1), u && x.type === "mouseup")) {
              x.preventDefault(), x.stopPropagation(), (u = !1);
              return;
            }
          }
          function E() {
            a = !1;
          }
          function I() {
            o.removeEventListener("touchstart", p, !1),
              o.removeEventListener("touchmove", b, !1),
              o.removeEventListener("touchend", m, !1),
              o.removeEventListener("touchcancel", E, !1),
              o.removeEventListener("mousedown", p, !1),
              o.removeEventListener("mousemove", b, !1),
              o.removeEventListener("mouseup", m, !1),
              o.removeEventListener("mouseout", E, !1),
              (o = null);
          }
          this.destroy = I;
        }
        function i(o, a, u) {
          var s = e.Event(o, { originalEvent: a });
          e(a.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Bb = c((Iz, Hb) => {
    "use strict";
    var Ut = qe(),
      BU = _r(),
      tt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Vb = !0,
      jU = /^#[a-zA-Z0-9\-_]+$/;
    Ut.define(
      "dropdown",
      (Hb.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Ut.env(),
          o = !1,
          a,
          u = Ut.env.touch,
          s = ".w-dropdown",
          f = "w--open",
          _ = BU.triggers,
          p = 900,
          b = "focusout" + s,
          m = "keydown" + s,
          E = "mouseenter" + s,
          I = "mousemove" + s,
          x = "mouseleave" + s,
          T = (u ? "click" : "mouseup") + s,
          P = "w-close" + s,
          C = "setting" + s,
          N = e(document),
          F;
        (n.ready = q),
          (n.design = function () {
            o && S(), (o = !1), q();
          }),
          (n.preview = function () {
            (o = !0), q();
          });
        function q() {
          (a = i && Ut.env("design")), (F = N.find(s)), F.each(K);
        }
        function K(l, D) {
          var X = e(D),
            O = e.data(D, s);
          O ||
            (O = e.data(D, s, {
              open: !1,
              el: X,
              config: {},
              selectedIdx: -1,
            })),
            (O.toggle = O.el.children(".w-dropdown-toggle")),
            (O.list = O.el.children(".w-dropdown-list")),
            (O.links = O.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (O.complete = V(O)),
            (O.mouseLeave = ie(O)),
            (O.mouseUpOutside = B(O)),
            (O.mouseMoveOutside = U(O)),
            j(O);
          var Y = O.toggle.attr("id"),
            se = O.list.attr("id");
          Y || (Y = "w-dropdown-toggle-" + l),
            se || (se = "w-dropdown-list-" + l),
            O.toggle.attr("id", Y),
            O.toggle.attr("aria-controls", se),
            O.toggle.attr("aria-haspopup", "menu"),
            O.toggle.attr("aria-expanded", "false"),
            O.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            O.toggle.prop("tagName") !== "BUTTON" &&
            (O.toggle.attr("role", "button"),
              O.toggle.attr("tabindex") || O.toggle.attr("tabindex", "0")),
            O.list.attr("id", se),
            O.list.attr("aria-labelledby", Y),
            O.links.each(function (y, W) {
              W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"),
                jU.test(W.hash) && W.addEventListener("click", G.bind(null, O));
            }),
            O.el.off(s),
            O.toggle.off(s),
            O.nav && O.nav.off(s);
          var re = J(O, Vb);
          a && O.el.on(C, $(O)),
            a ||
            (i && ((O.hovering = !1), G(O)),
              O.config.hover && O.toggle.on(E, ee(O)),
              O.el.on(P, re),
              O.el.on(m, H(O)),
              O.el.on(b, h(O)),
              O.toggle.on(T, re),
              O.toggle.on(m, g(O)),
              (O.nav = O.el.closest(".w-nav")),
              O.nav.on(P, re));
        }
        function j(l) {
          var D = Number(l.el.css("z-index"));
          (l.manageZ = D === p || D === p + 1),
            (l.config = {
              hover: l.el.attr("data-hover") === "true" && !u,
              delay: l.el.attr("data-delay"),
            });
        }
        function $(l) {
          return function (D, X) {
            (X = X || {}),
              j(l),
              X.open === !0 && ne(l, !0),
              X.open === !1 && G(l, { immediate: !0 });
          };
        }
        function J(l, D) {
          return r(function (X) {
            if (l.open || (X && X.type === "w-close"))
              return G(l, { forceClose: D });
            ne(l);
          });
        }
        function ne(l) {
          if (!l.open) {
            k(l),
              (l.open = !0),
              l.list.addClass(f),
              l.toggle.addClass(f),
              l.toggle.attr("aria-expanded", "true"),
              _.intro(0, l.el[0]),
              Ut.redraw.up(),
              l.manageZ && l.el.css("z-index", p + 1);
            var D = Ut.env("editor");
            a || N.on(T, l.mouseUpOutside),
              l.hovering && !D && l.el.on(x, l.mouseLeave),
              l.hovering && D && N.on(I, l.mouseMoveOutside),
              window.clearTimeout(l.delayId);
          }
        }
        function G(l, { immediate: D, forceClose: X } = {}) {
          if (l.open && !(l.config.hover && l.hovering && !X)) {
            l.toggle.attr("aria-expanded", "false"), (l.open = !1);
            var O = l.config;
            if (
              (_.outro(0, l.el[0]),
                N.off(T, l.mouseUpOutside),
                N.off(I, l.mouseMoveOutside),
                l.el.off(x, l.mouseLeave),
                window.clearTimeout(l.delayId),
                !O.delay || D)
            )
              return l.complete();
            l.delayId = window.setTimeout(l.complete, O.delay);
          }
        }
        function S() {
          N.find(s).each(function (l, D) {
            e(D).triggerHandler(P);
          });
        }
        function k(l) {
          var D = l.el[0];
          F.each(function (X, O) {
            var Y = e(O);
            Y.is(D) || Y.has(D).length || Y.triggerHandler(P);
          });
        }
        function B(l) {
          return (
            l.mouseUpOutside && N.off(T, l.mouseUpOutside),
            r(function (D) {
              if (l.open) {
                var X = e(D.target);
                if (!X.closest(".w-dropdown-toggle").length) {
                  var O = e.inArray(l.el[0], X.parents(s)) === -1,
                    Y = Ut.env("editor");
                  if (O) {
                    if (Y) {
                      var se =
                        X.parents().length === 1 &&
                        X.parents("svg").length === 1,
                        re = X.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (se || re) return;
                    }
                    G(l);
                  }
                }
              }
            })
          );
        }
        function V(l) {
          return function () {
            l.list.removeClass(f),
              l.toggle.removeClass(f),
              l.manageZ && l.el.css("z-index", "");
          };
        }
        function ee(l) {
          return function () {
            (l.hovering = !0), ne(l);
          };
        }
        function ie(l) {
          return function () {
            (l.hovering = !1), l.links.is(":focus") || G(l);
          };
        }
        function U(l) {
          return r(function (D) {
            if (l.open) {
              var X = e(D.target),
                O = e.inArray(l.el[0], X.parents(s)) === -1;
              if (O) {
                var Y = X.parents(".w-editor-bem-EditorHoverControls").length,
                  se = X.parents(".w-editor-bem-RTToolbar").length,
                  re = e(".w-editor-bem-EditorOverlay"),
                  y =
                    re.find(".w-editor-edit-outline").length ||
                    re.find(".w-editor-bem-RTToolbar").length;
                if (Y || se || y) return;
                (l.hovering = !1), G(l);
              }
            }
          });
        }
        function H(l) {
          return function (D) {
            if (!(a || !l.open))
              switch (
              ((l.selectedIdx = l.links.index(document.activeElement)),
                D.keyCode)
              ) {
                case tt.HOME:
                  return l.open
                    ? ((l.selectedIdx = 0), v(l), D.preventDefault())
                    : void 0;
                case tt.END:
                  return l.open
                    ? ((l.selectedIdx = l.links.length - 1),
                      v(l),
                      D.preventDefault())
                    : void 0;
                case tt.ESCAPE:
                  return G(l), l.toggle.focus(), D.stopPropagation();
                case tt.ARROW_RIGHT:
                case tt.ARROW_DOWN:
                  return (
                    (l.selectedIdx = Math.min(
                      l.links.length - 1,
                      l.selectedIdx + 1
                    )),
                    v(l),
                    D.preventDefault()
                  );
                case tt.ARROW_LEFT:
                case tt.ARROW_UP:
                  return (
                    (l.selectedIdx = Math.max(-1, l.selectedIdx - 1)),
                    v(l),
                    D.preventDefault()
                  );
              }
          };
        }
        function v(l) {
          l.links[l.selectedIdx] && l.links[l.selectedIdx].focus();
        }
        function g(l) {
          var D = J(l, Vb);
          return function (X) {
            if (!a) {
              if (!l.open)
                switch (X.keyCode) {
                  case tt.ARROW_UP:
                  case tt.ARROW_DOWN:
                    return X.stopPropagation();
                }
              switch (X.keyCode) {
                case tt.SPACE:
                case tt.ENTER:
                  return D(), X.stopPropagation(), X.preventDefault();
              }
            }
          };
        }
        function h(l) {
          return r(function (D) {
            var { relatedTarget: X, target: O } = D,
              Y = l.el[0],
              se = Y.contains(X) || Y.contains(O);
            return se || G(l), D.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var jb = c((qs) => {
    "use strict";
    Object.defineProperty(qs, "__esModule", { value: !0 });
    qs.default = zU;
    function zU(e, t, r, n, i, o, a, u, s, f, _, p, b) {
      return function (m) {
        e(m);
        var E = m.form,
          I = {
            name: E.attr("data-name") || E.attr("name") || "Untitled Form",
            pageId: E.attr("data-wf-page-id") || "",
            elementId: E.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              E.html()
            ),
            trackingCookies: n(),
          };
        let x = E.attr("data-wf-flow");
        x && (I.wfFlow = x), i(m);
        var T = o(E, I.fields);
        if (T) return a(T);
        if (((I.fileUploads = u(E)), s(m), !f)) {
          _(m);
          return;
        }
        p.ajax({
          url: b,
          type: "POST",
          data: I,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (P) {
            P && P.code === 200 && (m.success = !0), _(m);
          })
          .fail(function () {
            _(m);
          });
      };
    }
  });
  var Kb = c((wz, zb) => {
    "use strict";
    var qi = qe();
    qi.define(
      "forms",
      (zb.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          u = ".w-form",
          s,
          f = /e(-)?mail/i,
          _ = /^\S+@\S+$/,
          p = window.alert,
          b = qi.env(),
          m,
          E,
          I,
          x = /list-manage[1-9]?.com/i,
          T = t.debounce(function () {
            p(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
          function () {
            P(), !b && !m && N();
          };
        function P() {
          (s = e("html").attr("data-wf-site")),
            (E = "https://webflow.com/api/v1/form/" + s),
            a &&
            E.indexOf("https://webflow.com") >= 0 &&
            (E = E.replace(
              "https://webflow.com",
              "https://formdata.webflow.com"
            )),
            (I = `${E}/signFile`),
            (i = e(u + " form")),
            i.length && i.each(C);
        }
        function C(U, H) {
          var v = e(H),
            g = e.data(H, u);
          g || (g = e.data(H, u, { form: v })), F(g);
          var h = v.closest("div.w-form");
          (g.done = h.find("> .w-form-done")),
            (g.fail = h.find("> .w-form-fail")),
            (g.fileUploads = h.find(".w-file-upload")),
            g.fileUploads.each(function (X) {
              V(X, g);
            });
          var l =
            g.form.attr("aria-label") || g.form.attr("data-name") || "Form";
          g.done.attr("aria-label") || g.form.attr("aria-label", l),
            g.done.attr("tabindex", "-1"),
            g.done.attr("role", "region"),
            g.done.attr("aria-label") ||
            g.done.attr("aria-label", l + " success"),
            g.fail.attr("tabindex", "-1"),
            g.fail.attr("role", "region"),
            g.fail.attr("aria-label") ||
            g.fail.attr("aria-label", l + " failure");
          var D = (g.action = v.attr("action"));
          if (
            ((g.handler = null),
              (g.redirect = v.attr("data-redirect")),
              x.test(D))
          ) {
            g.handler = S;
            return;
          }
          if (!D) {
            if (s) {
              g.handler = (() => {
                let X = jb().default;
                return X(F, o, qi, J, B, K, p, j, q, s, k, e, E);
              })();
              return;
            }
            T();
          }
        }
        function N() {
          (m = !0),
            n.on("submit", u + " form", function (X) {
              var O = e.data(this, u);
              O.handler && ((O.evt = X), O.handler(O));
            });
          let U = ".w-checkbox-input",
            H = ".w-radio-input",
            v = "w--redirected-checked",
            g = "w--redirected-focus",
            h = "w--redirected-focus-visible",
            l = ":focus-visible, [data-wf-focus-visible]",
            D = [
              ["checkbox", U],
              ["radio", H],
            ];
          n.on(
            "change",
            u + ' form input[type="checkbox"]:not(' + U + ")",
            (X) => {
              e(X.target).siblings(U).toggleClass(v);
            }
          ),
            n.on("change", u + ' form input[type="radio"]', (X) => {
              e(`input[name="${X.target.name}"]:not(${U})`).map((Y, se) =>
                e(se).siblings(H).removeClass(v)
              );
              let O = e(X.target);
              O.hasClass("w-radio-input") || O.siblings(H).addClass(v);
            }),
            D.forEach(([X, O]) => {
              n.on(
                "focus",
                u + ` form input[type="${X}"]:not(` + O + ")",
                (Y) => {
                  e(Y.target).siblings(O).addClass(g),
                    e(Y.target).filter(l).siblings(O).addClass(h);
                }
              ),
                n.on(
                  "blur",
                  u + ` form input[type="${X}"]:not(` + O + ")",
                  (Y) => {
                    e(Y.target).siblings(O).removeClass(`${g} ${h}`);
                  }
                );
            });
        }
        function F(U) {
          var H = (U.btn = U.form.find(':input[type="submit"]'));
          (U.wait = U.btn.attr("data-wait") || null),
            (U.success = !1),
            H.prop("disabled", !1),
            U.label && H.val(U.label);
        }
        function q(U) {
          var H = U.btn,
            v = U.wait;
          H.prop("disabled", !0), v && ((U.label = H.val()), H.val(v));
        }
        function K(U, H) {
          var v = null;
          return (
            (H = H || {}),
            U.find(':input:not([type="submit"]):not([type="file"])').each(
              function (g, h) {
                var l = e(h),
                  D = l.attr("type"),
                  X =
                    l.attr("data-name") || l.attr("name") || "Field " + (g + 1);
                X = encodeURIComponent(X);
                var O = l.val();
                if (D === "checkbox") O = l.is(":checked");
                else if (D === "radio") {
                  if (H[X] === null || typeof H[X] == "string") return;
                  O =
                    U.find(
                      'input[name="' + l.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof O == "string" && (O = e.trim(O)),
                  (H[X] = O),
                  (v = v || ne(l, D, X, O));
              }
            ),
            v
          );
        }
        function j(U) {
          var H = {};
          return (
            U.find(':input[type="file"]').each(function (v, g) {
              var h = e(g),
                l = h.attr("data-name") || h.attr("name") || "File " + (v + 1),
                D = h.attr("data-value");
              typeof D == "string" && (D = e.trim(D)), (H[l] = D);
            }),
            H
          );
        }
        let $ = { _mkto_trk: "marketo" };
        function J() {
          return document.cookie.split("; ").reduce(function (H, v) {
            let g = v.split("="),
              h = g[0];
            if (h in $) {
              let l = $[h],
                D = g.slice(1).join("=");
              H[l] = D;
            }
            return H;
          }, {});
        }
        function ne(U, H, v, g) {
          var h = null;
          return (
            H === "password"
              ? (h = "Passwords cannot be submitted.")
              : U.attr("required")
                ? g
                  ? f.test(U.attr("type")) &&
                  (_.test(g) ||
                    (h = "Please enter a valid email address for: " + v))
                  : (h = "Please fill out the required field: " + v)
                : v === "g-recaptcha-response" &&
                !g &&
                (h = "Please confirm you\u2019re not a robot."),
            h
          );
        }
        function G(U) {
          B(U), k(U);
        }
        function S(U) {
          F(U);
          var H = U.form,
            v = {};
          if (/^https/.test(o.href) && !/^https/.test(U.action)) {
            H.attr("method", "post");
            return;
          }
          B(U);
          var g = K(H, v);
          if (g) return p(g);
          q(U);
          var h;
          t.each(v, function (O, Y) {
            f.test(Y) && (v.EMAIL = O),
              /^((full[ _-]?)?name)$/i.test(Y) && (h = O),
              /^(first[ _-]?name)$/i.test(Y) && (v.FNAME = O),
              /^(last[ _-]?name)$/i.test(Y) && (v.LNAME = O);
          }),
            h &&
            !v.FNAME &&
            ((h = h.split(" ")),
              (v.FNAME = h[0]),
              (v.LNAME = v.LNAME || h[1]));
          var l = U.action.replace("/post?", "/post-json?") + "&c=?",
            D = l.indexOf("u=") + 2;
          D = l.substring(D, l.indexOf("&", D));
          var X = l.indexOf("id=") + 3;
          (X = l.substring(X, l.indexOf("&", X))),
            (v["b_" + D + "_" + X] = ""),
            e
              .ajax({ url: l, data: v, dataType: "jsonp" })
              .done(function (O) {
                (U.success = O.result === "success" || /already/.test(O.msg)),
                  U.success || console.info("MailChimp error: " + O.msg),
                  k(U);
              })
              .fail(function () {
                k(U);
              });
        }
        function k(U) {
          var H = U.form,
            v = U.redirect,
            g = U.success;
          if (g && v) {
            qi.location(v);
            return;
          }
          U.done.toggle(g),
            U.fail.toggle(!g),
            g ? U.done.focus() : U.fail.focus(),
            H.toggle(!g),
            F(U);
        }
        function B(U) {
          U.evt && U.evt.preventDefault(), (U.evt = null);
        }
        function V(U, H) {
          if (!H.fileUploads || !H.fileUploads[U]) return;
          var v,
            g = e(H.fileUploads[U]),
            h = g.find("> .w-file-upload-default"),
            l = g.find("> .w-file-upload-uploading"),
            D = g.find("> .w-file-upload-success"),
            X = g.find("> .w-file-upload-error"),
            O = h.find(".w-file-upload-input"),
            Y = h.find(".w-file-upload-label"),
            se = Y.children(),
            re = X.find(".w-file-upload-error-msg"),
            y = D.find(".w-file-upload-file"),
            W = D.find(".w-file-remove-link"),
            Z = y.find(".w-file-upload-file-name"),
            z = re.attr("data-w-size-error"),
            le = re.attr("data-w-type-error"),
            Te = re.attr("data-w-generic-error");
          if (
            (b ||
              Y.on("click keydown", function (A) {
                (A.type === "keydown" && A.which !== 13 && A.which !== 32) ||
                  (A.preventDefault(), O.click());
              }),
              Y.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
              W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
              b)
          )
            O.on("click", function (A) {
              A.preventDefault();
            }),
              Y.on("click", function (A) {
                A.preventDefault();
              }),
              se.on("click", function (A) {
                A.preventDefault();
              });
          else {
            W.on("click keydown", function (A) {
              if (A.type === "keydown") {
                if (A.which !== 13 && A.which !== 32) return;
                A.preventDefault();
              }
              O.removeAttr("data-value"),
                O.val(""),
                Z.html(""),
                h.toggle(!0),
                D.toggle(!1),
                Y.focus();
            }),
              O.on("change", function (A) {
                (v = A.target && A.target.files && A.target.files[0]),
                  v &&
                  (h.toggle(!1),
                    X.toggle(!1),
                    l.toggle(!0),
                    l.focus(),
                    Z.text(v.name),
                    L() || q(H),
                    (H.fileUploads[U].uploading = !0),
                    ee(v, w));
              });
            var Ce = Y.outerHeight();
            O.height(Ce), O.width(1);
          }
          function d(A) {
            var M = A.responseJSON && A.responseJSON.msg,
              te = Te;
            typeof M == "string" && M.indexOf("InvalidFileTypeError") === 0
              ? (te = le)
              : typeof M == "string" &&
              M.indexOf("MaxFileSizeError") === 0 &&
              (te = z),
              re.text(te),
              O.removeAttr("data-value"),
              O.val(""),
              l.toggle(!1),
              h.toggle(!0),
              X.toggle(!0),
              X.focus(),
              (H.fileUploads[U].uploading = !1),
              L() || F(H);
          }
          function w(A, M) {
            if (A) return d(A);
            var te = M.fileName,
              ae = M.postData,
              ve = M.fileId,
              Q = M.s3Url;
            O.attr("data-value", ve), ie(Q, ae, v, te, R);
          }
          function R(A) {
            if (A) return d(A);
            l.toggle(!1),
              D.css("display", "inline-block"),
              D.focus(),
              (H.fileUploads[U].uploading = !1),
              L() || F(H);
          }
          function L() {
            var A = (H.fileUploads && H.fileUploads.toArray()) || [];
            return A.some(function (M) {
              return M.uploading;
            });
          }
        }
        function ee(U, H) {
          var v = new URLSearchParams({ name: U.name, size: U.size });
          e.ajax({ type: "GET", url: `${I}?${v}`, crossDomain: !0 })
            .done(function (g) {
              H(null, g);
            })
            .fail(function (g) {
              H(g);
            });
        }
        function ie(U, H, v, g, h) {
          var l = new FormData();
          for (var D in H) l.append(D, H[D]);
          l.append("file", v, g),
            e
              .ajax({
                type: "POST",
                url: U,
                data: l,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                h(null);
              })
              .fail(function (X) {
                h(X);
              });
        }
        return r;
      })
    );
  });
  var $b = c((xz, Qb) => {
    "use strict";
    var Ds = qe(),
      Yb = "w-condition-invisible",
      KU = "." + Yb;
    function YU(e) {
      return e.filter(function (t) {
        return !sn(t);
      });
    }
    function sn(e) {
      return !!(e.$el && e.$el.closest(KU).length);
    }
    function Ms(e, t) {
      for (var r = e; r >= 0; r--) if (!sn(t[r])) return r;
      return -1;
    }
    function Fs(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!sn(t[r])) return r;
      return -1;
    }
    function QU(e, t) {
      return Ms(e - 1, t) === -1;
    }
    function $U(e, t) {
      return Fs(e + 1, t) === -1;
    }
    function an(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function ZU(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        u = a + "-",
        s = /(^|\s+)/g,
        f = [],
        _,
        p,
        b,
        m = [];
      function E(g, h) {
        return (
          (f = o(g) ? g : [g]),
          p || E.build(),
          YU(f).length > 1 &&
          ((p.items = p.empty),
            f.forEach(function (l, D) {
              var X = H("thumbnail"),
                O = H("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(X);
              an(O, `show item ${D + 1} of ${f.length}`),
                sn(l) && O.addClass(Yb),
                (p.items = p.items.add(O)),
                J(l.thumbnailUrl || l.url, function (Y) {
                  Y.prop("width") > Y.prop("height")
                    ? V(Y, "wide")
                    : V(Y, "tall"),
                    X.append(V(Y, "thumbnail-image"));
                });
            }),
            p.strip.empty().append(p.items),
            V(p.content, "group")),
          i(ee(p.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          V(p.html, "noscroll"),
          E.show(h || 0)
        );
      }
      (E.build = function () {
        return (
          E.destroy(),
          (p = { html: r(t.documentElement), empty: r() }),
          (p.arrowLeft = H("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (p.arrowRight = H("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (p.close = H("control close").attr("role", "button")),
          an(p.arrowLeft, "previous image"),
          an(p.arrowRight, "next image"),
          an(p.close, "close lightbox"),
          (p.spinner = H("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (p.strip = H("strip").attr("role", "tablist")),
          (b = new S(p.spinner, k("hide"))),
          (p.content = H("content").append(
            p.spinner,
            p.arrowLeft,
            p.arrowRight,
            p.close
          )),
          (p.container = H("container").append(p.content, p.strip)),
          (p.lightbox = H("backdrop hide").append(p.container)),
          p.strip.on("click", B("item"), C),
          p.content
            .on("swipe", N)
            .on("click", B("left"), x)
            .on("click", B("right"), T)
            .on("click", B("close"), P)
            .on("click", B("image, caption"), T),
          p.container.on("click", B("view"), P).on("dragstart", B("img"), q),
          p.lightbox.on("keydown", K).on("focusin", F),
          r(n).append(p.lightbox),
          E
        );
      }),
        (E.destroy = function () {
          p && (ee(p.html, "noscroll"), p.lightbox.remove(), (p = void 0));
        }),
        (E.show = function (g) {
          if (g !== _) {
            var h = f[g];
            if (!h) return E.hide();
            if (sn(h)) {
              if (g < _) {
                var l = Ms(g - 1, f);
                g = l > -1 ? l : g;
              } else {
                var D = Fs(g + 1, f);
                g = D > -1 ? D : g;
              }
              h = f[g];
            }
            var X = _;
            (_ = g),
              p.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              b.show();
            var O = (h.html && v(h.width, h.height)) || h.url;
            return (
              J(O, function (Y) {
                if (g !== _) return;
                var se = H("figure", "figure").append(V(Y, "image")),
                  re = H("frame").append(se),
                  y = H("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(re),
                  W,
                  Z;
                h.html &&
                  ((W = r(h.html)),
                    (Z = W.is("iframe")),
                    Z && W.on("load", z),
                    se.append(V(W, "embed"))),
                  h.caption &&
                  se.append(H("caption", "figcaption").text(h.caption)),
                  p.spinner.before(y),
                  Z || z();
                function z() {
                  if (
                    (p.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                      b.hide(),
                      g !== _)
                  ) {
                    y.remove();
                    return;
                  }
                  let le = QU(g, f);
                  ie(p.arrowLeft, "inactive", le),
                    U(p.arrowLeft, le),
                    le && p.arrowLeft.is(":focus") && p.arrowRight.focus();
                  let Te = $U(g, f);
                  if (
                    (ie(p.arrowRight, "inactive", Te),
                      U(p.arrowRight, Te),
                      Te && p.arrowRight.is(":focus") && p.arrowLeft.focus(),
                      p.view
                        ? (i(p.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(ne(p.view)),
                          i(y)
                            .add("opacity .3s")
                            .add("transform .3s")
                            .set({ x: g > X ? "80px" : "-80px" })
                            .start({ opacity: 1, x: 0 }))
                        : y.css("opacity", 1),
                      (p.view = y),
                      p.view.prop("tabIndex", 0),
                      p.items)
                  ) {
                    ee(p.items, "active"), p.items.removeAttr("aria-selected");
                    var Ce = p.items.eq(g);
                    V(Ce, "active"), Ce.attr("aria-selected", !0), G(Ce);
                  }
                }
              }),
              p.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              m.length === 0 &&
              (r("body")
                .children()
                .each(function () {
                  r(this).hasClass("w-lightbox-backdrop") ||
                    r(this).is("script") ||
                    (m.push({
                      node: r(this),
                      hidden: r(this).attr("aria-hidden"),
                      tabIndex: r(this).attr("tabIndex"),
                    }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                }),
                p.close.focus()),
              E
            );
          }
        }),
        (E.hide = function () {
          return (
            i(p.lightbox).add("opacity .3s").start({ opacity: 0 }).then($), E
          );
        }),
        (E.prev = function () {
          var g = Ms(_ - 1, f);
          g > -1 && E.show(g);
        }),
        (E.next = function () {
          var g = Fs(_ + 1, f);
          g > -1 && E.show(g);
        });
      function I(g) {
        return function (h) {
          this === h.target && (h.stopPropagation(), h.preventDefault(), g());
        };
      }
      var x = I(E.prev),
        T = I(E.next),
        P = I(E.hide),
        C = function (g) {
          var h = r(this).index();
          g.preventDefault(), E.show(h);
        },
        N = function (g, h) {
          g.preventDefault(),
            h.direction === "left"
              ? E.next()
              : h.direction === "right" && E.prev();
        },
        F = function () {
          this.focus();
        };
      function q(g) {
        g.preventDefault();
      }
      function K(g) {
        var h = g.keyCode;
        h === 27 || j(h, "close")
          ? E.hide()
          : h === 37 || j(h, "left")
            ? E.prev()
            : h === 39 || j(h, "right")
              ? E.next()
              : j(h, "item") && r(":focus").click();
      }
      function j(g, h) {
        if (g !== 13 && g !== 32) return !1;
        var l = r(":focus").attr("class"),
          D = k(h).trim();
        return l.includes(D);
      }
      function $() {
        p &&
          (p.strip.scrollLeft(0).empty(),
            ee(p.html, "noscroll"),
            V(p.lightbox, "hide"),
            p.view && p.view.remove(),
            ee(p.content, "group"),
            V(p.arrowLeft, "inactive"),
            V(p.arrowRight, "inactive"),
            (_ = p.view = void 0),
            m.forEach(function (g) {
              var h = g.node;
              h &&
                (g.hidden
                  ? h.attr("aria-hidden", g.hidden)
                  : h.removeAttr("aria-hidden"),
                  g.tabIndex
                    ? h.attr("tabIndex", g.tabIndex)
                    : h.removeAttr("tabIndex"));
            }),
            (m = []),
            r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function J(g, h) {
        var l = H("img", "img");
        return (
          l.one("load", function () {
            h(l);
          }),
          l.attr("src", g),
          l
        );
      }
      function ne(g) {
        return function () {
          g.remove();
        };
      }
      function G(g) {
        var h = g.get(0),
          l = p.strip.get(0),
          D = h.offsetLeft,
          X = h.clientWidth,
          O = l.scrollLeft,
          Y = l.clientWidth,
          se = l.scrollWidth - Y,
          re;
        D < O
          ? (re = Math.max(0, D + X - Y))
          : D + X > Y + O && (re = Math.min(D, se)),
          re != null &&
          i(p.strip).add("scroll-left 500ms").start({ "scroll-left": re });
      }
      function S(g, h, l) {
        (this.$element = g),
          (this.className = h),
          (this.delay = l || 200),
          this.hide();
      }
      (S.prototype.show = function () {
        var g = this;
        g.timeoutId ||
          (g.timeoutId = setTimeout(function () {
            g.$element.removeClass(g.className), delete g.timeoutId;
          }, g.delay));
      }),
        (S.prototype.hide = function () {
          var g = this;
          if (g.timeoutId) {
            clearTimeout(g.timeoutId), delete g.timeoutId;
            return;
          }
          g.$element.addClass(g.className);
        });
      function k(g, h) {
        return g.replace(s, (h ? " ." : " ") + u);
      }
      function B(g) {
        return k(g, !0);
      }
      function V(g, h) {
        return g.addClass(k(h));
      }
      function ee(g, h) {
        return g.removeClass(k(h));
      }
      function ie(g, h, l) {
        return g.toggleClass(k(h), l);
      }
      function U(g, h) {
        return g.attr("aria-hidden", h).attr("tabIndex", h ? -1 : 0);
      }
      function H(g, h) {
        return V(r(t.createElement(h || "div")), g);
      }
      function v(g, h) {
        var l =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          g +
          '" height="' +
          h +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(l);
      }
      return (
        (function () {
          var g = e.navigator.userAgent,
            h = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            l = g.match(h),
            D = g.indexOf("Android ") > -1 && g.indexOf("Chrome") === -1;
          if (!D && (!l || l[2] > 7)) return;
          var X = t.createElement("style");
          t.head.appendChild(X), e.addEventListener("resize", O, !0);
          function O() {
            var Y = e.innerHeight,
              se = e.innerWidth,
              re =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                Y +
                "px}.w-lightbox-view {width:" +
                se +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * Y +
                "px}.w-lightbox-image {max-width:" +
                se +
                "px;max-height:" +
                Y +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * Y +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * Y +
                "px}.w-lightbox-item {width:" +
                0.1 * Y +
                "px;padding:" +
                0.02 * Y +
                "px " +
                0.01 * Y +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * Y +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * Y +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * Y +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * Y +
                "px}.w-lightbox-image {max-width:" +
                0.96 * se +
                "px;max-height:" +
                0.96 * Y +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * se +
                "px;max-height:" +
                0.84 * Y +
                "px}}";
            X.textContent = re;
          }
          O();
        })(),
        E
      );
    }
    Ds.define(
      "lightbox",
      (Qb.exports = function (e) {
        var t = {},
          r = Ds.env(),
          n = ZU(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          u = ".w-lightbox",
          s;
        t.ready = t.design = t.preview = f;
        function f() {
          (a = r && Ds.env("design")),
            n.destroy(),
            (s = {}),
            (o = i.find(u)),
            o.webflowLightBox(),
            o.each(function () {
              an(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var m = this;
            e.each(m, function (E, I) {
              var x = e.data(I, u);
              x ||
                (x = e.data(I, u, {
                  el: e(I),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                x.el.off(u),
                _(x),
                a
                  ? x.el.on("setting" + u, _.bind(null, x))
                  : x.el.on("click" + u, p(x)).on("click" + u, function (T) {
                    T.preventDefault();
                  });
            });
          },
        });
        function _(m) {
          var E = m.el.children(".w-json").html(),
            I,
            x;
          if (!E) {
            m.items = [];
            return;
          }
          try {
            E = JSON.parse(E);
          } catch (T) {
            console.error("Malformed lightbox JSON configuration.", T);
          }
          b(E),
            E.items.forEach(function (T) {
              T.$el = m.el;
            }),
            (I = E.group),
            I
              ? ((x = s[I]),
                x || (x = s[I] = []),
                (m.items = x),
                E.items.length &&
                ((m.index = x.length), x.push.apply(x, E.items)))
              : ((m.items = E.items), (m.index = 0));
        }
        function p(m) {
          return function () {
            m.items.length && n(m.items, m.index || 0);
          };
        }
        function b(m) {
          m.images &&
            (m.images.forEach(function (E) {
              E.type = "image";
            }),
              (m.items = m.images)),
            m.embed && ((m.embed.type = "video"), (m.items = [m.embed])),
            m.groupId && (m.group = m.groupId);
        }
        return t;
      })
    );
  });
  var Jb = c((Oz, Zb) => {
    "use strict";
    var St = qe(),
      JU = _r(),
      Re = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    St.define(
      "navbar",
      (Zb.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          u,
          s,
          f,
          _,
          p = St.env(),
          b = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          E = "w--open",
          I = "w--nav-dropdown-open",
          x = "w--nav-dropdown-toggle-open",
          T = "w--nav-dropdown-list-open",
          P = "w--nav-link-open",
          C = JU.triggers,
          N = e();
        (r.ready = r.design = r.preview = F),
          (r.destroy = function () {
            (N = e()), q(), s && s.length && s.each(J);
          });
        function F() {
          (f = p && St.env("design")),
            (_ = St.env("editor")),
            (u = e(document.body)),
            (s = o.find(m)),
            s.length && (s.each($), q(), K());
        }
        function q() {
          St.resize.off(j);
        }
        function K() {
          St.resize.on(j);
        }
        function j() {
          s.each(h);
        }
        function $(y, W) {
          var Z = e(W),
            z = e.data(W, m);
          z ||
            (z = e.data(W, m, {
              open: !1,
              el: Z,
              config: {},
              selectedIdx: -1,
            })),
            (z.menu = Z.find(".w-nav-menu")),
            (z.links = z.menu.find(".w-nav-link")),
            (z.dropdowns = z.menu.find(".w-dropdown")),
            (z.dropdownToggle = z.menu.find(".w-dropdown-toggle")),
            (z.dropdownList = z.menu.find(".w-dropdown-list")),
            (z.button = Z.find(".w-nav-button")),
            (z.container = Z.find(".w-container")),
            (z.overlayContainerId = "w-nav-overlay-" + y),
            (z.outside = v(z));
          var le = Z.find(".w-nav-brand");
          le &&
            le.attr("href") === "/" &&
            le.attr("aria-label") == null &&
            le.attr("aria-label", "home"),
            z.button.attr("style", "-webkit-user-select: text;"),
            z.button.attr("aria-label") == null &&
            z.button.attr("aria-label", "menu"),
            z.button.attr("role", "button"),
            z.button.attr("tabindex", "0"),
            z.button.attr("aria-controls", z.overlayContainerId),
            z.button.attr("aria-haspopup", "menu"),
            z.button.attr("aria-expanded", "false"),
            z.el.off(m),
            z.button.off(m),
            z.menu.off(m),
            S(z),
            f
              ? (ne(z), z.el.on("setting" + m, k(z)))
              : (G(z),
                z.button.on("click" + m, U(z)),
                z.menu.on("click" + m, "a", H(z)),
                z.button.on("keydown" + m, B(z)),
                z.el.on("keydown" + m, V(z))),
            h(y, W);
        }
        function J(y, W) {
          var Z = e.data(W, m);
          Z && (ne(Z), e.removeData(W, m));
        }
        function ne(y) {
          y.overlay && (re(y, !0), y.overlay.remove(), (y.overlay = null));
        }
        function G(y) {
          y.overlay ||
            ((y.overlay = e(b).appendTo(y.el)),
              y.overlay.attr("id", y.overlayContainerId),
              (y.parent = y.menu.parent()),
              re(y, !0));
        }
        function S(y) {
          var W = {},
            Z = y.config || {},
            z = (W.animation = y.el.attr("data-animation") || "default");
          (W.animOver = /^over/.test(z)),
            (W.animDirect = /left$/.test(z) ? -1 : 1),
            Z.animation !== z && y.open && t.defer(ie, y),
            (W.easing = y.el.attr("data-easing") || "ease"),
            (W.easing2 = y.el.attr("data-easing2") || "ease");
          var le = y.el.attr("data-duration");
          (W.duration = le != null ? Number(le) : 400),
            (W.docHeight = y.el.attr("data-doc-height")),
            (y.config = W);
        }
        function k(y) {
          return function (W, Z) {
            Z = Z || {};
            var z = i.width();
            S(y),
              Z.open === !0 && Y(y, !0),
              Z.open === !1 && re(y, !0),
              y.open &&
              t.defer(function () {
                z !== i.width() && ie(y);
              });
          };
        }
        function B(y) {
          return function (W) {
            switch (W.keyCode) {
              case Re.SPACE:
              case Re.ENTER:
                return U(y)(), W.preventDefault(), W.stopPropagation();
              case Re.ESCAPE:
                return re(y), W.preventDefault(), W.stopPropagation();
              case Re.ARROW_RIGHT:
              case Re.ARROW_DOWN:
              case Re.HOME:
              case Re.END:
                return y.open
                  ? (W.keyCode === Re.END
                    ? (y.selectedIdx = y.links.length - 1)
                    : (y.selectedIdx = 0),
                    ee(y),
                    W.preventDefault(),
                    W.stopPropagation())
                  : (W.preventDefault(), W.stopPropagation());
            }
          };
        }
        function V(y) {
          return function (W) {
            if (y.open)
              switch (
              ((y.selectedIdx = y.links.index(document.activeElement)),
                W.keyCode)
              ) {
                case Re.HOME:
                case Re.END:
                  return (
                    W.keyCode === Re.END
                      ? (y.selectedIdx = y.links.length - 1)
                      : (y.selectedIdx = 0),
                    ee(y),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Re.ESCAPE:
                  return (
                    re(y),
                    y.button.focus(),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Re.ARROW_LEFT:
                case Re.ARROW_UP:
                  return (
                    (y.selectedIdx = Math.max(-1, y.selectedIdx - 1)),
                    ee(y),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Re.ARROW_RIGHT:
                case Re.ARROW_DOWN:
                  return (
                    (y.selectedIdx = Math.min(
                      y.links.length - 1,
                      y.selectedIdx + 1
                    )),
                    ee(y),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
              }
          };
        }
        function ee(y) {
          if (y.links[y.selectedIdx]) {
            var W = y.links[y.selectedIdx];
            W.focus(), H(W);
          }
        }
        function ie(y) {
          y.open && (re(y, !0), Y(y, !0));
        }
        function U(y) {
          return a(function () {
            y.open ? re(y) : Y(y);
          });
        }
        function H(y) {
          return function (W) {
            var Z = e(this),
              z = Z.attr("href");
            if (!St.validClick(W.currentTarget)) {
              W.preventDefault();
              return;
            }
            z && z.indexOf("#") === 0 && y.open && re(y);
          };
        }
        function v(y) {
          return (
            y.outside && o.off("click" + m, y.outside),
            function (W) {
              var Z = e(W.target);
              (_ && Z.closest(".w-editor-bem-EditorOverlay").length) || g(y, Z);
            }
          );
        }
        var g = a(function (y, W) {
          if (y.open) {
            var Z = W.closest(".w-nav-menu");
            y.menu.is(Z) || re(y);
          }
        });
        function h(y, W) {
          var Z = e.data(W, m),
            z = (Z.collapsed = Z.button.css("display") !== "none");
          if ((Z.open && !z && !f && re(Z, !0), Z.container.length)) {
            var le = D(Z);
            Z.links.each(le), Z.dropdowns.each(le);
          }
          Z.open && se(Z);
        }
        var l = "max-width";
        function D(y) {
          var W = y.container.css(l);
          return (
            W === "none" && (W = ""),
            function (Z, z) {
              (z = e(z)), z.css(l, ""), z.css(l) === "none" && z.css(l, W);
            }
          );
        }
        function X(y, W) {
          W.setAttribute("data-nav-menu-open", "");
        }
        function O(y, W) {
          W.removeAttribute("data-nav-menu-open");
        }
        function Y(y, W) {
          if (y.open) return;
          (y.open = !0),
            y.menu.each(X),
            y.links.addClass(P),
            y.dropdowns.addClass(I),
            y.dropdownToggle.addClass(x),
            y.dropdownList.addClass(T),
            y.button.addClass(E);
          var Z = y.config,
            z = Z.animation;
          (z === "none" || !n.support.transform || Z.duration <= 0) && (W = !0);
          var le = se(y),
            Te = y.menu.outerHeight(!0),
            Ce = y.menu.outerWidth(!0),
            d = y.el.height(),
            w = y.el[0];
          if (
            (h(0, w),
              C.intro(0, w),
              St.redraw.up(),
              f || o.on("click" + m, y.outside),
              W)
          ) {
            A();
            return;
          }
          var R = "transform " + Z.duration + "ms " + Z.easing;
          if (
            (y.overlay &&
              ((N = y.menu.prev()), y.overlay.show().append(y.menu)),
              Z.animOver)
          ) {
            n(y.menu)
              .add(R)
              .set({ x: Z.animDirect * Ce, height: le })
              .start({ x: 0 })
              .then(A),
              y.overlay && y.overlay.width(Ce);
            return;
          }
          var L = d + Te;
          n(y.menu).add(R).set({ y: -L }).start({ y: 0 }).then(A);
          function A() {
            y.button.attr("aria-expanded", "true");
          }
        }
        function se(y) {
          var W = y.config,
            Z = W.docHeight ? o.height() : u.height();
          return (
            W.animOver
              ? y.menu.height(Z)
              : y.el.css("position") !== "fixed" && (Z -= y.el.outerHeight(!0)),
            y.overlay && y.overlay.height(Z),
            Z
          );
        }
        function re(y, W) {
          if (!y.open) return;
          (y.open = !1), y.button.removeClass(E);
          var Z = y.config;
          if (
            ((Z.animation === "none" ||
              !n.support.transform ||
              Z.duration <= 0) &&
              (W = !0),
              C.outro(0, y.el[0]),
              o.off("click" + m, y.outside),
              W)
          ) {
            n(y.menu).stop(), w();
            return;
          }
          var z = "transform " + Z.duration + "ms " + Z.easing2,
            le = y.menu.outerHeight(!0),
            Te = y.menu.outerWidth(!0),
            Ce = y.el.height();
          if (Z.animOver) {
            n(y.menu)
              .add(z)
              .start({ x: Te * Z.animDirect })
              .then(w);
            return;
          }
          var d = Ce + le;
          n(y.menu).add(z).start({ y: -d }).then(w);
          function w() {
            y.menu.height(""),
              n(y.menu).set({ x: 0, y: 0 }),
              y.menu.each(O),
              y.links.removeClass(P),
              y.dropdowns.removeClass(I),
              y.dropdownToggle.removeClass(x),
              y.dropdownList.removeClass(T),
              y.overlay &&
              y.overlay.children().length &&
              (N.length ? y.menu.insertAfter(N) : y.menu.prependTo(y.parent),
                y.overlay.attr("style", "").hide()),
              y.el.triggerHandler("w-close"),
              y.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var r_ = c((Az, t_) => {
    "use strict";
    var Rt = qe(),
      eW = _r(),
      dt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      e_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Rt.define(
      "slider",
      (t_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          u = Rt.env(),
          s = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          _ =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          p = "w-slider-force-show",
          b = eW.triggers,
          m,
          E = !1;
        (r.ready = function () {
          (a = Rt.env("design")), I();
        }),
          (r.design = function () {
            (a = !0), setTimeout(I, 1e3);
          }),
          (r.preview = function () {
            (a = !1), I();
          }),
          (r.redraw = function () {
            (E = !0), I(), (E = !1);
          }),
          (r.destroy = x);
        function I() {
          (o = i.find(s)), o.length && (o.each(C), !m && (x(), T()));
        }
        function x() {
          Rt.resize.off(P), Rt.redraw.off(r.redraw);
        }
        function T() {
          Rt.resize.on(P), Rt.redraw.on(r.redraw);
        }
        function P() {
          o.filter(":visible").each(V);
        }
        function C(v, g) {
          var h = e(g),
            l = e.data(g, s);
          l ||
            (l = e.data(g, s, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: h,
              config: {},
            })),
            (l.mask = h.children(".w-slider-mask")),
            (l.left = h.children(".w-slider-arrow-left")),
            (l.right = h.children(".w-slider-arrow-right")),
            (l.nav = h.children(".w-slider-nav")),
            (l.slides = l.mask.children(".w-slide")),
            l.slides.each(b.reset),
            E && (l.maskWidth = 0),
            h.attr("role") === void 0 && h.attr("role", "region"),
            h.attr("aria-label") === void 0 && h.attr("aria-label", "carousel");
          var D = l.mask.attr("id");
          if (
            (D || ((D = "w-slider-mask-" + v), l.mask.attr("id", D)),
              !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(_).appendTo(l.mask)),
              l.left.attr("role", "button"),
              l.left.attr("tabindex", "0"),
              l.left.attr("aria-controls", D),
              l.left.attr("aria-label") === void 0 &&
              l.left.attr("aria-label", "previous slide"),
              l.right.attr("role", "button"),
              l.right.attr("tabindex", "0"),
              l.right.attr("aria-controls", D),
              l.right.attr("aria-label") === void 0 &&
              l.right.attr("aria-label", "next slide"),
              !n.support.transform)
          ) {
            l.left.hide(), l.right.hide(), l.nav.hide(), (m = !0);
            return;
          }
          l.el.off(s),
            l.left.off(s),
            l.right.off(s),
            l.nav.off(s),
            N(l),
            a
              ? (l.el.on("setting" + s, S(l)), G(l), (l.hasTimer = !1))
              : (l.el.on("swipe" + s, S(l)),
                l.left.on("click" + s, j(l)),
                l.right.on("click" + s, $(l)),
                l.left.on("keydown" + s, K(l, j)),
                l.right.on("keydown" + s, K(l, $)),
                l.nav.on("keydown" + s, "> div", S(l)),
                l.config.autoplay &&
                !l.hasTimer &&
                ((l.hasTimer = !0), (l.timerCount = 1), ne(l)),
                l.el.on("mouseenter" + s, q(l, !0, "mouse")),
                l.el.on("focusin" + s, q(l, !0, "keyboard")),
                l.el.on("mouseleave" + s, q(l, !1, "mouse")),
                l.el.on("focusout" + s, q(l, !1, "keyboard"))),
            l.nav.on("click" + s, "> div", S(l)),
            u ||
            l.mask
              .contents()
              .filter(function () {
                return this.nodeType === 3;
              })
              .remove();
          var X = h.filter(":hidden");
          X.addClass(p);
          var O = h.parents(":hidden");
          O.addClass(p), E || V(v, g), X.removeClass(p), O.removeClass(p);
        }
        function N(v) {
          var g = {};
          (g.crossOver = 0),
            (g.animation = v.el.attr("data-animation") || "slide"),
            g.animation === "outin" &&
            ((g.animation = "cross"), (g.crossOver = 0.5)),
            (g.easing = v.el.attr("data-easing") || "ease");
          var h = v.el.attr("data-duration");
          if (
            ((g.duration = h != null ? parseInt(h, 10) : 500),
              F(v.el.attr("data-infinite")) && (g.infinite = !0),
              F(v.el.attr("data-disable-swipe")) && (g.disableSwipe = !0),
              F(v.el.attr("data-hide-arrows"))
                ? (g.hideArrows = !0)
                : v.config.hideArrows && (v.left.show(), v.right.show()),
              F(v.el.attr("data-autoplay")))
          ) {
            (g.autoplay = !0),
              (g.delay = parseInt(v.el.attr("data-delay"), 10) || 2e3),
              (g.timerMax = parseInt(v.el.attr("data-autoplay-limit"), 10));
            var l = "mousedown" + s + " touchstart" + s;
            a ||
              v.el.off(l).one(l, function () {
                G(v);
              });
          }
          var D = v.right.width();
          (g.edge = D ? D + 40 : 100), (v.config = g);
        }
        function F(v) {
          return v === "1" || v === "true";
        }
        function q(v, g, h) {
          return function (l) {
            if (g) v.hasFocus[h] = g;
            else if (
              e.contains(v.el.get(0), l.relatedTarget) ||
              ((v.hasFocus[h] = g),
                (v.hasFocus.mouse && h === "keyboard") ||
                (v.hasFocus.keyboard && h === "mouse"))
            )
              return;
            g
              ? (v.ariaLiveLabel.attr("aria-live", "polite"),
                v.hasTimer && G(v))
              : (v.ariaLiveLabel.attr("aria-live", "off"), v.hasTimer && ne(v));
          };
        }
        function K(v, g) {
          return function (h) {
            switch (h.keyCode) {
              case dt.SPACE:
              case dt.ENTER:
                return g(v)(), h.preventDefault(), h.stopPropagation();
            }
          };
        }
        function j(v) {
          return function () {
            B(v, { index: v.index - 1, vector: -1 });
          };
        }
        function $(v) {
          return function () {
            B(v, { index: v.index + 1, vector: 1 });
          };
        }
        function J(v, g) {
          var h = null;
          g === v.slides.length && (I(), ee(v)),
            t.each(v.anchors, function (l, D) {
              e(l.els).each(function (X, O) {
                e(O).index() === g && (h = D);
              });
            }),
            h != null && B(v, { index: h, immediate: !0 });
        }
        function ne(v) {
          G(v);
          var g = v.config,
            h = g.timerMax;
          (h && v.timerCount++ > h) ||
            (v.timerId = window.setTimeout(function () {
              v.timerId == null || a || ($(v)(), ne(v));
            }, g.delay));
        }
        function G(v) {
          window.clearTimeout(v.timerId), (v.timerId = null);
        }
        function S(v) {
          return function (g, h) {
            h = h || {};
            var l = v.config;
            if (a && g.type === "setting") {
              if (h.select === "prev") return j(v)();
              if (h.select === "next") return $(v)();
              if ((N(v), ee(v), h.select == null)) return;
              J(v, h.select);
              return;
            }
            if (g.type === "swipe")
              return l.disableSwipe || Rt.env("editor")
                ? void 0
                : h.direction === "left"
                  ? $(v)()
                  : h.direction === "right"
                    ? j(v)()
                    : void 0;
            if (v.nav.has(g.target).length) {
              var D = e(g.target).index();
              if (
                (g.type === "click" && B(v, { index: D }), g.type === "keydown")
              )
                switch (g.keyCode) {
                  case dt.ENTER:
                  case dt.SPACE: {
                    B(v, { index: D }), g.preventDefault();
                    break;
                  }
                  case dt.ARROW_LEFT:
                  case dt.ARROW_UP: {
                    k(v.nav, Math.max(D - 1, 0)), g.preventDefault();
                    break;
                  }
                  case dt.ARROW_RIGHT:
                  case dt.ARROW_DOWN: {
                    k(v.nav, Math.min(D + 1, v.pages)), g.preventDefault();
                    break;
                  }
                  case dt.HOME: {
                    k(v.nav, 0), g.preventDefault();
                    break;
                  }
                  case dt.END: {
                    k(v.nav, v.pages), g.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function k(v, g) {
          var h = v.children().eq(g).focus();
          v.children().not(h);
        }
        function B(v, g) {
          g = g || {};
          var h = v.config,
            l = v.anchors;
          v.previous = v.index;
          var D = g.index,
            X = {};
          D < 0
            ? ((D = l.length - 1),
              h.infinite &&
              ((X.x = -v.endX), (X.from = 0), (X.to = l[0].width)))
            : D >= l.length &&
            ((D = 0),
              h.infinite &&
              ((X.x = l[l.length - 1].width),
                (X.from = -l[l.length - 1].x),
                (X.to = X.from - X.x))),
            (v.index = D);
          var O = v.nav
            .children()
            .eq(D)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          v.nav
            .children()
            .not(O)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            h.hideArrows &&
            (v.index === l.length - 1 ? v.right.hide() : v.right.show(),
              v.index === 0 ? v.left.hide() : v.left.show());
          var Y = v.offsetX || 0,
            se = (v.offsetX = -l[v.index].x),
            re = { x: se, opacity: 1, visibility: "" },
            y = e(l[v.index].els),
            W = e(l[v.previous] && l[v.previous].els),
            Z = v.slides.not(y),
            z = h.animation,
            le = h.easing,
            Te = Math.round(h.duration),
            Ce = g.vector || (v.index > v.previous ? 1 : -1),
            d = "opacity " + Te + "ms " + le,
            w = "transform " + Te + "ms " + le;
          if (
            (y.find(e_).removeAttr("tabindex"),
              y.removeAttr("aria-hidden"),
              y.find("*").removeAttr("aria-hidden"),
              Z.find(e_).attr("tabindex", "-1"),
              Z.attr("aria-hidden", "true"),
              Z.find("*").attr("aria-hidden", "true"),
              a || (y.each(b.intro), Z.each(b.outro)),
              g.immediate && !E)
          ) {
            n(y).set(re), A();
            return;
          }
          if (v.index === v.previous) return;
          if (
            (a || v.ariaLiveLabel.text(`Slide ${D + 1} of ${l.length}.`),
              z === "cross")
          ) {
            var R = Math.round(Te - Te * h.crossOver),
              L = Math.round(Te - R);
            (d = "opacity " + R + "ms " + le),
              n(W).set({ visibility: "" }).add(d).start({ opacity: 0 }),
              n(y)
                .set({ visibility: "", x: se, opacity: 0, zIndex: v.depth++ })
                .add(d)
                .wait(L)
                .then({ opacity: 1 })
                .then(A);
            return;
          }
          if (z === "fade") {
            n(W).set({ visibility: "" }).stop(),
              n(y)
                .set({ visibility: "", x: se, opacity: 0, zIndex: v.depth++ })
                .add(d)
                .start({ opacity: 1 })
                .then(A);
            return;
          }
          if (z === "over") {
            (re = { x: v.endX }),
              n(W).set({ visibility: "" }).stop(),
              n(y)
                .set({
                  visibility: "",
                  zIndex: v.depth++,
                  x: se + l[v.index].width * Ce,
                })
                .add(w)
                .start({ x: se })
                .then(A);
            return;
          }
          h.infinite && X.x
            ? (n(v.slides.not(W))
              .set({ visibility: "", x: X.x })
              .add(w)
              .start({ x: se }),
              n(W).set({ visibility: "", x: X.from }).add(w).start({ x: X.to }),
              (v.shifted = W))
            : (h.infinite &&
              v.shifted &&
              (n(v.shifted).set({ visibility: "", x: Y }),
                (v.shifted = null)),
              n(v.slides).set({ visibility: "" }).add(w).start({ x: se }));
          function A() {
            (y = e(l[v.index].els)),
              (Z = v.slides.not(y)),
              z !== "slide" && (re.visibility = "hidden"),
              n(Z).set(re);
          }
        }
        function V(v, g) {
          var h = e.data(g, s);
          if (h) {
            if (U(h)) return ee(h);
            a && H(h) && ee(h);
          }
        }
        function ee(v) {
          var g = 1,
            h = 0,
            l = 0,
            D = 0,
            X = v.maskWidth,
            O = X - v.config.edge;
          O < 0 && (O = 0),
            (v.anchors = [{ els: [], x: 0, width: 0 }]),
            v.slides.each(function (se, re) {
              l - h > O &&
                (g++,
                  (h += X),
                  (v.anchors[g - 1] = { els: [], x: l, width: 0 })),
                (D = e(re).outerWidth(!0)),
                (l += D),
                (v.anchors[g - 1].width += D),
                v.anchors[g - 1].els.push(re);
              var y = se + 1 + " of " + v.slides.length;
              e(re).attr("aria-label", y), e(re).attr("role", "group");
            }),
            (v.endX = l),
            a && (v.pages = null),
            v.nav.length && v.pages !== g && ((v.pages = g), ie(v));
          var Y = v.index;
          Y >= g && (Y = g - 1), B(v, { immediate: !0, index: Y });
        }
        function ie(v) {
          var g = [],
            h,
            l = v.el.attr("data-nav-spacing");
          l && (l = parseFloat(l) + "px");
          for (var D = 0, X = v.pages; D < X; D++)
            (h = e(f)),
              h
                .attr("aria-label", "Show slide " + (D + 1) + " of " + X)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              v.nav.hasClass("w-num") && h.text(D + 1),
              l != null && h.css({ "margin-left": l, "margin-right": l }),
              g.push(h);
          v.nav.empty().append(g);
        }
        function U(v) {
          var g = v.mask.width();
          return v.maskWidth !== g ? ((v.maskWidth = g), !0) : !1;
        }
        function H(v) {
          var g = 0;
          return (
            v.slides.each(function (h, l) {
              g += e(l).outerWidth(!0);
            }),
            v.slidesWidth !== g ? ((v.slidesWidth = g), !0) : !1
          );
        }
        return r;
      })
    );
  });
  $s();
  Js();
  tu();
  iu();
  _r();
  Mb();
  kb();
  Xb();
  Wb();
  Bb();
  Kb();
  $b();
  Jb();
  r_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e6ff9f79-f479-fa42-6f69-a3df18a8ef4a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e6ff9f79-f479-fa42-6f69-a3df18a8ef4a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688457367249,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e6ff9f79-f479-fa42-6f69-a3df18a8ef4a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e6ff9f79-f479-fa42-6f69-a3df18a8ef4a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688457367249,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-67",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|088404cf-0548-2485-4d6d-7e75a7f5c20a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|088404cf-0548-2485-4d6d-7e75a7f5c20a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720850799248,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|088404cf-0548-2485-4d6d-7e75a7f5c20a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|088404cf-0548-2485-4d6d-7e75a7f5c20a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720850799248,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|7883f57d-8442-eace-55ae-27b6a7c86bfc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|7883f57d-8442-eace-55ae-27b6a7c86bfc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1720851268266,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|7883f57d-8442-eace-55ae-27b6a7c86bfc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|7883f57d-8442-eace-55ae-27b6a7c86bfc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720851268267,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|87cf118c-bf74-a65b-7891-4395ec6a6088",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|87cf118c-bf74-a65b-7891-4395ec6a6088",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720851583437,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|87cf118c-bf74-a65b-7891-4395ec6a6088",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|87cf118c-bf74-a65b-7891-4395ec6a6088",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720851583437,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|c6a23d74-8a8d-5098-67d4-1b77720a1b8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|c6a23d74-8a8d-5098-67d4-1b77720a1b8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720851592635,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|c6a23d74-8a8d-5098-67d4-1b77720a1b8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|c6a23d74-8a8d-5098-67d4-1b77720a1b8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720851592636,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|b3ddffdf-7cac-c101-9ad8-aa4d610aee03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|b3ddffdf-7cac-c101-9ad8-aa4d610aee03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720851605506,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|b3ddffdf-7cac-c101-9ad8-aa4d610aee03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|b3ddffdf-7cac-c101-9ad8-aa4d610aee03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720851605535,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|73801482-e471-84f5-859a-8721dc0d07a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|73801482-e471-84f5-859a-8721dc0d07a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720863646060,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|73801482-e471-84f5-859a-8721dc0d07a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|73801482-e471-84f5-859a-8721dc0d07a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720863646060,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|37f6f262-6d39-b3ce-5eb4-34e6f74c6b30",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|37f6f262-6d39-b3ce-5eb4-34e6f74c6b30",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720863986332,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|37f6f262-6d39-b3ce-5eb4-34e6f74c6b30",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|37f6f262-6d39-b3ce-5eb4-34e6f74c6b30",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720863986333,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|5690e697-a276-6d88-a919-04abe5f849d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|5690e697-a276-6d88-a919-04abe5f849d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720864001468,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|5690e697-a276-6d88-a919-04abe5f849d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|5690e697-a276-6d88-a919-04abe5f849d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720864001469,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|1505951c-763a-fbc1-7267-96c9653878b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|1505951c-763a-fbc1-7267-96c9653878b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720864011531,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|1505951c-763a-fbc1-7267-96c9653878b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|1505951c-763a-fbc1-7267-96c9653878b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720864011532,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691103c9320f95ac39a0458|ba58ad3b-bb9f-56d9-0e52-301a798339cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691103c9320f95ac39a0458|ba58ad3b-bb9f-56d9-0e52-301a798339cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720864299238,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691103c9320f95ac39a0458|ba58ad3b-bb9f-56d9-0e52-301a798339cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691103c9320f95ac39a0458|ba58ad3b-bb9f-56d9-0e52-301a798339cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720864299238,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-67",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|e16ca6ed-a1bb-d5ef-1ea9-2dce124449cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|e16ca6ed-a1bb-d5ef-1ea9-2dce124449cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720240181852,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|e16ca6ed-a1bb-d5ef-1ea9-2dce124449cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|e16ca6ed-a1bb-d5ef-1ea9-2dce124449cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720240181853,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8d0|f1b9b2f6-86c0-b361-0fe3-df8dbf4aa60f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8d0|f1b9b2f6-86c0-b361-0fe3-df8dbf4aa60f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720867936895,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8d0|f1b9b2f6-86c0-b361-0fe3-df8dbf4aa60f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8d0|f1b9b2f6-86c0-b361-0fe3-df8dbf4aa60f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720867936895,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-71",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|74d38ea5-0dc7-38e0-8f04-c76bbefb8460",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|74d38ea5-0dc7-38e0-8f04-c76bbefb8460",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720869916540,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|74d38ea5-0dc7-38e0-8f04-c76bbefb8460",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|74d38ea5-0dc7-38e0-8f04-c76bbefb8460",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720869916540,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|9a668aab-69ec-3938-75b3-eb68f40d7dbf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|9a668aab-69ec-3938-75b3-eb68f40d7dbf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720870071033,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|9a668aab-69ec-3938-75b3-eb68f40d7dbf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|9a668aab-69ec-3938-75b3-eb68f40d7dbf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720870071033,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|dfda70c1-f637-c15c-2ad3-5de9a20736eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|dfda70c1-f637-c15c-2ad3-5de9a20736eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720870078706,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|dfda70c1-f637-c15c-2ad3-5de9a20736eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|dfda70c1-f637-c15c-2ad3-5de9a20736eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720870078706,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|6211b4e4-bcd5-f207-3cbe-2e93fbce5b00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|6211b4e4-bcd5-f207-3cbe-2e93fbce5b00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720870078749,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|6211b4e4-bcd5-f207-3cbe-2e93fbce5b00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|6211b4e4-bcd5-f207-3cbe-2e93fbce5b00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720870078749,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|4f272c6b-8a20-bbe5-6414-843f20cfe03e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|4f272c6b-8a20-bbe5-6414-843f20cfe03e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720870083300,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|4f272c6b-8a20-bbe5-6414-843f20cfe03e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|4f272c6b-8a20-bbe5-6414-843f20cfe03e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720870083300,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|737c03e6-ec36-7b11-1af5-1770c923787d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|737c03e6-ec36-7b11-1af5-1770c923787d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720871985673,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|737c03e6-ec36-7b11-1af5-1770c923787d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|737c03e6-ec36-7b11-1af5-1770c923787d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1720871985674,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691102e08cdeb34b155c89d|11e399df-77e7-f55f-8d3d-98ffef52840c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691102e08cdeb34b155c89d|11e399df-77e7-f55f-8d3d-98ffef52840c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721022740043,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691102e08cdeb34b155c89d|11e399df-77e7-f55f-8d3d-98ffef52840c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691102e08cdeb34b155c89d|11e399df-77e7-f55f-8d3d-98ffef52840c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721022740044,
    },
    "e-84": {
      id: "e-84",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c8|e4032b0c-5597-7762-cf02-dac8b64c214a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c8|e4032b0c-5597-7762-cf02-dac8b64c214a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721121968919,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c8|e4032b0c-5597-7762-cf02-dac8b64c214a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c8|e4032b0c-5597-7762-cf02-dac8b64c214a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721121968920,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911066f44397066e20a0f6|3bfc7bfd-c50c-60f7-f67d-213a9674423c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911066f44397066e20a0f6|3bfc7bfd-c50c-60f7-f67d-213a9674423c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721122098488,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911066f44397066e20a0f6|3bfc7bfd-c50c-60f7-f67d-213a9674423c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911066f44397066e20a0f6|3bfc7bfd-c50c-60f7-f67d-213a9674423c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721122098489,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66920a65acbd932899460da6|12b01448-c837-b957-4a09-1fdfbe4b9c91",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66920a65acbd932899460da6|12b01448-c837-b957-4a09-1fdfbe4b9c91",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721130891324,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66920a65acbd932899460da6|12b01448-c837-b957-4a09-1fdfbe4b9c91",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66920a65acbd932899460da6|12b01448-c837-b957-4a09-1fdfbe4b9c91",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721130891324,
    },
    "e-94": {
      id: "e-94",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-22", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|5a00e3e6-c2d6-c6ba-b61d-8af62e9dfc11",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|5a00e3e6-c2d6-c6ba-b61d-8af62e9dfc11",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-22-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721196780301,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-23", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|00188368-11f1-783a-f713-ac7107ad0d92",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|00188368-11f1-783a-f713-ac7107ad0d92",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-23-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721196871317,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-24", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|fac76033-2683-7a2f-8311-c5df4f0fc2f2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|fac76033-2683-7a2f-8311-c5df4f0fc2f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-24-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721196913980,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-27", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|f434cdee-568b-3731-f1e4-1951a306984a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|f434cdee-568b-3731-f1e4-1951a306984a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-27-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721218092553,
    },
    "e-100": {
      id: "e-100",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-27", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|e0270a00-6cde-42ea-f601-282631db8f64",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|e0270a00-6cde-42ea-f601-282631db8f64",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-27-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721218247528,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-27", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|4aacb364-74c4-1a99-37e7-4dc4fc56006e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|4aacb364-74c4-1a99-37e7-4dc4fc56006e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-27-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721218287552,
    },
    "e-102": {
      id: "e-102",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-27", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691102e08cdeb34b155c89d|2f178461-c959-8f44-f5d6-b388502a86a6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691102e08cdeb34b155c89d|2f178461-c959-8f44-f5d6-b388502a86a6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-27-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721218367632,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-27", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691102e08cdeb34b155c89d|ba21527b-9c88-7a34-6139-86b033ee675b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691102e08cdeb34b155c89d|ba21527b-9c88-7a34-6139-86b033ee675b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-27-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721218461127,
    },
    "e-104": {
      id: "e-104",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-27", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|6c83304b-dced-33b6-620b-b41a04559dc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|6c83304b-dced-33b6-620b-b41a04559dc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-27-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721218609416,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-27", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|15210bf9-9e06-d48f-2eac-d68333011e82",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|15210bf9-9e06-d48f-2eac-d68333011e82",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-27-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721218669007,
    },
    "e-106": {
      id: "e-106",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-27", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691107170b0a9b098e39f61|c6fc3251-cc13-c38c-a229-ee99a837e2fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691107170b0a9b098e39f61|c6fc3251-cc13-c38c-a229-ee99a837e2fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-27-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721218735999,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-27", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c8|3648982b-9f87-fb39-a5a4-54ddfbe93b1b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c8|3648982b-9f87-fb39-a5a4-54ddfbe93b1b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-27-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721218800647,
    },
    "e-108": {
      id: "e-108",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-26", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|d693cd3b-957b-7301-2e79-976ee2a4c905",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|d693cd3b-957b-7301-2e79-976ee2a4c905",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-26-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721303803213,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-25", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|66f19a97-0c19-1700-600e-e8f23fc2d115",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|66f19a97-0c19-1700-600e-e8f23fc2d115",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-25-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721303804076,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|45ea2a32-ceaa-7c6d-2556-83c68056cbe7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|45ea2a32-ceaa-7c6d-2556-83c68056cbe7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721805022613,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|45ea2a32-ceaa-7c6d-2556-83c68056cbe7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|45ea2a32-ceaa-7c6d-2556-83c68056cbe7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721805022614,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-114" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|262b3a1e-4d41-de14-fdbb-313ca976d4e3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|262b3a1e-4d41-de14-fdbb-313ca976d4e3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723010761106,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-116" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|0868ec51-fc18-4420-da3e-d2da180b1a29",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|0868ec51-fc18-4420-da3e-d2da180b1a29",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723010892217,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-118" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|1d45e18a-713a-155c-2075-5762d61aec03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|1d45e18a-713a-155c-2075-5762d61aec03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723010906855,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-120" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|baf9ff53-f4fc-758c-3b06-999a514f65f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|baf9ff53-f4fc-758c-3b06-999a514f65f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723010915855,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-122" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|2ce5e250-6f61-360b-1bca-71c10bd832f2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|2ce5e250-6f61-360b-1bca-71c10bd832f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723010934070,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-124" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|34965c26-1e17-9abe-0831-5f03c4bc7951",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|34965c26-1e17-9abe-0831-5f03c4bc7951",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723010966111,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-126" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|fb1e4b6e-2bb8-7ecf-e800-08bc02021149",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|fb1e4b6e-2bb8-7ecf-e800-08bc02021149",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1723010976143,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-128" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|37f6f262-6d39-b3ce-5eb4-34e6f74c6b2d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|37f6f262-6d39-b3ce-5eb4-34e6f74c6b2d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723010986759,
    },
    "e-129": {
      id: "e-129",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-130" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|5690e697-a276-6d88-a919-04abe5f849cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|5690e697-a276-6d88-a919-04abe5f849cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1723010994823,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-132" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|1505951c-763a-fbc1-7267-96c9653878b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|1505951c-763a-fbc1-7267-96c9653878b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723011006231,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-134" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|d8b24e80-de2e-faf0-39d3-e8a2d6e6055b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|d8b24e80-de2e-faf0-39d3-e8a2d6e6055b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011028503,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-136" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|09e45687-feab-1e86-72d9-1e0128674e47",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|09e45687-feab-1e86-72d9-1e0128674e47",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1723011036607,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-138" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|be534198-b5f1-5cad-161f-891b556d3374",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|be534198-b5f1-5cad-161f-891b556d3374",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723011044991,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-140" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|0399e82a-7a1d-45ab-d255-5ad049c52ea5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|0399e82a-7a1d-45ab-d255-5ad049c52ea5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011088070,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-142" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c3|90bb670c-d125-499d-a8d3-8acb8875fa2b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c3|90bb670c-d125-499d-a8d3-8acb8875fa2b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011112783,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-144" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "9807520c-65b7-e828-71bd-909a6cfe1801",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "9807520c-65b7-e828-71bd-909a6cfe1801",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011174607,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-146" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "ddc32c04-37f5-79f7-2115-711679c093fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ddc32c04-37f5-79f7-2115-711679c093fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011195457,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-148" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "9807520c-65b7-e828-71bd-909a6cfe182b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "9807520c-65b7-e828-71bd-909a6cfe182b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011209270,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-150" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "ee9c26a2-6a21-f80f-595e-aa48d76665b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ee9c26a2-6a21-f80f-595e-aa48d76665b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011227607,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-152" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "cb037540-749e-e19f-b2eb-31467c709319",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "cb037540-749e-e19f-b2eb-31467c709319",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011238286,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-154" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|a9fb0f2c-0a24-c11b-bf7b-8ef1fabf79fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|a9fb0f2c-0a24-c11b-bf7b-8ef1fabf79fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011349081,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-156" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|eff3936a-5895-aaf7-37f3-0901c8212589",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|eff3936a-5895-aaf7-37f3-0901c8212589",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011360278,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-158" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|1c2c1126-dd02-85bc-239c-50fa943a0b09",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|1c2c1126-dd02-85bc-239c-50fa943a0b09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011369934,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-160" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|ef83c728-d688-f06e-58ab-6b9e1984d270",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|ef83c728-d688-f06e-58ab-6b9e1984d270",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1723011387582,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-162" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|bacc0cf5-c0cf-2746-61ec-5f6fe7f2d33e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|bacc0cf5-c0cf-2746-61ec-5f6fe7f2d33e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723011432103,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-164" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|9cd2bf1a-0796-06ee-9e5b-3a632b509120",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|9cd2bf1a-0796-06ee-9e5b-3a632b509120",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011453433,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-166" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|d4ace722-6dc3-973c-8ee6-95845450b8c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|d4ace722-6dc3-973c-8ee6-95845450b8c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011541378,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-168" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|4aacb364-74c4-1a99-37e7-4dc4fc56006e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|4aacb364-74c4-1a99-37e7-4dc4fc56006e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011587250,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-170" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|896fae1a-abbe-1513-2762-973784e8a58f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|896fae1a-abbe-1513-2762-973784e8a58f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1723011658295,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-172" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|72032708-d417-e2ee-6ad0-f1bea48da36c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|72032708-d417-e2ee-6ad0-f1bea48da36c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011667143,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-174" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|21f18b38-621a-f36b-34b6-574cf5be2757",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|21f18b38-621a-f36b-34b6-574cf5be2757",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011685639,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-176" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911020b99e078fd88dd2b1|38d4f268-c03f-87bf-1a83-521c44756e2e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911020b99e078fd88dd2b1|38d4f268-c03f-87bf-1a83-521c44756e2e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011698175,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-178" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691102e08cdeb34b155c89d|e5e46e55-3763-6aa9-eb4e-da65a949c654",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691102e08cdeb34b155c89d|e5e46e55-3763-6aa9-eb4e-da65a949c654",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011732047,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-180" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691102e08cdeb34b155c89d|b1351e53-1b69-08b7-9234-908fc43a747c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691102e08cdeb34b155c89d|b1351e53-1b69-08b7-9234-908fc43a747c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011742024,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-182" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691102e08cdeb34b155c89d|a1542824-c3a6-dc44-3a14-b09e2ef2455a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691102e08cdeb34b155c89d|a1542824-c3a6-dc44-3a14-b09e2ef2455a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1723011755919,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-184" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691102e08cdeb34b155c89d|a80ae883-e52c-a564-79c8-007fe728b111",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691102e08cdeb34b155c89d|a80ae883-e52c-a564-79c8-007fe728b111",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723011763888,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-186" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691102e08cdeb34b155c89d|a84e9b02-3ee9-86e5-19da-601f856354cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691102e08cdeb34b155c89d|a84e9b02-3ee9-86e5-19da-601f856354cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011774095,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-188" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691102e08cdeb34b155c89d|d2af2fc4-1ccf-49a3-d97a-dafeba9bc0fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691102e08cdeb34b155c89d|d2af2fc4-1ccf-49a3-d97a-dafeba9bc0fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011788159,
    },
    "e-189": {
      id: "e-189",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-190" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691103c9320f95ac39a0458|ba58ad3b-bb9f-56d9-0e52-301a798339cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691103c9320f95ac39a0458|ba58ad3b-bb9f-56d9-0e52-301a798339cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011873015,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-194" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|1a1f7c8a-242b-8cd7-20e7-ee2fe4533028",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|1a1f7c8a-242b-8cd7-20e7-ee2fe4533028",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011899183,
    },
    "e-197": {
      id: "e-197",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-198" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|cead2a1d-a747-7b3b-1842-b3db2617b44b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|cead2a1d-a747-7b3b-1842-b3db2617b44b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011951247,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-200" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|3abc9484-7893-b17c-980c-f1ec63c3be5a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|3abc9484-7893-b17c-980c-f1ec63c3be5a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723011979142,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-202" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|92267910-2226-18f1-7c49-e9926775b904",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|92267910-2226-18f1-7c49-e9926775b904",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723011988798,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-204" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|ef8cade4-7e4e-841b-dc06-f27c04aa3494",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|ef8cade4-7e4e-841b-dc06-f27c04aa3494",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723012008713,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-206" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|b572541f-2dd6-f97d-2cbc-a29a4b5ae01a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|b572541f-2dd6-f97d-2cbc-a29a4b5ae01a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723012019510,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-208" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|01bb520e-6866-ba58-45c1-940ed4ef3d62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|01bb520e-6866-ba58-45c1-940ed4ef3d62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012031855,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-210" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|66d5ec9a-a0a0-ce51-cbf6-c9776ed073d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|66d5ec9a-a0a0-ce51-cbf6-c9776ed073d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012072151,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-212" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|fd35b8a3-4882-e57d-ab7b-b43e1da90ee6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|fd35b8a3-4882-e57d-ab7b-b43e1da90ee6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012079343,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-214" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|cf0350c7-5fea-f714-4aa7-bb31613c41c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|cf0350c7-5fea-f714-4aa7-bb31613c41c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012093151,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-216" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|5b9cbfbf-36d2-09ad-a7c4-45e47ac17bef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|5b9cbfbf-36d2-09ad-a7c4-45e47ac17bef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012101815,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-218" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691104b9c624586895a07b0|b8628aa9-2741-1a01-80df-83aaf62a063f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691104b9c624586895a07b0|b8628aa9-2741-1a01-80df-83aaf62a063f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012325593,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-220" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|9edb9b22-6748-13bd-4a26-b17979cb5606",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|9edb9b22-6748-13bd-4a26-b17979cb5606",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012401238,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-222" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|1c2f9eb7-903c-3a43-fe79-f54e1d04cae9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|1c2f9eb7-903c-3a43-fe79-f54e1d04cae9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012410278,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-224" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|acbe3069-4232-247a-0a26-d4c6e45a3376",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|acbe3069-4232-247a-0a26-d4c6e45a3376",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012419374,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-226" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|270b41d4-2215-fe50-fd82-54442077b656",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|270b41d4-2215-fe50-fd82-54442077b656",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012443119,
    },
    "e-227": {
      id: "e-227",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-228" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|178ba674-0d3b-3eaf-3723-63433d19c723",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|178ba674-0d3b-3eaf-3723-63433d19c723",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1723012454135,
    },
    "e-229": {
      id: "e-229",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-230" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|85e89d61-712c-1504-1e25-6ba4ee618cad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|85e89d61-712c-1504-1e25-6ba4ee618cad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723012466026,
    },
    "e-231": {
      id: "e-231",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-232" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|01f57e6b-df4a-9cad-270b-5220c2fa2e5e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|01f57e6b-df4a-9cad-270b-5220c2fa2e5e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012478633,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-234" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|01f57e6b-df4a-9cad-270b-5220c2fa2e64",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|01f57e6b-df4a-9cad-270b-5220c2fa2e64",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1723012489063,
    },
    "e-235": {
      id: "e-235",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-236" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|01f57e6b-df4a-9cad-270b-5220c2fa2e6e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|01f57e6b-df4a-9cad-270b-5220c2fa2e6e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723012497303,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-238" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691105b5fccc42668a61cf4|6be62e1b-95ac-3880-1f36-099f6a1ce538",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691105b5fccc42668a61cf4|6be62e1b-95ac-3880-1f36-099f6a1ce538",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012505575,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-240" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66911066f44397066e20a0f6|bf71aa05-770b-328f-7c7a-28776744d25b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66911066f44397066e20a0f6|bf71aa05-770b-328f-7c7a-28776744d25b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012520313,
    },
    "e-241": {
      id: "e-241",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-242" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691107170b0a9b098e39f61|2819239a-9968-f8a5-462c-e07072d321b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691107170b0a9b098e39f61|2819239a-9968-f8a5-462c-e07072d321b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012557218,
    },
    "e-243": {
      id: "e-243",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-244" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691107170b0a9b098e39f61|483dc391-7a70-4186-83f2-9dffe5d92581",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691107170b0a9b098e39f61|483dc391-7a70-4186-83f2-9dffe5d92581",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012568239,
    },
    "e-245": {
      id: "e-245",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-246" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691107170b0a9b098e39f61|923cad92-fe8a-2472-6453-b34827b05686",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691107170b0a9b098e39f61|923cad92-fe8a-2472-6453-b34827b05686",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012577735,
    },
    "e-247": {
      id: "e-247",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-248" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691107170b0a9b098e39f61|8b642aed-361b-034b-15f0-54876288f242",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691107170b0a9b098e39f61|8b642aed-361b-034b-15f0-54876288f242",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723012591211,
    },
    "e-249": {
      id: "e-249",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-250" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691107170b0a9b098e39f61|afbeb85f-206c-9121-e850-3ed22cafbfce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691107170b0a9b098e39f61|afbeb85f-206c-9121-e850-3ed22cafbfce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723012600969,
    },
    "e-251": {
      id: "e-251",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-252" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6691107170b0a9b098e39f61|81498f17-4404-cead-4cb4-cdb0f027c169",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6691107170b0a9b098e39f61|81498f17-4404-cead-4cb4-cdb0f027c169",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723012622574,
    },
    "e-253": {
      id: "e-253",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-254" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8ce|51506210-a64a-fa97-8e8d-e5a7be8b24c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8ce|51506210-a64a-fa97-8e8d-e5a7be8b24c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012650254,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-256" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66920a65acbd932899460da6|c8d13086-f9d4-9ae9-49ee-b758a7462554",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66920a65acbd932899460da6|c8d13086-f9d4-9ae9-49ee-b758a7462554",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012692927,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-258" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66920a65acbd932899460da6|cc0f006c-dc79-b064-df93-200bf14dc4fd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66920a65acbd932899460da6|cc0f006c-dc79-b064-df93-200bf14dc4fd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012704087,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-260" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66920a65acbd932899460da6|54695490-1847-ba24-e1ec-1216021cf460",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66920a65acbd932899460da6|54695490-1847-ba24-e1ec-1216021cf460",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012713964,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-262" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66920a65acbd932899460da6|eaf0c554-f8ca-800e-37c3-a8ba45e3704a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66920a65acbd932899460da6|eaf0c554-f8ca-800e-37c3-a8ba45e3704a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012727527,
    },
    "e-263": {
      id: "e-263",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-264" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66920a65acbd932899460da6|12b01448-c837-b957-4a09-1fdfbe4b9c8e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66920a65acbd932899460da6|12b01448-c837-b957-4a09-1fdfbe4b9c8e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012738095,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-266" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c9|0ec3647e-0e3e-9ef8-427d-8a3bb0fbd4a2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c9|0ec3647e-0e3e-9ef8-427d-8a3bb0fbd4a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1723012758622,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-268" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c9|cf381cd2-8def-a845-d744-3d37c2ec00e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c9|cf381cd2-8def-a845-d744-3d37c2ec00e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1723012768190,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-270" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c9|d49d060d-eae0-a5ac-4ac7-d13292dc24d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c9|d49d060d-eae0-a5ac-4ac7-d13292dc24d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012782806,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-272" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c8|b263ef24-c273-e47e-ee4f-360a4a391fd1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c8|b263ef24-c273-e47e-ee4f-360a4a391fd1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012810158,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-274" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c8|134a15ba-5487-103e-6d61-35c9a487ad8c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c8|134a15ba-5487-103e-6d61-35c9a487ad8c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012848710,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-276" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c8|9af3fff8-7ad3-80c9-fb61-ff37e7dfde52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c8|9af3fff8-7ad3-80c9-fb61-ff37e7dfde52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012876327,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-278" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6690b1e099cecff1aa3df8c8|e4032b0c-5597-7762-cf02-dac8b64c2147",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6690b1e099cecff1aa3df8c8|e4032b0c-5597-7762-cf02-dac8b64c2147",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1723012951686,
    },
  },
  actionLists: {
    "a-3": {
      id: "a-3",
      title: "Dropdown [Open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                yValue: -15,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1684479538925,
    },
    "a-4": {
      id: "a-4",
      title: "Dropdown [Close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1684479538925,
    },
    "a-5": {
      id: "a-5",
      title: "Service Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-title",
                  selectorGuids: ["dc453631-c084-8d91-7f2e-edd92258a23c"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-decoration",
                  selectorGuids: ["5c955549-1ee7-6592-dcbc-7672b084e2c2"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-9",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6690b1e099cecff1aa3df8c3|088404cf-0548-2485-4d6d-7e75a7f5c20a",
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-11",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-icon-wrap",
                  selectorGuids: ["bb253df2-29d0-2b8a-a8f4-697fb70e3c07"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-dark",
                  selectorGuids: ["722ee0eb-c39d-84d7-a73e-43ef97db781c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-5-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-light",
                  selectorGuids: ["0dfa3426-505f-900f-255d-9fe163161a14"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-title",
                  selectorGuids: ["dc453631-c084-8d91-7f2e-edd92258a23c"],
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-decoration",
                  selectorGuids: ["5c955549-1ee7-6592-dcbc-7672b084e2c2"],
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-10",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6690b1e099cecff1aa3df8c3|088404cf-0548-2485-4d6d-7e75a7f5c20a",
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-12",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-icon-wrap",
                  selectorGuids: ["bb253df2-29d0-2b8a-a8f4-697fb70e3c07"],
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-dark",
                  selectorGuids: ["722ee0eb-c39d-84d7-a73e-43ef97db781c"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-5-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-light",
                  selectorGuids: ["0dfa3426-505f-900f-255d-9fe163161a14"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1720850801825,
    },
    "a-6": {
      id: "a-6",
      title: "Service Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-title",
                  selectorGuids: ["dc453631-c084-8d91-7f2e-edd92258a23c"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-decoration",
                  selectorGuids: ["5c955549-1ee7-6592-dcbc-7672b084e2c2"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6690b1e099cecff1aa3df8c3|088404cf-0548-2485-4d6d-7e75a7f5c20a",
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-icon-wrap",
                  selectorGuids: ["bb253df2-29d0-2b8a-a8f4-697fb70e3c07"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-dark",
                  selectorGuids: ["722ee0eb-c39d-84d7-a73e-43ef97db781c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-6-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-light",
                  selectorGuids: ["0dfa3426-505f-900f-255d-9fe163161a14"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1720850801825,
    },
    "a-10": {
      id: "a-10",
      title: "Work Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-image",
                  selectorGuids: ["39a254ff-e32e-6366-ae45-ebef3ef5fdd6"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-10-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-images",
                  selectorGuids: ["c89b2657-ce64-1085-f070-3db78eaf3360"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-image",
                  selectorGuids: ["39a254ff-e32e-6366-ae45-ebef3ef5fdd6"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-10-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-images",
                  selectorGuids: ["c89b2657-ce64-1085-f070-3db78eaf3360"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1720863650515,
    },
    "a-11": {
      id: "a-11",
      title: "Work Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-image",
                  selectorGuids: ["39a254ff-e32e-6366-ae45-ebef3ef5fdd6"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-images",
                  selectorGuids: ["c89b2657-ce64-1085-f070-3db78eaf3360"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1720863650515,
    },
    "a-12": {
      id: "a-12",
      title: "Button Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-arrow-icon",
                  selectorGuids: ["9910580a-826a-3e70-c175-1380d9dc3b80"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-arrow-icon",
                  selectorGuids: ["9910580a-826a-3e70-c175-1380d9dc3b80"],
                },
                xValue: 8,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1720240184401,
    },
    "a-13": {
      id: "a-13",
      title: "Button Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-arrow-icon",
                  selectorGuids: ["9910580a-826a-3e70-c175-1380d9dc3b80"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1720240184401,
    },
    "a-14": {
      id: "a-14",
      title: "Split Service Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".split-service-title",
                  selectorGuids: ["40d5f27e-0ab7-3366-23df-1a50a229afb2"],
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-dark",
                  selectorGuids: ["722ee0eb-c39d-84d7-a73e-43ef97db781c"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-light",
                  selectorGuids: ["0dfa3426-505f-900f-255d-9fe163161a14"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6690b1e099cecff1aa3df8c3|088404cf-0548-2485-4d6d-7e75a7f5c20a",
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-11",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".split-service-icon-wrap",
                  selectorGuids: ["d5e8a54d-c9fa-a3c8-2aa4-ee5d3e9ce8e7"],
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".split-service-title",
                  selectorGuids: ["40d5f27e-0ab7-3366-23df-1a50a229afb2"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-dark",
                  selectorGuids: ["722ee0eb-c39d-84d7-a73e-43ef97db781c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-light",
                  selectorGuids: ["0dfa3426-505f-900f-255d-9fe163161a14"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-10",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6690b1e099cecff1aa3df8c3|088404cf-0548-2485-4d6d-7e75a7f5c20a",
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-12",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".split-service-icon-wrap",
                  selectorGuids: ["d5e8a54d-c9fa-a3c8-2aa4-ee5d3e9ce8e7"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1720850801825,
    },
    "a-15": {
      id: "a-15",
      title: "Split Service Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".split-service-title",
                  selectorGuids: ["40d5f27e-0ab7-3366-23df-1a50a229afb2"],
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-dark",
                  selectorGuids: ["722ee0eb-c39d-84d7-a73e-43ef97db781c"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-light",
                  selectorGuids: ["0dfa3426-505f-900f-255d-9fe163161a14"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6690b1e099cecff1aa3df8c3|088404cf-0548-2485-4d6d-7e75a7f5c20a",
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".split-service-icon-wrap",
                  selectorGuids: ["d5e8a54d-c9fa-a3c8-2aa4-ee5d3e9ce8e7"],
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1720850801825,
    },
    "a-16": {
      id: "a-16",
      title: "Split Work Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".split-project-info",
                  selectorGuids: ["6cc73367-a231-7d4a-638f-599b7adc802d"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".split-project-info",
                  selectorGuids: ["6cc73367-a231-7d4a-638f-599b7adc802d"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1720871993389,
    },
    "a-17": {
      id: "a-17",
      title: "Split Work Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".split-project-info",
                  selectorGuids: ["6cc73367-a231-7d4a-638f-599b7adc802d"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1720871993389,
    },
    "a-18": {
      id: "a-18",
      title: "Team Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["93768b8a-4b9c-4e8a-9488-92b99a26e482"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-18-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["93768b8a-4b9c-4e8a-9488-92b99a26e482"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721022742786,
    },
    "a-19": {
      id: "a-19",
      title: "Team Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["93768b8a-4b9c-4e8a-9488-92b99a26e482"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1721022742786,
    },
    "a-20": {
      id: "a-20",
      title: "Blog Image Hover [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["cc31ccd2-115e-84a4-e4b7-bb0b2a3f58de"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["cc31ccd2-115e-84a4-e4b7-bb0b2a3f58de"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721121981503,
    },
    "a-21": {
      id: "a-21",
      title: "Blog Image Hover [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["cc31ccd2-115e-84a4-e4b7-bb0b2a3f58de"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1721121981503,
    },
    "a-22": {
      id: "a-22",
      title: "Scroll Image Move #1",
      continuousParameterGroups: [
        {
          id: "a-22-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-22-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".project-image-one-wrap",
                      selectorGuids: ["8936e443-a0b2-9eaf-d462-764acea3d390"],
                    },
                    yValue: 30,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-22-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeInOut",
                    duration: 500,
                    target: {
                      selector: ".project-image-one-wrap",
                      selectorGuids: ["8936e443-a0b2-9eaf-d462-764acea3d390"],
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1721196791152,
    },
    "a-23": {
      id: "a-23",
      title: "Scroll Image Move #2",
      continuousParameterGroups: [
        {
          id: "a-23-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-23-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".project-image-two-wrap",
                      selectorGuids: ["e2def675-fbc8-3a3b-f178-96446ddb0f3b"],
                    },
                    yValue: 20,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-23-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeInOut",
                    duration: 500,
                    target: {
                      selector: ".project-image-two-wrap",
                      selectorGuids: ["e2def675-fbc8-3a3b-f178-96446ddb0f3b"],
                    },
                    yValue: -20,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1721196880835,
    },
    "a-24": {
      id: "a-24",
      title: "Scroll Image Move #3",
      continuousParameterGroups: [
        {
          id: "a-24-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-24-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".project-image-three-wrap",
                      selectorGuids: ["97eb874d-377a-ef29-4b8b-8ecc42655cb1"],
                    },
                    yValue: 30,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-24-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeInOut",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".project-image-three-wrap",
                      selectorGuids: ["97eb874d-377a-ef29-4b8b-8ecc42655cb1"],
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1721196940715,
    },
    "a-27": {
      id: "a-27",
      title: "Image Scroll",
      continuousParameterGroups: [
        {
          id: "a-27-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-27-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".split-hero-image",
                      selectorGuids: ["5a149e6c-2c1b-c62a-336e-4b45a3d355ad"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-3",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".split-about-image",
                      selectorGuids: ["3ac2a42b-a8d2-3e68-47c2-22ae2357c4ba"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-5",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".split-service-image",
                      selectorGuids: ["247fa24f-41ee-afce-59a5-a8034b1d9b2f"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-7",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".about-hero-image",
                      selectorGuids: ["bdf9da78-0e20-43de-1cbb-8a8183e5f695"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-9",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".our-value-image",
                      selectorGuids: ["3dc8402a-3c7f-eb2b-12a1-c2cba6fd464f"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-11",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".service-static-image",
                      selectorGuids: ["dcd3462f-968b-9c44-bc05-628c977ee38c"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-15",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".contact-image",
                      selectorGuids: ["e665940d-d487-fad8-585c-f98d4e3b6bfb"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-17",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".blog-detail-image",
                      selectorGuids: ["2a8f8546-f7c2-9917-792f-8f5150901b18"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-27-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".split-hero-image",
                      selectorGuids: ["5a149e6c-2c1b-c62a-336e-4b45a3d355ad"],
                    },
                    xValue: 1.5,
                    yValue: 1.5,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-4",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".split-about-image",
                      selectorGuids: ["3ac2a42b-a8d2-3e68-47c2-22ae2357c4ba"],
                    },
                    xValue: 1.5,
                    yValue: 1.5,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-6",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".split-service-image",
                      selectorGuids: ["247fa24f-41ee-afce-59a5-a8034b1d9b2f"],
                    },
                    xValue: 1.5,
                    yValue: 1.5,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-8",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".about-hero-image",
                      selectorGuids: ["bdf9da78-0e20-43de-1cbb-8a8183e5f695"],
                    },
                    xValue: 1.5,
                    yValue: 1.5,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-10",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".our-value-image",
                      selectorGuids: ["3dc8402a-3c7f-eb2b-12a1-c2cba6fd464f"],
                    },
                    xValue: 1.5,
                    yValue: 1.5,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-12",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".service-static-image",
                      selectorGuids: ["dcd3462f-968b-9c44-bc05-628c977ee38c"],
                    },
                    xValue: 1.5,
                    yValue: 1.5,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-16",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".contact-image",
                      selectorGuids: ["e665940d-d487-fad8-585c-f98d4e3b6bfb"],
                    },
                    xValue: 1.5,
                    yValue: 1.5,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-18",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".blog-detail-image",
                      selectorGuids: ["2a8f8546-f7c2-9917-792f-8f5150901b18"],
                    },
                    xValue: 1.5,
                    yValue: 1.5,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1721218095303,
    },
    "a-26": {
      id: "a-26",
      title: "Scroll Image Move #5",
      continuousParameterGroups: [
        {
          id: "a-26-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-26-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".project-image-five-wrap",
                      selectorGuids: ["8e2bcc30-31ab-a070-4656-a67ccfb0b223"],
                    },
                    yValue: 20,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-26-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeInOut",
                    duration: 500,
                    target: {
                      selector: ".project-image-five-wrap",
                      selectorGuids: ["8e2bcc30-31ab-a070-4656-a67ccfb0b223"],
                    },
                    yValue: -20,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1721197027721,
    },
    "a-25": {
      id: "a-25",
      title: "Scroll Image Move #4",
      continuousParameterGroups: [
        {
          id: "a-25-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-25-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".project-image-four-wrap",
                      selectorGuids: ["df1fa87a-eaab-208f-c1ab-3770c387f369"],
                    },
                    yValue: 10,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-25-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".project-image-four-wrap",
                      selectorGuids: ["df1fa87a-eaab-208f-c1ab-3770c387f369"],
                    },
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1721196985121,
    },
    "a-7": {
      id: "a-7",
      title: "Blog Hover Item [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-title",
                  selectorGuids: ["71d7802d-7bbe-d866-e150-cf4dd5374b6b"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-dark",
                  selectorGuids: ["722ee0eb-c39d-84d7-a73e-43ef97db781c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-light",
                  selectorGuids: ["0dfa3426-505f-900f-255d-9fe163161a14"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-11",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-images",
                  selectorGuids: ["7f638126-5383-54ae-a8ff-13af0a3b1e70"],
                },
                zValue: 15,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-images",
                  selectorGuids: ["7f638126-5383-54ae-a8ff-13af0a3b1e70"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-images",
                  selectorGuids: ["7f638126-5383-54ae-a8ff-13af0a3b1e70"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-17",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-icon-wrap",
                  selectorGuids: ["bb253df2-29d0-2b8a-a8f4-697fb70e3c07"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-title",
                  selectorGuids: ["71d7802d-7bbe-d866-e150-cf4dd5374b6b"],
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-dark",
                  selectorGuids: ["722ee0eb-c39d-84d7-a73e-43ef97db781c"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-light",
                  selectorGuids: ["0dfa3426-505f-900f-255d-9fe163161a14"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-12",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-images",
                  selectorGuids: ["7f638126-5383-54ae-a8ff-13af0a3b1e70"],
                },
                zValue: 15,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-images",
                  selectorGuids: ["7f638126-5383-54ae-a8ff-13af0a3b1e70"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-images",
                  selectorGuids: ["7f638126-5383-54ae-a8ff-13af0a3b1e70"],
                },
                xValue: -20,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-18",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-icon-wrap",
                  selectorGuids: ["bb253df2-29d0-2b8a-a8f4-697fb70e3c07"],
                },
                globalSwatchId: "--color--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1720850801825,
    },
    "a-28": {
      id: "a-28",
      title: "Blog Hover Item [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-title",
                  selectorGuids: ["71d7802d-7bbe-d866-e150-cf4dd5374b6b"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-dark",
                  selectorGuids: ["722ee0eb-c39d-84d7-a73e-43ef97db781c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-light",
                  selectorGuids: ["0dfa3426-505f-900f-255d-9fe163161a14"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-images",
                  selectorGuids: ["7f638126-5383-54ae-a8ff-13af0a3b1e70"],
                },
                zValue: 15,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-28-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-images",
                  selectorGuids: ["7f638126-5383-54ae-a8ff-13af0a3b1e70"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-images",
                  selectorGuids: ["7f638126-5383-54ae-a8ff-13af0a3b1e70"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".service-icon-wrap",
                  selectorGuids: ["bb253df2-29d0-2b8a-a8f4-697fb70e3c07"],
                },
                globalSwatchId: "--color--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1720850801825,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});


document.querySelector(".menu-button").addEventListener("click", () => {
  gsap.to("#menu-side", {
    right: 0,
    duration: 0.3,
    ease: "power2.inOut"
  })

})

document.querySelector(".close-button").addEventListener("click", () => {
  gsap.to("#menu-side", {
    right: '-100%',
    duration: 0.3,
    ease: "power2.inOut"
  })
})

document.querySelectorAll(".link-wrapper").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".close-button").click()
  })
})

// Lenis Config
const lenis = new Lenis({
  lerp:0.1
});



// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);