window.__require = function e(t, n, o) {
    function i(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var r = s.split("/");
                if (r = r[r.length - 1],
                !t[r]) {
                    var l = "function" == typeof __require && __require;
                    if (!a && l)
                        return l(r, !0);
                    if (c)
                        return c(r, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
            }
            var h = n[s] = {
                exports: {}
            };
            t[s][0].call(h.exports, function(e) {
                return i(t[s][1][e] || e)
            }, h, h.exports, e, t, n, o)
        }
        return n[s].exports
    }
    for (var c = "function" == typeof __require && __require, s = 0; s < o.length; s++)
        i(o[s]);
    return i
}({
    Canvas: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "83b8d4y43BNkIwM3xPDVQla", "Canvas"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Node
            },
			autoAdapteScreen:function(){
				// 适配解决方案
				let _canvas = cc.Canvas.instance;
			// 设计分辨率比
				let _rateR = _canvas.designResolution.height/_canvas.designResolution.width;
			// 显示分辨率比
				let _rateV = cc.winSize.height/cc.winSize.width;
				console.log("winSize: rateR: "+_rateR+" rateV: "+_rateV);
				if (_rateV > _rateR)
				{
					_canvas.fitHeight = false;
					_canvas.fitWidth = true;
					console.log("winSize: fitWidth");
				}
				else
				{
					_canvas.fitHeight = true;
					_canvas.fitWidth = false;
					console.log("winSize: fitHeight");
				}
			},
            onLoad: function() {
				this.autoAdapteScreen();
				
             /*   var e = cc.view.getVisibleSize()
                  , t = cc.Canvas.instance.designResolution
                  , n = e.width
                  , o = e.height;
                this.bg.height = t.width * o / n,
                this.sv;*/
				
				
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Document: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dc753hqa+1IUI8A4uPARaqg", "Document"),
        window.D = {
            common: null,
            commonState: {},
            playerState: {},
            playerState1: {}
        },
        cc._RF.pop()
    }
    , {}],
    Gps: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9ca77OZCE9HwZi2CCjzUlht", "Gps");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        cc.Class({
            extends: cc.Component,
            properties: {
                ctx: cc.Graphics,
                ctx2: cc.Graphics,
                ctx3: cc.Graphics,
                color: "",
                nf: cc.Node,
                type: "",
                index: "",
                long: 0,
                nIndex: 0,
                record: [],
                lines: [],
                bgline: []
            },
            drawCircle2: function(e, t) {
                this.ctx2.strokeColor = cc.Color.RED,
                this.ctx2.circle(e, t, 3),
                this.ctx2.stroke()
            },
            drawCircle777: function(e, t) {
                this.ctx3.clear(),
                this.ctx3.strokeColor = cc.Color.GREEN,
                this.ctx3.circle(e, t, .3),
                this.ctx3.stroke()
            },
            test: function() {
                for (var e = 0; e < D.common.lines.length; e++)
                    for (var t = 0; t < temp1.length; t++)
                        for (var n = temp1[t], o = 0; o < n.length; o++)
                            this.drawCircle2(n[o].x, n[o].y)
            },
            ontouchstart1: function(e) {
                var t = e.getLocation()
                  , n = new cc.v2;
                n.x = t.x,
                n.y = t.y
            },
            creatorNum: function(e, t, n, o) {
                var i = cc.instantiate(D.control.Num.prefab);
                i.parent = this.nf,
                i.x = n,
                i.y = o;
                var c = i.getComponent(cc.Label);
                c.string = e,
                c.fontSize = t / 5,
                c.lineHeight = t + 2
            },
            againDraw: function(e, t, n) {
                for (var o in e && (e.y ? (e.offsety || (e.offsety = 0),
                null != e.offsetx ? this.ctx.rect(e.offsetx, e.offsety, e.x, e.y) : this.ctx.rect(0, 0, e.x, 750),
                this.ctx.fill()) : this.analysis(e.x, 750, "#000000", 1, 5)),
                n) {
                    var i = n[o].d;
                    for (var c in i)
                        this.analysis(i[c], 750, "#FFFFFF", 1, 3)
                }
                for (var s in t) {
                    var a = t[s].d;
                    this.analysis(a, 750, t[s].c, 2, 0)
                }
            },
            drawLine: function(e) {
                console.log("drawLine"),
                this.control || (this.control = cc.find("Canvas/control").getComponent("control"));
                var t = this;
                cc.loader.loadRes(this.type + "/d" + this.type + this.index, function(n, o) {
                    n && console.log("err gps drawline", n);
                    var i = o.json;
                    for (var c in t.bgline = i[0],
                    t.date = i,
                    i)
                        if (0 == c)
                            i[c].y ? (t.ctx.lineWidth = 0,
                            t.ctx.fillColor = cc.Color.BLACK,
                            i[c].offsety || (i[c].offsety = 0),
                            null != i[c].offsetx ? t.ctx.rect(i[c].offsetx, i[c].offsety, i[c].x, i[c].y) : t.ctx.rect(0, 0, i[c].x, 750),
                            t.ctx.fill()) : t.analysis(i[c].x, 750, "#000000", 1, 5);
                        else if ("string" == typeof i[c].c)
                            for (var s = i[c].d, a = 0; a < s.length; a++)
                                e ? t.analysis(s[a], 750, i[c].c, 2, 3) : t.analysis(s[a], 750, "#FFFFFF", 1, 2)
                })
            },
            drawShow3: function() {
                var e = this;
                cc.loader.loadRes(this.type + "/d" + this.type + this.index, function(t, n) {
                    t && console.log("err gps drawline", t),
                    e.date = n.json;
                    var o = n.json;
                    for (var i in e.bgline = o[0],
                    o)
                        if (0 == i)
                            o[i].y ? (e.ctx.lineWidth = 0,
                            e.ctx.fillColor = cc.Color.BLACK,
                            o[i].offsety || (o[i].offsety = 0),
                            null != o[i].offsetx ? e.ctx.rect(o[i].offsetx, o[i].offsety, o[i].x, o[i].y) : e.ctx.rect(0, 0, o[i].x, 750),
                            e.ctx.fill()) : e.analysis(o[i].x, 750, "#000000", 1, 5);
                        else if ("string" == typeof o[i].c)
                            for (var c = o[i].d, s = 0; s < c.length; s++)
                                e.analysis(c[s], 750, o[i].c, 2, 3)
                })
            },
            reDrawLine: function(e, t) {
                for (var n in e)
                    if (t && 0 == n && (e[n].y ? (null != e[n].offsetx ? (self.ctx.rect(e[n].offsetx, e[n].offsety, e[n].x, 750, e[n].y),
                    self.ctx.fillColor = cc.Color.BLACK) : (self.ctx.rect(0, 0, e[n].x, 750, e[n].y),
                    self.ctx.fillColor = cc.Color.BLACK),
                    self.ctx.fill()) : self.analysis(e[n].x, 750, "#000000", 1, 3)),
                    "string" == typeof e[n].c) {
                        var o = e[n].d;
                        this.analysis(o, 750, e[n].c, 2);
                        var i = {
                            d: o,
                            c: e[n].c
                        };
                        this.record.push(i)
                    }
            },
            Claer: function(e, t) {
                console.log("clear 111"),
                e && this.ctx.clear(),
                t && this.ctx2.clear()
            },
            putAllIndexPool: function() {
                for (var e = this.nf.children.length - 1; e >= 0; e--) {
                    var t = this.nf.children[e];
                    void 0 !== t && t && 1 == t.active && t.destroy()
                }
                for (var n = D.common.iParent.children.length - 1; n >= 0; n--) {
                    var o = D.common.iParent.children[n];
                    void 0 !== o && o && 1 == o.active && o.destroy()
                }
            },
            drawLine2: function() {
                var e = D.common.date;
                for (var t in e)
                    if (0 == t && (null != e[t].y ? (null != e[t].offsetx ? (this.ctx.rect(e[t].offsetx, e[t].offsety, e[t].x, 750, e[t].y),
                    this.ctx.fillColor = cc.Color.BLACK) : (this.ctx.rect(0, 0, e[t].x, 750, e[t].y),
                    this.ctx.fillColor = cc.Color.BLACK),
                    this.ctx.fill()) : this.analysis(e[t].x, 750, "#000000", 1, 3)),
                    "string" == typeof e[t].c)
                        for (var n = e[t].d, o = 0; o < n.length; o++)
                            this.analysis(n[o], 750, "#FFFFFF", 2)
            },
            drawNumber: function() {
                var e = this;
                cc.loader.loadRes(this.type + "/n" + this.type + this.index, function(t, n) {
                    t && console.log("err \u6570\u5b57", t);
                    var o = n.json;
                    for (var i in o)
                        if (o[i].n) {
                            var c = o[i];
                            e.creatorNum(c.n, 5 * c.s, c.x, 750 - c.y)
                        }
                })
            },
            draw: function(e) {
                if (e)
                    ;
                else {
                    var t = this.control.config[this.config][1];
                    for (var n in t)
                        if ("string" == typeof t[n].c)
                            for (var o = t[n].d, i = 0; i < o.length; i++)
                                this.analysis(o[i], 750, t[n].c, 2)
                }
            },
            start: function() {
                "draw" != this.node.name && (this.date3 ? this.date = this.date3 : (console.log("\u80af\u5b9a\u8fdb\u6765\u4e86"),
                this.drawLine()))
            },
            getPointAtCurve: function(e, t, n, o, i, c, s, a, r) {
                if (r < 0 || r > 1)
                    throw new Error("invalid t param,out of range[0,1]");
                var l = {
                    x: 0,
                    y: 0
                };
                return l.x = Math.pow(1 - r, 3) * e + 3 * r * Math.pow(1 - r, 2) * n + 3 * (1 - r) * Math.pow(r, 2) * i + Math.pow(r, 3) * s,
                l.y = Math.pow(1 - r, 3) * t + 3 * r * Math.pow(1 - r, 2) * o + 3 * (1 - r) * Math.pow(r, 2) * c + Math.pow(r, 3) * a,
                l
            },
            drawShow: function(e, t, n) {
                if (this.Claer(!0, !0),
                console.log("date2 type", void 0 === t ? "undefined" : o(t)),
                1 != t)
                    for (var i in t[0].y ? (this.ctx.lineWidth = 0,
                    null != t[0].offsetx ? (this.ctx.rect(t[0].offsetx, t[0].offsety, t[0].x, 750, t[0].y),
                    this.ctx.fillColor = cc.Color.BLACK) : (this.ctx.rect(0, 0, t[0].x, 750, t[0].y),
                    this.ctx.fillColor = cc.Color.BLACK),
                    this.ctx.fill()) : t[0].x ? this.analysis(t[0].x, 750, "#000000", 1, 3) : (console.log("\u5e95\u56fe\u4e0d\u5b58\u5728"),
                    n.y ? (this.ctx.lineWidth = 0,
                    null != n.offsetx ? (this.ctx.rect(n.offsetx, n.offsety, n.x, 750, n.y),
                    this.ctx.fillColor = cc.Color.BLACK) : (this.ctx.rect(0, 0, n.x, 750, n.y),
                    this.ctx.fillColor = cc.Color.BLACK),
                    this.ctx.fill()) : n.x && this.analysis(n.x, 750, "#000000", 1, 3)),
                    e) {
                        var c = e[i].d;
                        this.analysis(c, 750, e[i].c, 2)
                    }
                else
                    for (var s in e)
                        if (0 == s && (this.ctx.lineWidth = 0,
                        e[s].y ? (null != e[s].offsetx ? (this.ctx.rect(e[s].offsetx, e[s].offsety, e[s].x, 750, e[s].y),
                        this.ctx.fillColor = cc.Color.BLACK) : (this.ctx.rect(0, 0, e[s].x, 750, e[s].y),
                        this.ctx.fillColor = cc.Color.BLACK),
                        this.ctx.fill()) : this.analysis(e[s].x, 750, "#000000", 1, 3)),
                        "string" == typeof e[s].c)
                            for (var a = e[s].d, r = 0; r < a.length; r++)
                                this.analysis(a[r], 750, e[s].c, 2)
            },
            drawShow2: function(e) {
                for (var t in e)
                    if (0 == t && (e[t].y ? (this.ctx.lineWidth = 0,
                    null != e[t].offsetx ? (this.ctx.rect(e[t].offsetx, e[t].offsety, e[t].x, 750, e[t].y),
                    this.ctx.fillColor = cc.Color.BLACK) : (this.ctx.rect(0, 0, e[t].x, 750, e[t].y),
                    this.ctx.fillColor = cc.Color.BLACK),
                    this.ctx.fill()) : this.analysis(e[t].x, 750, "#000000", 1, 3)),
                    "string" == typeof e[t].c) {
                        for (var n = e[t].d, o = 0; o < n.length; o++)
                            this.analysis(n[o], 750, e[t].c, 2);
                        console.log("\u7ed8\u5236")
                    }
            },
            setFillColor: function(e) {
                e || (e = "#000000",
                console.log("color \u6709\u95ee\u9898~")),
                this.color = e
            },
            fillColor: function(e) {
                this.ctx.fillColor = e ? (new cc.Color).fromHEX(e) : (new cc.Color).fromHEX(this.color),
                this.ctx.fill()
            },
            analysisRect: function(e, t, n, o, i) {
                var c = parseInt(e)
                  , s = i - parseInt(t)
                  , a = parseInt(n)
                  , r = -parseInt(o);
                this.ctx.rect(c, s, a, r),
                this.ctx.stroke()
            },
            analysis: function(e, t, n, o, i) {
                null != i && (this.ctx.lineWidth = i);
                var c = void 0;
                c = 1 == o ? this.ctx : this.ctx2;
                var s = 0
                  , a = 0
                  , r = 0
                  , l = 0
                  , h = 0;
                if (e) {
                    for (var p = [], d = 0; d < e.length; d++)
                        if (!(d < s))
                            switch (e[d]) {
                            case "M":
                                e[d - 1],
                                c.moveTo(e[d + 1], t - e[d + 2]),
                                a = e[d + 1],
                                l = t - e[d + 2],
                                s += 3,
                                p.push(new cc.v2(a,l));
                                break;
                            case "C":
                                c.bezierCurveTo(e[d + 1], t - e[d + 2], e[d + 3], t - e[d + 4], e[d + 5], t - e[d + 6]),
                                a = e[d + 5],
                                l = t - e[d + 6],
                                s += 7,
                                p.push(new cc.v2(a,l));
                                break;
                            case "c":
                                c.bezierCurveTo(a + e[d + 1], l - e[d + 2], a + e[d + 3], l - e[d + 4], a + e[d + 5], l - e[d + 6]),
                                "s" != e[d + 7] && "S" != e[d + 7] || (h = l - e[d + 4],
                                r = a + e[d + 3]),
                                a += e[d + 5],
                                l -= e[d + 6],
                                s += 7,
                                p.push(new cc.v2(a,l));
                                break;
                            case "s":
                                e[d - 4] ? c.bezierCurveTo(r + 2 * (a - r), h + 2 * (l - h), e[d + 1] + a, l - e[d + 2], e[d + 3] + a, l - e[d + 4]) : "s" == e[d - 5] || "S" == e[d - 5] ? c.bezierCurveTo(r + 2 * (a - r), h + 2 * (l - h), e[d + 1] + a, l - e[d + 2], e[d + 3] + a, l - e[d + 4]) : (e[d - 2],
                                c.bezierCurveTo(a, l, e[d + 1] + a, l - e[d + 2], e[d + 3] + a, l - e[d + 4])),
                                a = e[d + 3] + a,
                                l -= e[d + 4],
                                s += 5,
                                p.push(new cc.v2(a,l));
                                break;
                            case "S":
                                if (e[d - 4]) {
                                    var g = e[d - 1] - e[d - 3];
                                    g > 0 ? c.bezierCurveTo(a, l - g, e[d + 1], t - e[d + 2], e[d + 3], t - e[d + 4]) : c.bezierCurveTo(a, l + Math.abs(g), e[d + 1], t - e[d + 2], e[d + 3], t - e[d + 4])
                                } else
                                    "s" == e[d - 5] || "S" == e[d - 5] || e[d - 2] && c.bezierCurveTo(a, l, e[d + 1], t - e[d + 2], e[d + 3], t - e[d + 4]);
                                a = e[d + 3],
                                l = t - e[d + 4],
                                s += 5,
                                p.push(new cc.v2(a,l));
                                break;
                            case "v":
                                c.lineTo(a, l - e[d + 1]),
                                l -= e[d + 1],
                                s += 2,
                                p.push(new cc.v2(a,l));
                                break;
                            case "V":
                                c.lineTo(a, t - e[d + 1]),
                                l = t - e[d + 1],
                                s += 2,
                                p.push(new cc.v2(a,l));
                                break;
                            case "h":
                                c.lineTo(a + e[d + 1], l),
                                a += e[d + 1],
                                s += 2,
                                p.push(new cc.v2(a,l));
                                break;
                            case "H":
                                c.lineTo(e[d + 1], l),
                                a = e[d + 1],
                                s += 2,
                                p.push(new cc.v2(a,l));
                                break;
                            case "z":
                                e[d + 1] || (c.close(),
                                c.stroke(),
                                s += 2,
                                p.push(new cc.v2(a,l)));
                                break;
                            case "Z":
                                e[d + 1] || (c.close(),
                                c.stroke(),
                                s += 2);
                                break;
                            case "L":
                                c.lineTo(e[d + 1], t - e[d + 2]),
                                s += 3,
                                l = t - e[d + 2],
                                p.push(new cc.v2(a,l));
                                break;
                            case "l":
                                c.lineTo(a + e[d + 1], l - e[d + 2]),
                                a += e[d + 1],
                                l -= e[d + 2],
                                s += 3,
                                p.push(new cc.v2(a,l))
                            }
                    null != n && ("string" == typeof n && (c.fillColor = (new cc.Color).fromHEX(n)),
                    c.fill());
                    p.length
                } else
                    ;
            },
            testRect: function(e, t, n, o, i, c, s, a) {
                this.ctx3.moveTo(e, t),
                this.ctx3.lineTo(n, o),
                this.ctx3.lineTo(i, c),
                this.ctx3.lineTo(s, a),
                this.ctx3.lineTo(e, t),
                this.ctx3.stroke()
            },
            analysis2: function(e, t, n, o, i) {
                for (var c = o, s = 0, a = 0, r = 0, l = 0; l < e.length; l++)
                    if (!(l < s))
                        switch (e[l]) {
                        case "M":
                            e[l - 1] ? c.lineTo(e[l + 1], t - e[l + 2]) : c.moveTo(e[l + 1], t - e[l + 2]),
                            a = e[l + 1],
                            r = t - e[l + 2],
                            s += 3;
                            break;
                        case "C":
                            c.bezierCurveTo(e[l + 1], t - e[l + 2], e[l + 3], t - e[l + 4], e[l + 5], t - e[l + 6]),
                            a = e[l + 5],
                            r = t - e[l + 6],
                            s += 7;
                            break;
                        case "c":
                            c.bezierCurveTo(a + e[l + 1], r - e[l + 2], a + e[l + 3], r - e[l + 4], a + e[l + 5], r - e[l + 6]),
                            a += e[l + 5],
                            r -= e[l + 6],
                            s += 7;
                            break;
                        case "S":
                            if (e[l - 4]) {
                                var h = e[l - 1] - e[l - 3];
                                h > 0 ? c.bezierCurveTo(a, r - h, e[l + 1], t - e[l + 2], e[l + 3], t - e[l + 4]) : c.bezierCurveTo(a, r + Math.abs(h), e[l + 1], t - e[l + 2], e[l + 3], t - e[l + 4])
                            } else
                                "s" == e[l - 5] || "S" == e[l - 5] || e[l - 2] && c.bezierCurveTo(a, r, e[l + 1], t - e[l + 2], e[l + 3], t - e[l + 4]);
                            a = e[l + 3],
                            r = t - e[l + 4],
                            s += 5;
                            break;
                        case "s":
                            if (e[l - 4]) {
                                var p = e[l - 1] - e[l - 3];
                                p > 0 ? c.bezierCurveTo(a, r - p, e[l + 1] + a, r - e[l + 2], e[l + 3] + a, r - e[l + 4]) : c.bezierCurveTo(a, r + Math.abs(p), e[l + 1] + a, r - e[l + 2], e[l + 3] + a, r - e[l + 4])
                            } else
                                "s" == e[l - 5] || "S" == e[l - 5] || e[l - 2] && c.bezierCurveTo(a, r, e[l + 1] + a, r - e[l + 2], e[l + 3] + a, r - e[l + 4]);
                            a = e[l + 3] + a,
                            r -= e[l + 4],
                            s += 5;
                            break;
                        case "v":
                            c.lineTo(a, r - e[l + 1]),
                            r -= e[l + 1],
                            s += 2;
                            break;
                        case "V":
                            c.lineTo(a, t - e[l + 1]),
                            r = t - e[l + 1],
                            s += 2;
                            break;
                        case "h":
                            c.lineTo(a + e[l + 1], r),
                            a += e[l + 1],
                            s += 2;
                            break;
                        case "H":
                            c.lineTo(e[l + 1], r),
                            a = e[l + 1],
                            s += 2;
                            break;
                        case "z":
                        case "Z":
                            e[l + 1] || (c.close(),
                            c.stroke(),
                            s += 2);
                            break;
                        case "L":
                            c.lineTo(e[l + 1], t - e[l + 2]),
                            s += 3,
                            r = t - e[l + 2];
                            break;
                        case "l":
                            c.lineTo(a + e[l + 1], r - e[l + 2]),
                            a += e[l + 1],
                            r -= e[l + 2],
                            s += 3
                        }
                "string" == typeof n && (c.fillColor = (new cc.Color).fromHEX(n)),
                c.fill()
            },
            analysisArr: function(e, t, n) {
                for (var o = this.ctx, i = 0, c = 0, s = 0, a = 0, r = 0, l = 0; l < e.length; l++)
                    if (!(l < i))
                        switch (e[l]) {
                        case "M":
                            e[l - 1] ? o.lineTo(e[l + 1], t - e[l + 2]) : o.moveTo(e[l + 1], t - e[l + 2]),
                            c = e[l + 1],
                            a = t - e[l + 2],
                            i += 3;
                            break;
                        case "C":
                            o.bezierCurveTo(e[l + 1], t - e[l + 2], e[l + 3], t - e[l + 4], e[l + 5], t - e[l + 6]),
                            c = e[l + 5],
                            a = t - e[l + 6],
                            i += 7;
                            break;
                        case "c":
                            o.bezierCurveTo(c + e[l + 1], a - e[l + 2], c + e[l + 3], a - e[l + 4], c + e[l + 5], a - e[l + 6]),
                            "s" != e[l + 7] && "S" != e[l + 7] || (r = a - e[l + 4],
                            s = c + e[l + 3]),
                            i += 7,
                            c += e[l + 5],
                            a -= e[l + 6];
                            break;
                        case "S":
                            if (e[l - 4]) {
                                var h = e[l - 1] - e[l - 3];
                                h > 0 ? o.bezierCurveTo(c, a - h, e[l + 1], t - e[l + 2], e[l + 3], t - e[l + 4]) : o.bezierCurveTo(c, a + Math.abs(h), e[l + 1], t - e[l + 2], e[l + 3], t - e[l + 4])
                            } else
                                "s" == e[l - 5] || "S" == e[l - 5] || e[l - 2];
                            c = e[l + 3],
                            a = t - e[l + 4],
                            i += 5;
                            break;
                        case "s":
                            e[l - 4] ? o.bezierCurveTo(s + 2 * (c - s), r + 2 * (a - r), e[l + 1] + c, a - e[l + 2], e[l + 3] + c, a - e[l + 4]) : "s" == e[l - 5] || "S" == e[l - 5] ? console.log("s \u524d\u8fd8\u662fS \u5b58\u5728\u3002\u3002\u3002") : e[l - 2] && o.bezierCurveTo(c, a, e[l + 1] + c, a - e[l + 2], e[l + 3] + c, a - e[l + 4]),
                            c = e[l + 3] + c,
                            a -= e[l + 4],
                            i += 5;
                            break;
                        case "v":
                            o.lineTo(c, a - e[l + 1]),
                            a -= e[l + 1],
                            i += 2;
                            break;
                        case "V":
                            o.lineTo(c, t - e[l + 1]),
                            a = t - e[l + 1],
                            i += 2;
                            break;
                        case "h":
                            o.lineTo(c + e[l + 1], a),
                            c += e[l + 1],
                            i += 2;
                            break;
                        case "H":
                            o.lineTo(e[l + 1], a),
                            c = e[l + 1],
                            i += 2;
                            break;
                        case "z":
                        case "Z":
                            e[l + 1] || (o.close(),
                            o.stroke(),
                            i += 2);
                            break;
                        case "L":
                            o.lineTo(e[l + 1], t - e[l + 2]),
                            i += 3,
                            a = t - e[l + 2];
                            break;
                        case "l":
                            o.lineTo(c + e[l + 1], a - e[l + 2]),
                            c += e[l + 1],
                            a -= e[l + 2],
                            i += 3
                        }
                null != n && (this.ctx.fillColor = "string" == typeof n ? (new cc.Color).fromHEX(n) : n ? cc.Color.WHITE : cc.Color.GRAY),
                this.ctx.fill()
            },
            analysisLine: function(e, t) {
                this.ctx.lineWidth = 2;
                for (var n = this.ctx, o = 0, i = 0, c = 0, s = 0; s < e.length; s++)
                    if (!(s < o))
                        switch (e[s]) {
                        case "M":
                            n.moveTo(e[s + 1], t - e[s + 2]),
                            i = e[s + 1],
                            c = t - e[s + 2],
                            o += 3;
                            break;
                        case "C":
                            n.bezierCurveTo(e[s + 1], t - e[s + 2], e[s + 3], t - e[s + 4], e[s + 5], t - e[s + 6]),
                            i = e[s + 5],
                            c = t - e[s + 6],
                            o += 7;
                            break;
                        case "c":
                            n.bezierCurveTo(i + e[s + 1], c - e[s + 2], i + e[s + 3], c - e[s + 4], i + e[s + 5], c - e[s + 6]),
                            e[s + 4] = c - e[s + 4],
                            i += e[s + 5],
                            c -= e[s + 6],
                            o += 7;
                            break;
                        case "S":
                            if (e[s - 4]) {
                                var a = e[s - 3] - c;
                                a > 0 ? n.bezierCurveTo(i, c - a, e[s + 1], t - e[s + 2], e[s + 3], t - e[s + 4]) : n.bezierCurveTo(i, c + Math.abs(a), e[s + 1], t - e[s + 2], e[s + 3], t - e[s + 4])
                            } else
                                "s" == e[s - 5] || "S" == e[s - 5] || e[s - 2] && n.bezierCurveTo(i, c, e[s + 1], t - e[s + 2], e[s + 3], t - e[s + 4]);
                            i = e[s + 3],
                            c = t - e[s + 4],
                            o += 5;
                            break;
                        case "s":
                            if (e[s - 4]) {
                                var r = e[s - 3] - c;
                                r > 0 ? n.bezierCurveTo(i, c - r, e[s + 1] + i, c - e[s + 2], e[s + 3] + i, c - e[s + 4]) : n.bezierCurveTo(i, c + Math.abs(r), e[s + 1] + i, c - e[s + 2], e[s + 3] + i, c - e[s + 4])
                            } else
                                "s" == e[s - 5] || "S" == e[s - 5] ? console.log("s \u524d\u8fd8\u662fS \u5b58\u5728\u3002\u3002\u3002") : e[s - 2] && n.bezierCurveTo(i, c, e[s + 1] + i, c - e[s + 2], e[s + 3] + i, c - e[s + 4]);
                            e[s + 2] += c,
                            i = e[s + 3] + i,
                            c -= e[s + 4],
                            o += 5;
                            break;
                        case "v":
                            n.lineTo(i, c - e[s + 1]),
                            c -= e[s + 1],
                            o += 2;
                            break;
                        case "V":
                            n.lineTo(i, t - e[s + 1]),
                            c = t - e[s + 1],
                            o += 2;
                            break;
                        case "h":
                            n.lineTo(i + e[s + 1], c),
                            i += e[s + 1],
                            o += 2;
                            break;
                        case "H":
                            n.lineTo(e[s + 1], c),
                            i = e[s + 1],
                            o += 2;
                            break;
                        case "z":
                        case "Z":
                            n.stroke();
                            break;
                        case "L":
                            n.lineTo(e[s + 1], t - e[s + 2]),
                            o += 3,
                            c = t - e[s + 2];
                            break;
                        case "l":
                            n.lineTo(i + e[s + 1], c - e[s + 2]),
                            i += e[s + 1],
                            c -= e[s + 2],
                            o += 3
                        }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LanguageData: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var o = e("polyglot.min")
          , i = null;
        function c(e) {
            return window.i18n.languages[e]
        }
        function s(e) {
            e && (i ? i.replace(e) : i = new o({
                phrases: e,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }),
        t.exports = {
            init: function(e) {
                if (e !== window.i18n.curLang) {
                    var t = c(e) || {};
                    window.i18n.curLang = e,
                    s(t),
                    this.inst = i
                }
            },
            t: function(e, t) {
                if (i)
                    return i.t(e, t)
            },
            inst: i,
            updateSceneRenderers: function() {
                for (var e = cc.director.getScene().children, t = [], n = 0; n < e.length; ++n) {
                    var o = e[n].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(t, o)
                }
                for (var i = 0; i < t.length; ++i) {
                    var c = t[i];
                    c.node.active && c.updateLabel()
                }
                for (var s = [], a = 0; a < e.length; ++a) {
                    var r = e[a].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(s, r)
                }
                for (var l = 0; l < s.length; ++l) {
                    var h = s[l];
                    h.node.active && h.updateSprite(window.i18n.curLang)
                }
            }
        },
        cc._RF.pop()
    }
    , {
        "polyglot.min": "polyglot.min"
    }],
    LocalizedLabel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var o = e("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function() {
                        return this._dataID
                    },
                    set: function(e) {
                        this._dataID !== e && (this._dataID = e,
                        this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function() {
                o.inst || o.init(),
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Label);
                if (e)
                    return this.label = e,
                    void this.updateLabel()
            },
            updateLabel: function() {
                this.label ? o.t(this.dataID) && (this.label.string = o.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        LanguageData: "LanguageData"
    }],
    LocalizedSprite: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var o = e("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: o
                }
            },
            onLoad: function() {
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Sprite);
                if (e)
                    return this.sprite = e,
                    void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function(e) {
                for (var t = 0; t < this.spriteFrameSet.length; ++t)
                    if (this.spriteFrameSet[t].language === e)
                        return this.spriteFrameSet[t].spriteFrame
            },
            updateSprite: function(e) {
                if (this.sprite) {
                    var t = this.getSpriteFrameByLang(e);
                    !t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame),
                    this.sprite.spriteFrame = t
                } else
                    cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    SpriteFrameSet: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var o = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        t.exports = o,
        cc._RF.pop()
    }
    , {}],
    antiAlias: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c53b1In92xDsIL/7/AqSBfs", "antiAlias"),
        cc.macro.ENABLE_WEBGL_ANTIALIAS = !0,
        cc._RF.pop()
    }
    , {}],
    async: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "99912Zpb/hBT5fI8Stfethf", "async"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , i = o.ccclass
          , c = o.property
          , s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null,
                t.text = "hello",
                t.text2 = "xs",
                t
            }
            return __extends(t, e),
            t.prototype.start = function() {}
            ,
            __decorate([c(cc.Label)], t.prototype, "label", void 0),
            __decorate([c], t.prototype, "text", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        n.default = s,
        cc._RF.pop()
    }
    , {}],
    bezier: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "342c7Qa2R1DCbtajTcgcKNn", "bezier"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            getPointAtCurve: function(e, t, n, o, i, c, s, a, r) {
                if (r < 0 || r > 1)
                    throw new Error("invalid t param,out of range[0,1]");
                var l = [];
                return l.push(Math.pow(1 - r, 3) * e + 3 * r * Math.pow(1 - r, 2) * n + 3 * (1 - r) * Math.pow(r, 2) * i + Math.pow(r, 3) * s),
                l.push(Math.pow(1 - r, 3) * t + 3 * r * Math.pow(1 - r, 2) * o + 3 * (1 - r) * Math.pow(r, 2) * c + Math.pow(r, 3) * a),
                l
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    common: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e2fa51ohYNB4LC1jRnEc1C2", "common"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                D.common = this,
                D.commonTestGpsArray = [],
                D.commonAllPool = []
            },
            initNodePool: function(e, t) {
                var n = t.name + "pool";
                e[n] = new cc.NodePool(n),
                D.commonAllPool.push(e[n]);
                for (var o = 0; o < t.poolAmount; o++) {
                    var i = cc.instantiate(t.prefab);
                    e[n].put(i)
                }
            },
            genNewNode: function(e, t, n) {
                var o = null;
                return e.size() > 0 ? o = e.get() : (o = cc.instantiate(t),
                console.log("\u6c60\u5b50\u5bf9\u8c61\u4e0d\u591f\uff0c\u53c8\u521b\u5efa\u4e86\u4e00\u4e2a", o)),
                n && n.addChild(o),
                o.active = !0,
                o
            },
            putBackPool: function(e, t) {
                var n = t.name + "pool";
                console.log("that[poolName]:", e[n]),
                e[n].put(t)
            },
            clearAllPool: function() {
                for (var e = 0; e < D.commonAllPool.length; e++)
                    D.commonAllPool[e].clear()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    control: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c4278psMS9G6pt4mVg9YXIl", "control");
        var o = cc.Class({
            name: "n",
            properties: {
                name: "n",
                poolAmount: 1e3,
                prefab: cc.Prefab
            }
        })
          , i = cc.Class({
            name: "c",
            properties: {
                name: "c",
                poolAmount: 40,
                prefab: cc.Prefab
            }
        });
        cc.Class({
            extends: cc.Component,
            properties: {
                teach1: cc.Prefab,
                game: cc.Prefab,
                all: cc.Node,
                startCamera: cc.Node,
                CAMERA: cc.Camera,
                CAMERA1: cc.Camera,
                content2: cc.Node,
                Index: i,
                Num: o,
                config: [],
                drawBg: cc.Prefab,
                drawBGs: cc.Prefab,
                drawpre: cc.Prefab,
                logoBg: cc.Node,
                testPosY: e("testPosY"),
                lockdate: cc.JsonAsset,
                shareO: cc.Prefab,
                label: cc.Label,
                label2: cc.Label,
                endParent: cc.Node,
                over2: cc.Prefab
            },
            seeChild: function() {
                for (var e in this.content2.children)
                    console.log("three?", this.content2.children[e].active)
            },
            gameShow: function() {
                this.gameBox ? this.gameBox.active = !0 : (this.gameBox = cc.instantiate(this.game),
                this.gameBox.parent = this.node.parent,
                this.gameBox.active = !0,
                D.common.game = this.gameBox)
            },
            putBackPool: function(e, t) {
                t ? D.common.putBackPool(t, e) : D.common.putBackPool(this, e)
            },
            getType: function(e) {
                var t = void 0;
                switch (parseInt(e)) {
                case 0:
                    t = "zgf";
                    break;
                case 1:
                    t = "dw";
                    break;
                case 2:
                    t = "zw";
                    break;
                case 3:
                    t = "rwys";
                    break;
                case 4:
                    t = "mtl"
                }
                return t
            },
            creatorHead: function() {
                var e = this;
                D.allpic = [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]];
                for (var t = 0; t < 3; t++) {
                    var n = cc.instantiate(this.drawBGs);
                    switch (n.parent = this.content2,
                    t) {
                    case 0:
                        n.getComponent("hbg").creator(1, "zgf"),
                        n.getComponent("hbg").creator(2, "zgf"),
                        n.getComponent("hbg").creator(3, "zgf"),
                        n.getComponent("more").index = 0;
                        break;
                    case 1:
                        n.getComponent("hbg").creator(1, "dw"),
                        n.getComponent("hbg").creator(2, "dw"),
                        n.getComponent("hbg").creator(3, "dw"),
                        n.getComponent("more").index = 1;
                        break;
                    case 2:
                        n.getComponent("hbg").creator(1, "zw"),
                        n.getComponent("hbg").creator(2, "zw"),
                        n.getComponent("hbg").creator(3, "zw"),
                        n.getComponent("more").index = 2
                    }
                    n.getComponent("hbg").change(this.getType(t))
                }
                setTimeout(function() {
                    e.logoBg.active = !1
                }, 100)
            },
            creatorHbgdate: function(e, t, n) {
                var o = void 0;
                switch (parseInt(e)) {
                case 0:
                    (o = this.content2.children[1]).getComponent("hbg").creator(t, "zgf", n),
                    o.getComponent("more").index = 0;
                    break;
                case 1:
                    (o = this.content2.children[2]).getComponent("hbg").creator(t, "dw", n),
                    o.getComponent("more").index = 1;
                    break;
                case 2:
                    (o = this.content2.children[3]).getComponent("hbg").creator(t, "zw", n),
                    o.getComponent("more").index = 2
                }
                o.parent = this.content2
            },
            creatorThreeDraw: function() {
                for (var e = 0; e < 3; e++) {
                    var t = cc.instantiate(this.drawBGs);
                    t.getComponent("hbg").change(this.getType(e)),
                    t.parent = this.content2
                }
            },
            creatorInfo: function(e, t, n, o) {
                var i = cc.instantiate(this.drawpre);
                i.getComponent("select").resetInfo(t, n),
                o && (i.getComponent("select").lines = o),
                i.parent = e,
                i > 3 && (i.opacity = 0)
            },
            creatorDraw: function(e, t, n) {
                switch (e) {
                case "zgf":
                    this.creatorInfo(this.content2.children[1].children[0], e, t, n);
                    break;
                case "dw":
                    this.creatorInfo(this.content2.children[2].children[0], e, t, n);
                    break;
                case "zw":
                    this.creatorInfo(this.content2.children[3].children[0], e, t, n);
                    break;
                case "rwys":
                    this.creatorInfo(this.content2.children[4].children[0], e, t, n);
                    break;
                case "mtl":
                    this.creatorInfo(this.content2.children[5].children[0], e, t, n)
                }
            },
            drawShow: function(e, t) {
                this.drawBgbox ? this.drawBgbox.active = !0 : (this.drawBgbox = cc.instantiate(this.drawBg),
                this.drawBgbox.parent = this.node.parent),
                this.drawBgbox.getComponent("drawShow").draw(e, t)
            },
            getItem: function(e) {
                return !!cc.sys.localStorage.getItem(e) && cc.sys.localStorage.getItem(e)
            },
            setItem: function(e, t) {
                cc.sys.localStorage.setItem(e, t)
            },
            rewriteParent: function(e, t, n, o, i, c, s, a) {
                switch (e) {
                case "zgf":
                    this.rewrite(e, this.content2.children[1].children[0], t, n, o, i, c, s, a);
                    break;
                case "dw":
                    this.rewrite(e, this.content2.children[2].children[0], t, n, o, i, c, s, a);
                    break;
                case "zw":
                    this.rewrite(e, this.content2.children[3].children[0], t, n, o, i, c, s, a);
                    break;
                case "rwys":
                    this.rewrite(e, this.content2.children[4].children[0], t, n, o, i, c, s, a);
                    break;
                case "mtl":
                    this.rewrite(e, this.content2.children[5].children[0], t, n, o, i, c, s, a)
                }
            },
            rewrite: function(e, t, n, o, i, c, s, a, r) {
                var l = cc.instantiate(this.drawpre);
                l.getComponent("select").resetInfo(e, n),
                l.getComponent("select").chu = !1,
                l.getComponent("select").gps.date3 = i,
                l.getComponent("select").gps.nIndex = c,
                l.getComponent("select").gps.long = s,
                l.getComponent("select").gps.bgline = r,
                l.getComponent("select").gps.record = o,
                l.getComponent("select").gps.againDraw(r, o, i),
                l.getComponent("select").lines = a,
                l.parent = t
            },
            getIndex: function(e) {
                var t = void 0;
                switch (e) {
                case "zgf":
                    t = 1;
                    break;
                case "dw":
                    t = 2;
                    break;
                case "zw":
                    t = 3;
                    break;
                case "rwys":
                    t = 4;
                    break;
                case "mtl":
                    t = 5
                }
                return t - 1
            },
            onLoad: function() {
                var e = this;
                if (this.getItem("lockdate")) {
                    var t = this.getItem("lockdate")
                      , n = JSON.parse(t);
                    D.lockdate = n
                } else
                    D.lockdate = this.lockdate.json;
                if (this.logoBg.active = !0,
                D.CAMERA = this.CAMERA1,
                this.getItem("first")) {
                    if (this.creatorThreeDraw(),
                    "string" == typeof this.getItem("useDateing")) {
                        var o = this.getItem("useDateing")
                          , i = JSON.parse(o);
                        D.ingDate = i,
                        console.log("ingDate", i)
                    }
                    if ("string" == typeof this.getItem("useDateEnd")) {
                        var c = this.getItem("useDateEnd")
                          , s = JSON.parse(c);
                        D.endDate = s,
                        console.log("endDate", s)
                    }
                    if (D.allpic = [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
                    D.ingDate)
                        for (var a in D.ingDate) {
                            var r = this.getIndex(D.ingDate[a].type)
                              , l = D.ingDate[a].obj
                              , h = D.allpic[r];
                            for (var p in l)
                                for (var d = h.length - 1; d >= 0; d--)
                                    if (h[d] == l[p].index) {
                                        h.splice(d, 1),
                                        h.unshift(D.ingDate[a].obj[p]);
                                        break
                                    }
                        }
                    if (console.log("D.ingDate", D.ingDate),
                    D.endDate)
                        for (var g in D.endDate) {
                            var f = [];
                            if (D.endDate[g].length > 0)
                                for (var u in D.endDate[g])
                                    for (var m = 0; m < D.allpic[g].length; m++)
                                        D.allpic[g][m] == D.endDate[g][u] && (f.push(D.allpic[g][m].toString()),
                                        D.allpic[g].splice(m, 1));
                            for (var v in f)
                                D.allpic[g].unshift(f[v])
                        }
                    for (var x in console.log("\u5408\u5e76\u5b8c\u6210end\u540e\u7684D.allpic", D.allpic),
                    D.allpic) {
                        if (x > 2)
                            break;
                        var C = D.allpic[x];
                        if (C.length > 0)
                            for (var y in C) {
                                if (y > 2)
                                    break;
                                C[y].index ? this.rewriteParent(this.getType(x), C[y].index, C[y].date, C[y].date2, C[y].nIndex, C[y].long, C[y].lines, C[y].bgline) : "string" == typeof C[y] ? this.creatorHbgdate(x, C[y], !0) : this.creatorHbgdate(x, C[y], !1)
                            }
                    }
                    setTimeout(function() {
                        e.logoBg.active = !1
                    }, 100)
                } else
                    this.creatorHead();
                this.newPlayer && (cc.instantiate(this.teach1).parent = cc.find("Canvas"));
                D.common.pCamera = this.startCamera,
                D.common.all = this.all,
                D.common.findText = 3,
                D.common.startBg = this.content2,
                D.control = this,
                this.onExit()
            },
            selectBack: function() {
                if (D.common.date[D.common.aIndex])
                    for (var e = D.common.date[D.common.aIndex].d, t = 0; t < e.length; t++)
                        D.gps.getComponent("Gps").analysis(e[t], 750, "#FFFFFF", 1)
            },
            back: function() {
                cc.find("Canvas/game/ontouch").getComponent("ontouch").testBack();
                var e = D.gps.getComponent("Gps");
                if (D.gps) {
                    e.putAllIndexPool();
                    var t = e.type
                      , n = e.index
                      , o = e.record
                      , i = e.bgline;
                    if ("endParent" == D.common.old.getComponent("select").father) {
                        var c = this.content2.children[this.getIndex(t) + 1].children[0].children;
                        for (var s in c)
                            if (n == c[s].getComponent("select").index && t == c[s].getComponent("select").type) {
                                c[s].getComponent("select").gps.againDraw(null, o, D.common.date);
                                break
                            }
                    } else {
                        var a = this.endParent.children
                          , r = !1
                          , l = void 0;
                        for (var h in a)
                            if (a[h].getComponent("select") && a[h].getComponent("select").type == t && a[h].getComponent("select").index == n) {
                                r = !0,
                                l = a[h];
                                break
                            }
                        r || ((l = cc.instantiate(this.drawpre)).parent = this.endParent);
                        var p = l.getComponent("select");
                        p.resetInfo(t, n),
                        p.chu = !1,
                        p.lines = D.common.lines;
                        var d = p.gps;
                        d.bgline = i,
                        d.long = e.long,
                        d.nIndex = e.nIndex,
                        d.record = o,
                        console.log("bgline222", i),
                        d.date3 = D.common.date,
                        r ? d.againDraw(null, o, D.common.date) : d.againDraw(i, o, D.common.date)
                    }
                    if (this.selectBack(),
                    D.ingDate || (D.ingDate = []),
                    e.record.length > 0)
                        if (D.ingDate.length <= 0) {
                            var g = {
                                type: "",
                                obj: []
                            };
                            g.obj.push({
                                index: e.index,
                                date2: D.common.date,
                                date: e.record,
                                nIndex: e.nIndex,
                                long: D.common.long,
                                lines: D.common.lines,
                                bgline: e.bgline
                            }),
                            g.type = e.type,
                            D.ingDate.push(g)
                        } else {
                            var f = !0;
                            for (var u in D.ingDate)
                                if (D.ingDate[u].type == e.type) {
                                    var m = !0;
                                    if (D.ingDate[u].obj)
                                        for (var v in D.ingDate[u].obj)
                                            if (D.ingDate[u].obj[v].index == e.index) {
                                                if (m = !1,
                                                e.date3)
                                                    for (var x in e.record)
                                                        D.ingDate[u].obj[v].date.push(e.record[x]);
                                                else
                                                    D.ingDate[u].obj[v].date = e.record;
                                                D.ingDate[u].obj[v].date2 = D.common.date,
                                                D.ingDate[u].obj[v].long = D.common.long,
                                                D.ingDate[u].obj[v].nIndex = e.nIndex,
                                                D.ingDate[u].obj[v].lines = D.common.lines,
                                                D.ingDate[u].obj[v].bgline = e.bgline
                                            }
                                    if (m) {
                                        var C = {
                                            index: "",
                                            date2: "",
                                            date: "",
                                            nIndex: 0,
                                            long: 0
                                        };
                                        C.index = e.index,
                                        C.date = e.record,
                                        C.date2 = D.common.date,
                                        C.nIndex = e.nIndex,
                                        C.long = D.common.long,
                                        C.lines = D.common.lines,
                                        C.bgline = e.bgline,
                                        D.ingDate[u] && D.ingDate[u].obj && (D.ingDate[u].obj[D.ingDate[u].obj.length] = C)
                                    }
                                    f = !1
                                }
                            if (f) {
                                var y = {
                                    index: "",
                                    date2: "",
                                    date: "",
                                    nIndex: 0,
                                    long: 0
                                }
                                  , b = {
                                    type: "",
                                    obj: []
                                };
                                b.type = e.type,
                                y.index = e.index,
                                y.date = e.record,
                                y.date2 = D.common.date,
                                y.nIndex = e.nIndex,
                                y.long = D.common.long,
                                y.lines = D.common.lines,
                                y.bgline = e.bgline,
                                b.obj.push(y),
                                D.ingDate.push(b)
                            }
                        }
                    D.common.ing = !0,
                    D.gps.parent = D.common.old,
                    D.gps.x = -120,
                    D.gps.y = -120,
                    D.gps.scale = .32,
                    this.startCamera.x = 0,
                    this.startCamera.y = 0,
                    this.CAMERA.zoomRatio = 1,
                    this.startCamera.active = !0,
                    this.gameBox.active = !1,
                    this.all.active = !0,
                    cc.find("Canvas/list") && cc.find("Canvas/list").getComponent("listNode").back()
                }
            },
            showOver: function(e, t) {
                this.over2Box ? this.over2Box.active = !0 : (this.over2Box = cc.instantiate(this.over2),
                this.over2Box.parent = this.node.parent),
                this.over2Box.getComponent("over2").updateShow(e, t)
            },
            save: function() {
                var e = void 0
                  , t = void 0
                  , n = void 0;
                D.endDate && (t = JSON.stringify(D.endDate),
                this.setItem("useDateEnd", t)),
                D.ingDate && (e = JSON.stringify(D.ingDate),
                this.setItem("useDateing", e)),
                D.lockdate && (n = JSON.stringify(D.lockdate),
                this.setItem("lockdate", n))
            },
            onExit: function() {
                var e = this;
                cc.game.on(cc.game.EVENT_HIDE, function() {
                    e.save()
                })
            },
            waitJava: function(e) {
                if (console.log("wait java"),
                D.addNum)
                    console.log("add???"),
                    cc.find("Canvas/game/ontouch").getComponent("ontouch").addNum();
                else {
                    var t = D.lockdate[this.getIndex(D.type)];
                    for (var n in t)
                        if (D.index == t[n]) {
                            t.splice(n, 1);
                            var o = this.content2.children[this.getIndex(D.type) + 1];
                            console.log("p.name", o.name);
                            var i = o.children[0].children;
                            for (var c in i)
                                if (i[c].getComponent("select").index == D.index) {
                                    i[c].getComponent("select").unLock(),
                                    i[c].getComponent("select").change();
                                    break
                                }
                        }
                }
            },
            callJava: function() {
                console.log("call java")
            },
            UITipCback: function(e) {
                switch (e) {
                case 1:
                    this.showUITip(1);
                    break;
                case 3:
                    this.showUITip(3);
                    break;
                case 4:
                    this.showUITip(4)
                }
                console.log("\u56de\u8c03UI")
            },
            showUITip: function(e) {
                this.shareObox ? (this.shareObox.active = !0,
                this.shareObox.getComponent("showUITip").change(e)) : (this.shareObox = cc.instantiate(this.shareO),
                this.shareObox.parent = this.node.parent,
                this.shareObox.getComponent("showUITip").change(e))
            }
        }),
        cc._RF.pop()
    }
    , {
        testPosY: "testPosY"
    }],
    drawShow: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f4c27UXP2lBM7nJZlSAuXBt", "drawShow"),
        cc.Class({
            extends: cc.Component,
            properties: {
                share: cc.Node,
                repeat: cc.Node,
                delete: cc.Label,
                sureGg: cc.Node,
                picon: cc.Sprite,
                deleteBG: cc.Sprite,
                icon: [cc.SpriteFrame],
                sccg: cc.Prefab,
                sccgIcon: [cc.SpriteFrame]
            },
            getAtlasInfo: function(e, t) {
                cc.loader.loadRes("res", cc.SpriteAtlas, function(n, o) {
                    var i = o.getSpriteFrame(t);
                    e.getComponent(cc.Sprite).spriteFrame = i
                })
            },
            onLoad: function() {
                "en" == D.lange ? (this.getAtlasInfo(this.share, "fenxiang1"),
                this.getAtlasInfo(this.repeat, "reset1"),
                this.delete.string = "delete",
                this.deleteBG.spriteFrame = this.icon[0]) : (this.delete.string = "\u5220\u9664",
                this.deleteBG.spriteFrame = this.icon[1]),
                this.endNode = cc.find("Canvas/allBg/endNode/view/content")
            },
            draw: function(e, t) {
                this.type = e,
                this.index = t;
                var n = this;
                cc.loader.loadRes(this.type + "/p" + this.type + "e" + this.index, cc.SpriteFrame, function(e, t) {
                    e ? console.log("err drawshow", e) : n.picon.spriteFrame = t
                })
            },
            onshare: function() {
                console.log("onshare"),
                "en" == D.lange ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shares", "(Ljava/lang/String;Ljava/lang/String;)V", "Easy coloring, rapid decompression, a large number of classic pictures, and more beautiful pictures of Chinese style, so you can start a spiritual yoga journey together!", "https://play.google.com/store/apps/details?id=com.gzyike.painting") : jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shares", "(Ljava/lang/String;Ljava/lang/String;)V", "\u8f7b\u677e\u6d82\u8272\uff0c\u5feb\u901f\u51cf\u538b\uff0c\u6d77\u91cf\u7ecf\u5178\u540d\u8457\u56fe\u7247\uff0c\u66f4\u6709\u4e2d\u56fd\u98ce\u97f5\u5473\u7cbe\u7f8e\u56fe\u7247\u7b49\u4f60\u6d82\u8272\uff0c\u5feb\u6765\u4e00\u8d77\u5f00\u59cb\u4e00\u6bb5\u5fc3\u7075\u745c\u4f3d\u4e4b\u65c5\u5427\uff01", "https://play.google.com/store/apps/details?id=com.gzyike.painting")
            },
            onrepeat: function() {
                console.log("onrepeat"),
                this.node.active = !1
            },
            ondelete: function() {
                console.log("ondelete"),
                this.sureGg.active = !0
            },
            deleteOver: function() {
                var e = this;
                this.sccgBox ? this.sccgBox.active = !0 : (this.sccgBox = cc.instantiate(this.sccg),
                this.sccgBox.parent = cc.find("Canvas")),
                "en" == D.lange ? this.sccgBox.getComponent(cc.Sprite).spriteFrame = this.sccgIcon[0] : this.sccgBox.getComponent(cc.Sprite).spriteFrame = this.sccgIcon[1],
                setTimeout(function() {
                    e.sccgBox.active = !1
                }, 1e3)
            },
            sure: function() {
                for (var e in console.log(" this.node.active = false"),
                this.node.active = !1,
                this.sureGg.active = !1,
                this.endNode.children)
                    if (this.endNode.children[e].getComponent("select2").type == this.type && this.endNode.children[e].getComponent("select2").index == this.index) {
                        var t = this.endNode.children[e].getComponent("select2").gps.record
                          , n = this.endNode.children[e].getComponent("select2").gps.date
                          , o = this.endNode.children[e].getComponent("select2").gps.lines;
                        for (var i in t)
                            for (var c in n)
                                n[c].c == t[i].c && n[c].d.push(t[i].d);
                        this.endNode.children[e].destroy(),
                        D.control.creatorDraw(this.type, this.index, !0, o);
                        var s = D.endDate[this.getIndex(this.type)];
                        for (var a in s)
                            s[a] == this.index && s.splice(a, 1);
                        break
                    }
                this.deleteOver()
            },
            getIndex: function(e) {
                var t = void 0;
                switch (e) {
                case "zgf":
                    t = 0;
                    break;
                case "dw":
                    t = 1;
                    break;
                case "zw":
                    t = 2;
                    break;
                case "rwys":
                    t = 3;
                    break;
                case "mtl":
                    t = 4
                }
                return t
            },
            cancel: function() {
                this.sureGg.active = !1
            },
            close: function() {
                console.log("delete"),
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    gPoint: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "75288A3q5RC7K5Y5AHsnXPE", "gPoint"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ctx: cc.Graphics
            },
            drawCircle2: function(e, t) {
                this.ctx.strokeColor = cc.Color.GREEN,
                this.ctx.circle(e, t, 3),
                this.ctx.stroke()
            },
            drawCircle: function(e, t) {
                this.ctx.strokeColor = cc.Color.RED,
                this.ctx.circle(e, t, 1),
                this.ctx.stroke()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    hbg: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "08823waoVFHTKe1D5CM48Ub", "hbg"),
        cc.Class({
            extends: cc.Component,
            properties: {
                type: "",
                typeSpr: cc.Sprite,
                content: cc.Node,
                drawpre: cc.Prefab,
                drawEnd: cc.Prefab,
                sc: cc.ScrollView
            },
            getAtlasInfo: function(e, t) {
                cc.loader.loadRes("titile", cc.SpriteAtlas, function(n, o) {
                    var i = o.getSpriteFrame(t);
                    e.getComponent(cc.Sprite).spriteFrame = i
                })
            },
            onLoad: function() {
                this.node.on("touchstart", this.ontouchstarts, this),
                this.node.on("touchmove", this.ontouchmove1, this),
                this.node.on("touchend", this.ontouchend1, this),
                this.node.on("touchcancel", this.ontouchcancel1, this),
                this.all = cc.find("Canvas/allBg")
            },
            ontouchstarts: function(e) {
                D.oldSC = this,
                this.svPos = e.getLocation()
            },
            ontouchmove1: function(e) {
                if (this.svPos || (this.svPos = e.getLocation()),
                2 != this.drawend) {
                    var t = e.getLocation();
                    Math.abs(this.svPos.x - t.x) >= Math.abs(this.svPos.y - t.y) ? (this.sc.enabled = !0,
                    D.SC.rooLBottom()) : (this.roolToLeft(),
                    this.sc.enabled = !1),
                    this.svPos = t
                }
            },
            ontouchend1: function(e) {
                this.svPos = e.getLocation(),
                console.log("D.oldSC end"),
                this.all.active = !1,
                this.all.active = !0,
                D.oldSC.sc.enabled = !0
            },
            ontouchcancel1: function(e) {
                this.svPos = e.getLocation(),
                console.log("D.oldSC cancel"),
                void 0 !== D.oldSC && (console.log("D.oldSC cancel2"),
                D.oldSC.sc.enabled = !0)
            },
            roolToLeft: function() {
                for (var e in this.content.children)
                    e < 3 && (this.content.children[e].opacity = 255);
                this.sc.scrollToLeft()
            },
            change: function(e) {
                if (this.type = e,
                "en" == D.lange)
                    switch (this.type) {
                    case "zgf":
                        this.getAtlasInfo(this.typeSpr, "gzgfe");
                        break;
                    case "dw":
                        this.getAtlasInfo(this.typeSpr, "gdwe");
                        break;
                    case "zw":
                        this.getAtlasInfo(this.typeSpr, "gzwe");
                        break;
                    case "rwys":
                        this.getAtlasInfo(this.typeSpr, "grwyse");
                        break;
                    case "mtl":
                        this.getAtlasInfo(this.typeSpr, "gmtle")
                    }
                else
                    switch (this.type) {
                    case "zgf":
                        this.getAtlasInfo(this.typeSpr, "gzgf");
                        break;
                    case "dw":
                        this.getAtlasInfo(this.typeSpr, "gdw");
                        break;
                    case "zw":
                        this.getAtlasInfo(this.typeSpr, "gzw");
                        break;
                    case "rwys":
                        this.getAtlasInfo(this.typeSpr, "grwys");
                        break;
                    case "mtl":
                        this.getAtlasInfo(this.typeSpr, "gmtl")
                    }
            },
            creator: function(e, t, n) {
                var o = void 0;
                n ? (o = cc.instantiate(this.drawEnd)).getComponent("select2").resetInfo(t, e) : (o = cc.instantiate(this.drawpre),
                e.index ? (console.log("index"),
                o.getComponent("select").resetInfo(t, e.index),
                o.getComponent("select").gps.date3 = e.date2,
                o.getComponent("select").gps.nIndex = e.nIndex,
                o.getComponent("select").gps.long = e.long,
                o.getComponent("select").gps.bgline = e.bgline,
                o.getComponent("select").gps.againDraw(e.bgline, e.date, e.date2),
                o.getComponent("select").lines = e.lines) : o.getComponent("select").resetInfo(t, e)),
                o.parent = this.content
            }
        }),
        cc._RF.pop()
    }
    , {}],
    index: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c6476IFXWNNRruAAOu/3+r9", "index"),
        cc.Class({
            extends: cc.Component,
            properties: {
                txt: cc.Node,
                index: 0
            },
            getIndex: function() {
                for (var e = this.node.parent.children, t = 0; t < e.length; t++) {
                    var n = e[t].getComponent("index").index;
                    if (n == D.common.aIndex + 1) {
                        console.log("\u89e6\u53d1 reset", n),
                        e[t].getComponent("index").reset();
                        break
                    }
                }
            },
            ontouchstart: function() {
                (D.common.aIndex != this.index - 1 || D.common.ing) && (null != D.common.aIndex && this.getIndex(),
                this.select()),
                D.common.ing = !1
            },
            putBackPool: function(e, t) {},
            test: function(e) {
                if (D.gps.getComponent("Gps").Claer(!1, !0),
                D.common.lines[e])
                    for (var t = 0; t < D.common.lines[e].length; t++)
                        for (var n = D.common.lines[e][t], o = 0; o < n.length; o++)
                            D.gps.getComponent("Gps").drawCircle2(n[o].x, n[o].y)
            },
            select: function() {
                !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                cc.find("Canvas/game").getChildByName("whitec").color = this.node.color,
                D.common.aIndex = this.index - 1,
                this.node.scale = 1.2;
                for (var e = D.common.date[this.index - 1].d, t = 0; t < e.length; t++)
                    D.gps.getComponent("Gps").analysis(e[t], 750, "#737272", 1, 0)
            },
            reset: function() {
                this.node.scale = 1;
                for (var e = D.common.date[D.common.aIndex].d, t = 0; t < e.length; t++)
                    D.gps.getComponent("Gps").analysis(e[t], 750, "#FFFFFF", 1)
            },
            changeColor: function(e, t) {
                this.index = e,
                this.txt.getComponent(cc.Label).string = e,
                t && (this.node.color = (new cc.Color).fromHEX(t)),
                this.node.color.r < 127 && this.node.color.g < 127 && this.node.color.b < 127 ? this.txt.color = cc.Color.WHITE : this.txt.color = cc.Color.BLACK
            }
        }),
        cc._RF.pop()
    }
    , {}],
    language: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "142f71YGXlHaZS6uVAh4DBt", "language"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ingTit: cc.Node,
                endTit: cc.Node,
                endBtnB: cc.Node,
                ingBtnb: cc.Node,
                wdhl: cc.Node,
                intheend: cc.Sprite,
                endIcon: [cc.SpriteFrame]
            },
            loadResSprite: function(e, t) {
                cc.loader.loadRes(t, cc.SpriteFrame, function(t, n) {
                    t ? console.log("err language", t) : e.getComponent(cc.Sprite).spriteFrame = n
                })
            },
            getAtlasInfo: function(e, t) {
                cc.loader.loadRes("res", cc.SpriteAtlas, function(n, o) {
                    n && console.log("err language ats", n);
                    var i = o.getSpriteFrame(t);
                    e.getComponent(cc.Sprite).spriteFrame = i
                })
            },
            onLoad: function() {
                D.canvas = this.node,
                "zh-hk" != cc.sys.languageCode && "zh-cn" != cc.sys.languageCode && "zh-tw" != cc.sys.languageCode && "zh" != cc.sys.languageCode ? (console.log("\u66ff\u6362\u82f1\u6587\u7d20\u6750\u7d20\u6750"),
                this.getAtlasInfo(this.ingTit, "ingTit1"),
                this.getAtlasInfo(this.endTit, "endTit1"),
                this.loadResSprite(this.endBtnB, "huazuo2"),
                this.loadResSprite(this.ingBtnb, "chuangzuo2"),
                this.intheend.spriteFrame = this.endIcon[0],
                this.getAtlasInfo(this.wdhl, "wdhl1"),
                D.lange = "en") : (this.intheend.spriteFrame = this.endIcon[1],
                D.lange = "cn")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    listChange: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0fbdcOryTVCtaCmRtXuDytG", "listChange"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SV: cc.ScrollView
            },
            do: function(e) {
                var t = this.node.children;
                t[e].active = !0;
                for (var n = 0; n < t[e].children.length; n++)
                    t[e].children[n].opacity = 255;
                this.SV.content = t[e];
                for (var o = 0; o < t.length; o++)
                    o != e && (t[o].active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    listNode: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "643b9oebeBKcoyQMAIiP49H", "listNode"),
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                view: cc.Node,
                SV: cc.ScrollView
            },
            start: function() {
                this.backNode = cc.find("Canvas/allBg/ingNode")
            },
            getAtlasInfo: function(e, t) {
                cc.loader.loadRes("res", cc.SpriteAtlas, function(n, o) {
                    var i = o.getSpriteFrame(t);
                    e.getComponent(cc.Sprite).spriteFrame = i
                })
            },
            c: function(e) {
                console.log("\u8fdb\u6765\u7684\u662f\u51e03", e),
                this.content.children[e].getComponent("list").change();
                for (var t = D.common.startBg.children, n = 1; n < t.length; n++)
                    for (var o = t[n].getChildByName("content").children, i = this.view.children[n - 1], c = o.length - 1; c >= 0; c--)
                        o[c].scale = 1.25,
                        o[c].parent = i;
                for (var s = this.SV.content.children, a = 0; a < s.length; a++)
                    s[a].opacity = 255
            },
            back: function() {
                for (var e = D.common.startBg.children, t = 1; t < e.length; t++) {
                    for (var n = this.view.children[t - 1].children, o = e[t].getChildByName("content"), i = n.length - 1; i >= 0; i--) {
                        var c = n[i];
                        c.scale = 1,
                        c.parent = o,
                        c.y = 0
                    }
                    e[t].getComponent("testPoxX").test()
                }
                this.node.active = !1,
                this.backNode.active = !0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    list: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "496861hoAxCgaUNpy83ZvNz", "list"),
        cc.Class({
            extends: cc.Component,
            properties: {
                sprite: cc.Sprite,
                s: cc.SpriteFrame,
                us: cc.SpriteFrame,
                es: cc.SpriteFrame,
                eus: cc.SpriteFrame,
                index: 0,
                b: !1,
                view: e("listChange"),
                father: cc.Node
            },
            start: function() {
                this.node.on("touchstart", this.change, this)
            },
            change: function() {
                "en" == D.lange ? this.sprite.spriteFrame = this.es : this.sprite.spriteFrame = this.s,
                this.b = !0,
                this.view.do(this.index);
                for (var e = this.father.children, t = 0; t < e.length; t++)
                    t != this.index && e[t].getComponent("list").resume()
            },
            resume: function() {
                "en" == D.lange ? this.sprite.spriteFrame = this.eus : this.sprite.spriteFrame = this.us
            }
        }),
        cc._RF.pop()
    }
    , {
        listChange: "listChange"
    }],
    loading: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5998fE6BjJHLZ3f5U+9Ng6J", "loading"),
        cc.Class({
            extends: cc.Component,
            properties: {
                fc: cc.Node
            },
			onLoad:function(){
			//	this.autoAdapteScreen();
			},
			autoAdapteScreen:function(){
				// 适配解决方案
				let _canvas = cc.Canvas.instance;
			// 设计分辨率比
				let _rateR = _canvas.designResolution.height/_canvas.designResolution.width;
			// 显示分辨率比
				let _rateV = cc.winSize.height/cc.winSize.width;
				console.log("winSize: rateR: "+_rateR+" rateV: "+_rateV);
				if (_rateV > _rateR)
				{
					_canvas.fitHeight = false;
					_canvas.fitWidth = true;
					console.log("winSize: fitWidth");
				}
				else
				{
					_canvas.fitHeight = true;
					_canvas.fitWidth = false;
					console.log("winSize: fitHeight");
				}
			},
            onEnable: function() {
                this.fc.runAction(cc.repeatForever(cc.rotateBy(1, -180)))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    mainBtn: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6f5e79nhHdBD6tl8JUvhtsH", "mainBtn"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ingBtnW: cc.Node,
                endBtnW: cc.Node,
                ingNode: cc.Node,
                endNode: cc.Node,
                ingTit: cc.Node,
                endTit: cc.Node,
                setBtn: cc.Node,
                ingBtnb: cc.Node,
                twos: cc.Node,
                threes: cc.Node,
                endBtnb: cc.Node,
                setNode: cc.Prefab,
                LAYOUT: cc.Node,
                layout: cc.Layout,
                gray: cc.Node,
                liangUs: cc.Node,
                sanUs: cc.Node,
                drawNode: cc.Prefab,
                endPrefab: cc.Prefab
            },
            ing: function(e) {
                this.ingBtnW.active = e,
                this.endBtnW.active = !e,
                this.setBtn.active = !e,
                this.ingNode.active = e,
                this.endNode.active = !e,
                this.ingTit.active = e,
                this.endTit.active = !e,
                this.endBtnb.active = e,
                this.ingBtnb.active = !e,
                this.gray.active = !e
            },
            changeIng: function() {
                this.ing(!0)
            },
            chooseType: function(e) {
                var t = void 0;
                switch (e) {
                case "0":
                    t = "zgf";
                    break;
                case "1":
                    t = "dw";
                    break;
                case "2":
                    t = "zw";
                    break;
                case "3":
                    t = "rwys";
                    break;
                case "4":
                    t = "mtl"
                }
                return t
            },
            changeEnd: function() {
                if (console.log("\u6253\u5f00 changeend"),
                this.ing(!1),
                this.two(),
                D.endDate && !this.endDate) {
                    console.log("\u7b2c\u4e00\u6b21\u6253\u5f00\u8981\u66f4\u65b0end"),
                    this.endDate = !0;
                    var e = D.endDate;
                    if (console.log("endDate  ---", e),
                    e.length > 0)
                        for (var t in e)
                            for (var n in e[t])
                                if (this.LAYOUT.children.length > 0) {
                                    var o = !0;
                                    for (var i in this.LAYOUT.children)
                                        if (this.LAYOUT.children[i].getComponent("select2")) {
                                            var c = this.LAYOUT.children[i].getComponent("select2").index
                                              , s = this.LAYOUT.children[i].getComponent("select2").type;
                                            this.chooseType(t) == s && c == e[t][n] && (o = !1)
                                        }
                                    if (o) {
                                        var a = cc.instantiate(this.endPrefab);
                                        a.parent = this.LAYOUT,
                                        a.getComponent("select2").resetInfo(this.chooseType(t), e[t][n], !0),
                                        console.log(" \u662f\u4ec0\u4e48\u5462\uff1f", this.chooseType(t), "???: ", e[t][n])
                                    }
                                } else {
                                    console.log("\u8fd9\u91cc\u5427 mainbtn changeend");
                                    var r = cc.instantiate(this.endPrefab);
                                    r.parent = this.LAYOUT,
                                    console.log(" \u662f\u4ec0\u4e48\u5462\uff1f", this.chooseType(t), "???: ", e[t][n]),
                                    r.getComponent("select2").resetInfo(this.chooseType(t), e[t][n], !0)
                                }
                } else
                    console.log("\u8fdb\u5230\u4e86\u8fd9\u91cc\uff1f\uff1f\uff1f mainbtn changeend");
                if (D.ingDate && !this.ingDate) {
                    console.log("\u7b2c\u4e00\u6b21\u6253\u5f00\u8981\u66f4\u65b0ing"),
                    this.ingDate = !0;
                    var l = this.LAYOUT.children;
                    for (var h in D.ingDate) {
                        var p = D.ingDate[h].type
                          , d = D.ingDate[h].obj;
                        for (var g in d) {
                            var f = D.ingDate[h].obj[g]
                              , u = f.index
                              , m = !0;
                            if (l.length > 0)
                                for (var v in l)
                                    if (console.log("\u5bf9\u6bd4type", p, "getComponent type", l[v].getComponent("select").type),
                                    console.log("\u5bf9\u6bd4index", u, "getComponent index", l[v].getComponent("select").index),
                                    l[v].getComponent("select").type == p && l[v].getComponent("select").index == u) {
                                        m = !1;
                                        break
                                    }
                            if (m) {
                                console.log("\u5e94\u8be5\u662f\u521b\u5efa\u4e86");
                                var x = cc.instantiate(this.drawNode);
                                x.parent = this.LAYOUT;
                                var C = x.getComponent("select");
                                C.resetInfo(p, u),
                                C.chu = !1,
                                C.lines = f.lines;
                                var y = C.gps;
                                y.bgline = f.bgline,
                                y.long = f.long,
                                y.nIndex = f.nIndex,
                                y.record = f.date,
                                y.date3 = f.date2,
                                y.againDraw(y.bgline, y.record, y.date3)
                            }
                        }
                    }
                }
            },
            t: function(e) {
                this.twos.active = e,
                this.threes.active = !e,
                this.liangUs.active = !e,
                this.sanUs.active = e
            },
            two: function() {
                this.t(!0);
                var e = this.LAYOUT.children;
                for (var t in this.layout.paddingLeft = 55,
                this.layout.paddingRight = 55,
                this.layout.paddingTop = 55,
                this.layout.spacingX = 20,
                this.layout.spacingY = 20,
                e)
                    e[t].scale = 1
            },
            three: function() {
                this.t(!1);
                var e = this.LAYOUT.children;
                for (var t in this.layout.paddingLeft = 7.5,
                this.layout.paddingRight = 7.5,
                this.layout.paddingTop = 27.5,
                this.layout.spacingX = 5,
                this.layout.spacingY = 5,
                e)
                    e[t].scale = .8
            },
            creatorSet: function() {
                this.setBox ? this.setBox.active = !0 : (this.setBox = cc.instantiate(this.setNode),
                D.canvas.addChild(this.setBox),
                this.setBox.parent = D.canvas)
            },
            showSet: function() {
                this.creatorSet()
            },
            getIndex: function(e) {
                var t = void 0;
                switch (e) {
                case "zgf":
                    t = 1;
                    break;
                case "dw":
                    t = 2;
                    break;
                case "zw":
                    t = 3;
                    break;
                case "rwys":
                    t = 4;
                    break;
                case "mtl":
                    t = 5
                }
                return t - 1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    making: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "efa91wi+dZH3KXnrlEud6uh", "making"),
        cc.Class({
            extends: cc.Component,
            properties: {
                btnBg: cc.Sprite,
                icon: [cc.SpriteFrame]
            },
            onLoad: function() {
                "en" == D.lange ? this.btnBg.spriteFrame = this.icon[0] : this.btnBg.spriteFrame = this.icon[1]
            },
            cancel: function() {
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    more: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "60ee7FWil1FBafQ5lFdWO5v", "more"),
        cc.Class({
            extends: cc.Component,
            properties: {
                index: 0,
                list: cc.Prefab
            },
            onMoreClick: function() {
                this.listBox ? this.listBox.active = !0 : (this.listBox = cc.instantiate(this.list),
                this.listBox.parent = cc.find("Canvas")),
                console.log(this.index),
                console.log("this.index", this.index),
                this.listBox.getComponent("listNode").c(this.index)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    num: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "72954DRu9lEbZq6/dgAdxeR", "num"),
        cc.Class({
            extends: cc.Component,
            properties: {
                sg: cc.Node,
                ss: cc.Node,
                g: cc.Node,
                icon: [cc.SpriteFrame],
                sgs: cc.Sprite,
                sss: cc.Sprite,
                gs: cc.Sprite
            },
            change: function(e) {
                e < 10 ? (this.g.active = !0,
                this.sg.active = !1,
                this.ss.active = !1,
                this.gs.spriteFrame = this.icon[e]) : (this.g.active = !1,
                this.sg.active = !0,
                this.ss.active = !0,
                this.sgs.spriteFrame = this.icon[parseInt(e / 10)],
                this.sss.spriteFrame = this.icon[e % 10])
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ontouch: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0a298nuF2NICpxm2rd//o69", "ontouch"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bar: cc.ProgressBar,
                content: cc.Node,
                barText: cc.Label,
                findText: cc.Label,
                over: cc.Prefab,
                icon: cc.Node,
                test: cc.Label,
                test1: cc.Label,
                view: cc.Node,
                SV: cc.Node,
                parent: cc.Node
            },
            pointInPolygon: function(e, t) {
                for (var n = !1, o = 0; o < t.length - 1; o++) {
                    var i = (t[o + 1].y - t[o].y) / (t[o + 1].x - t[o].x)
                      , c = t[o].x < e.x && e.x < t[o + 1].x || t[o + 1].x < e.x && e.x < t[o].x
                      , s = e.y < i * (e.x - t[o].x) + t[o].y;
                    c && s && (n = !n)
                }
                return n
            },
            save: function() {
                console.log("ontouch save");
                var e = D.common.old.getComponent("select").type
                  , t = D.common.old.getComponent("select").index
                  , n = e + t + ".jpg";
                console.log("path:", e + t);
                var o = "http://psww216i1.bkt.clouddn.com/share/paint/" + n;
                console.log("\u4fdd\u5b58\u7684\u5730\u5740path:", o)
            },
            open: function() {
                D.common.old.getComponent("select").drawend = 1,
                this.camera.x = 0,
                this.camera.y = 0;
                var e = D.gps.getComponent("Gps");
                e.putAllIndexPool(),
                e.Claer(!1, !0),
                D.gps.parent = D.common.old,
                D.gps.x = -120,
                D.gps.y = -120,
                D.gps.scale = .32,
                this.overShow(),
                this.uiCamera.active = !1,
                this.CAMERA.zoomRatio = 1,
                D.common.old.parent = this.overBox,
                this.node.parent.active = !1,
                D.common.old.scale = 2,
                D.common.old.x = this.overBox.width / 2,
                D.common.old.y = this.overBox.width / 2 - 200,
                D.common.old.getComponent("select").enabled = !1,
                e.enabled = !1,
                e.drawLine2()
            },
            overShow: function() {
                this.overBox ? this.overBox.active = !0 : (this.overBox = cc.instantiate(this.over),
                this.overBox.parent = cc.find("Canvas"))
            },
            back: function() {
                console.log("ontouch back"),
                this.control.back()
            },
            onLoad: function() {
                this.uiCamera = cc.find("Canvas/uiCamera"),
                this.camera = D.common.pCamera,
                this.CAMERA = this.camera.getComponent(cc.Camera),
                this.control = cc.find("Canvas/control").getComponent("control"),
                D.common.iParent = this.content,
                this.findText.string = D.common.findText;
                var e = cc.view.getVisibleSize();
                D.common.screenHeight = e.height;
                e.width;
                this.oldCPos = new cc.v2,
                this.node.on("touchstart", this.ontouchstarts, this),
                this.node.on("touchmove", this.ontouchmove1, this),
                D.bar = this.bar,
                D.barText = this.barText
            },
            SCbegan: function() {
                this.getIndex(),
                console.log("scroll-began"),
                this.zhongheTemp = !0
            },
            SCended: function() {
                console.log("scroll-ended");
                var e = this.SV.getComponent(cc.ScrollView).getScrollOffset();
                console.log("offset.x", Math.round(e.x - 100)),
                console.log("offset.y", e.y);
                var t = parseInt(Math.round(e.x - 100) / 115);
                console.log("index", t);
                var n = parseInt(e.x - 115 * Math.abs(t));
                console.log("temp2", n),
                this.offsetY = e.y,
                this.zhongheTemp && -0 != n && 0 != n && n < 0 && (this.offsetX = n,
                console.log("this.offsetX 77 ", this.offsetX));
                var o = this.parent.children;
                D.common.nIndex += t,
                o[Math.abs(t)].getComponent("index").select(!1),
                console.log("this.parent.x777", this.parent.x),
                console.log("offset.x777", e.x),
                this.parent.x = 115 * t
            },
            zhonghe: function() {
                this.zhongheTemp && (console.log("\u8981\u79fb\u52a8\u7684\u5730\u65b9", this.offsetX),
                this.SV.getComponent(cc.ScrollView).scrollToOffset(cc.v2(this.offsetX, this.offsetY), .5),
                this.zhongheTemp = !1)
            },
            getItem: function(e) {
                return !!cc.sys.localStorage.getItem(e) && cc.sys.localStorage.getItem(e)
            },
            onEnable: function() {
                D.common.nIndex = 0,
                console.log("on touch\u88ab\u6fc0\u6d3b---------")
            },
            update: function() {},
            setItem: function(e, t) {
                cc.sys.localStorage.setItem(e, t)
            },
            ontouchmove1: function(e) {
                this.CAMERA.zoomRatio <= 1 && (this.CAMERA.zoomRatio = 1,
                this.camera.x = 0,
                this.camera.y = 0);
                var t = e.getLocation();
                if (this.one && this.CAMERA.zoomRatio > 1 && (this.camera.x += (this.oldPos.x - t.x) / (this.CAMERA.zoomRatio / 4),
                this.camera.y += (this.oldPos.y - t.y) / (this.CAMERA.zoomRatio / 4),
                this.camera.x < -this.node.width / 2 && (this.camera.x = -this.node.width / 2),
                this.camera.x > this.node.width / 2 && (this.camera.x = this.node.width / 2),
                this.camera.y < -this.node.height / 2 && (this.camera.y = -this.node.height / 2),
                this.camera.y > this.node.height / 2 && (this.camera.y = this.node.height / 2),
                this.oldPos.x = t.x,
                this.oldPos.y = t.y),
                0 == e.touch._id)
                    this.oldPos = t;
                else if (1 == e.touch._id) {
                    this.oldPos2 = t;
                    var n = Math.abs(this.oldPos.x - this.oldPos2.x) + Math.abs(this.oldPos.y - this.oldPos2.y);
                    n && (this.CAMERA.zoomRatio += (n.toFixed(1) - this.distance.toFixed(1)) / (300 / this.CAMERA.zoomRatio)),
                    this.CAMERA.zoomRatio > 15 && (this.CAMERA.zoomRatio = 15),
                    this.CAMERA.zoomRatio < 1 && (this.CAMERA.zoomRatio = 1),
                    this.distance = n
                }
            },
            getIndexPos: function() {
                var e = this.view.children[0].children
                  , t = new cc.v2;
                t.x = e[0].x,
                t.y = e[0].y;
                D.CAMERA.getWorldToCameraPoint(t)
            },
            getIndex: function() {
                for (var e = this.view.children[0].children, t = 0; t < e.length; t++) {
                    var n = e[t].getComponent("index").index;
                    if (n == D.common.aIndex + 1) {
                        console.log("\u89e6\u53d1 ontouch", n),
                        e[t].getComponent("index").reset();
                        break
                    }
                }
            },
            testBack: function() {
                for (var e = this.content.children, t = 0; t < e.length; t++) {
                    if (e[t].getComponent("index").index == D.common.aIndex + 1) {
                        var n = this.content.children[t];
                        n.removeFromParent(!0),
                        n.destroy()
                    }
                }
            },
            ontouchstarts: function(e) {
                var t = this
                  , n = e.getLocation();
                0 == e.touch._id ? (this.one = !0,
                this.oldPos = n) : 1 == e.touch._id && (this.one = !1,
                this.oldPos2 = n,
                this.distance = Math.abs(this.oldPos.x - this.oldPos2.x) + Math.abs(this.oldPos.y - this.oldPos2.y)),
                this.getItem("first") || (this.setItem("first", !0),
                this.CAMERA.zoomRatio = 5);
                var o = new cc.v2
                  , i = new cc.v2;
                o = this.CAMERA.getCameraToWorldPoint(n),
                (i = this.node.convertToNodeSpaceAR(o)).y = i.y - 80;
                for (var c = D.common.lines[D.common.aIndex], s = D.gps.getComponent("Gps").lines, a = 0; a < c.length; a++)
                    if (this.pointInPolygon(i, c[a])) {
                        D.gps.getComponent("Gps").analysis(D.common.date[D.common.aIndex].d[a], 750, D.common.date[D.common.aIndex].c, 2),
                        D.gps.getComponent("Gps").nIndex++;
                        var r = D.gps.getComponent("Gps").nIndex / D.common.long;
                        this.bar.progress = r || 0;
                        var l = parseInt(r ? 100 * r : 0);
                        this.barText.string = l ? l + "%" : "0%";
                        var h = {
                            d: D.common.date[D.common.aIndex].d[a],
                            c: D.common.date[D.common.aIndex].c
                        };
                        D.gps.getComponent("Gps").record.push(h),
                        s[D.common.aIndex] || (s[D.common.aIndex] = []),
                        s[D.common.aIndex].push(c[a]),
                        D.common.date[D.common.aIndex].d.splice(a, 1),
                        c.splice(a, 1),
                        0 == c.length && function() {
                            for (var e = t.content.children, n = function(n) {
                                if (e[n].getComponent("index").index == D.common.aIndex + 1) {
                                    var o = cc.sequence(cc.moveBy(.7, 0, 200), cc.callFunc(function() {
                                        var o = t.content.children[n];
                                        o.removeFromParent(!0),
                                        o.destroy(),
                                        0 == e.length ? (cc.loader.loadRes(D.gps.getComponent("Gps").type + "/l" + D.gps.getComponent("Gps").type + D.gps.getComponent("Gps").index, function(e, t) {
                                            e && console.log("change l err", e),
                                            t.json = s,
                                            cc.loader.loadRes(D.gps.getComponent("Gps").type + "/l" + D.gps.getComponent("Gps").type + D.gps.getComponent("Gps").index, function(e, t) {
                                                e && console.log("change l err", e)
                                            })
                                        }),
                                        t.open(),
                                        t.count = 0,
                                        t.callback = function() {
                                            this.count === D.gps.getComponent("Gps").record.length && (this.overBox.getComponent("over").btnShow(),
                                            this.unschedule(this.callback)),
                                            this.reback(this.count),
                                            this.count++
                                        }
                                        ,
                                        t.schedule(t.callback, 5 / D.gps.getComponent("Gps").record.length)) : n == e.length ? (console.log("i == cChilden.length select"),
                                        t.content.children[e.length - 1].getComponent("index").select()) : (console.log("i == cChilden.length else"),
                                        t.content.children[n].getComponent("index").select())
                                    }));
                                    t.content.children[n].runAction(o)
                                }
                            }, o = 0; o < e.length; o++)
                                n(o)
                        }()
                    }
            },
            FIND: function() {
                if (D.common.findText > 0) {
                    D.common.findText--,
                    this.findText.string = D.common.findText;
                    var e = new cc.v2
                      , t = D.common.date[D.common.aIndex].d[0];
                    t ? (e.x = t[1],
                    e.y = t[2],
                    this.camera.x = e.x - 375,
                    this.camera.y = 750 - e.y - 425,
                    this.CAMERA.zoomRatio = 8) : console.log("\u4e0d\u5b58\u5728\u6700\u8fd1\u70b9")
                } else
                    console.log("\u6b21\u6570\u4e0d\u591f"),
                    D.addNum = !0,
                    this.control.callJava()
            },
            addNum: function(e, t) {
                console.log("\u589e\u52a0\u6b21\u6570"),
                D.common.findText++,
                this.findText.string = D.common.findText
            },
            reback: function(e) {
                D.gps.getComponent("Gps").record[e] && D.gps.getComponent("Gps").analysis(D.gps.getComponent("Gps").record[e].d, 750, D.gps.getComponent("Gps").record[e].c, 2)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    over2: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a871bCoybZJ0YSu6H/zu2gv", "over2"),
        cc.Class({
            extends: cc.Component,
            properties: {
                fx: cc.Node,
                bc: cc.Node,
                xyz: cc.Node,
                info: cc.Node,
                icon: cc.Sprite
            },
            onShare: function() {
                console.log("share over2")
            },
            loadResSprite: function(e, t) {
                cc.loader.loadRes(t, cc.SpriteFrame, function(t, n) {
                    t ? console.log("err over ", t) : e.getComponent(cc.Sprite).spriteFrame = n
                })
            },
            onLoad: function() {
                "en" == D.lange && (this.loadResSprite(this.fx, "nfx2"),
                this.loadResSprite(this.bc, "nbc2"),
                this.loadResSprite(this.xyz, "nxyz2"),
                this.loadResSprite(this.info, "nwcinfo2"))
            },
            updateShow: function(e, t) {
                console.log("over2 update show"),
                this.type = e,
                this.index = t;
                var n = this;
                cc.loader.loadRes(e + "/p" + e + "e" + t, cc.SpriteFrame, function(e, t) {
                    e ? console.log("err over2", e) : n.icon.spriteFrame = t
                })
            },
            save: function() {
                console.log("over2 save");
                var e = "http://psww216i1.bkt.clouddn.com/share/paint/" + (this.type + this.index + ".jpg");
                console.log("\u4fdd\u5b58\u7684\u5730\u5740path:", e)
            },
            home: function() {
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    over: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6f5d9HSYcNGoLWntwb93lKf", "over"),
        cc.Class({
            extends: cc.Component,
            properties: {
                allBtn: cc.Node,
                fx: cc.Node,
                bc: cc.Node,
                xyz: cc.Node,
                info: cc.Node,
                endPre: cc.Prefab
            },
            onShare: function() {
                "en" == D.lange ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shares", "(Ljava/lang/String;Ljava/lang/String;)V", "Easy coloring, rapid decompression, a large number of classic pictures, and more beautiful pictures of Chinese style, so you can start a spiritual yoga journey together!", "https://play.google.com/store/apps/details?id=com.gzyike.painting") : jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shares", "(Ljava/lang/String;Ljava/lang/String;)V", "\u8f7b\u677e\u6d82\u8272\uff0c\u5feb\u901f\u51cf\u538b\uff0c\u6d77\u91cf\u7ecf\u5178\u540d\u8457\u56fe\u7247\uff0c\u66f4\u6709\u4e2d\u56fd\u98ce\u97f5\u5473\u7cbe\u7f8e\u56fe\u7247\u7b49\u4f60\u6d82\u8272\uff0c\u5feb\u6765\u4e00\u8d77\u5f00\u59cb\u4e00\u6bb5\u5fc3\u7075\u745c\u4f3d\u4e4b\u65c5\u5427\uff01", "https://play.google.com/store/apps/details?id=com.gzyike.painting")
            },
            loadResSprite: function(e, t) {
                cc.loader.loadRes(t, cc.SpriteFrame, function(t, n) {
                    t ? console.log("err over ", t) : e.getComponent(cc.Sprite).spriteFrame = n
                })
            },
            onLoad: function() {
                this.allBg = cc.find("Canvas/allBg"),
                this.endP = cc.find("Canvas/allBg/endNode/view/content"),
                this.manbtn = cc.find("Canvas/allBg/bottom").getComponent("mainBtn"),
                this.hbg = cc.find("Canvas/allBg/ingNode/SV-BG/view/hBgParent"),
                "en" == D.lange && (this.loadResSprite(this.fx, "nfx2"),
                this.loadResSprite(this.bc, "nbc2"),
                this.loadResSprite(this.xyz, "nxyz2"),
                this.loadResSprite(this.info, "nwcinfo2"))
            },
            onEnable: function() {
                if (this.allBtn.active = !1,
                D.endDate || (D.endDate = [[], [], [], [], []]),
                D.ingDate)
                    for (var e in D.ingDate)
                        if (D.ingDate[e].type == D.gps.getComponent("Gps").type)
                            for (var t in D.ingDate[e].obj) {
                                D.ingDate[e].obj[t].index == D.gps.getComponent("Gps").index && D.ingDate[e].obj.splice(t, 1);
                                break
                            }
                var n = D.common.old.getComponent("select").type
                  , o = D.common.old.getComponent("select").index;
                this.chooseType(n, o)
            },
            btnShow: function() {
                this.allBtn.active = !0
            },
            save: function() {
                console.log("over save");
                var e = D.common.old.getComponent("select").type
                  , t = D.common.old.getComponent("select").index
                  , n = e + t + ".jpg";
                console.log("path:", e + t);
                var o = "http://psww216i1.bkt.clouddn.com/share/paint/" + n;
                console.log("\u4fdd\u5b58\u7684\u5730\u5740path:", o)
            },
            chooseType: function(e, t) {
                var n = !0;
                switch (e) {
                case "zgf":
                    for (var o in D.endDate[0])
                        t == D.endDate[0][o] && (n = !1);
                    n && D.endDate[0].push(t);
                    break;
                case "dw":
                    for (var i in D.endDate[1])
                        t == D.endDate[1][i] && (n = !1);
                    n && D.endDate[1].push(t);
                    break;
                case "zw":
                    for (var c in D.endDate[2])
                        t == D.endDate[2][c] && (n = !1);
                    n && D.endDate[2].push(t);
                    break;
                case "rwys":
                    for (var s in D.endDate[3])
                        t == D.endDate[3][s] && (n = !1);
                    n && D.endDate[3].push(t);
                    break;
                case "mtl":
                    for (var a in D.endDate[4])
                        t == D.endDate[4][a] && (n = !1);
                    n && D.endDate[4].push(t)
                }
            },
            getIndex: function(e) {
                var t = void 0;
                switch (e) {
                case "zgf":
                    t = 0;
                    break;
                case "dw":
                    t = 1;
                    break;
                case "zw":
                    t = 2;
                    break;
                case "rwys":
                    t = 3;
                    break;
                case "mtl":
                    t = 4
                }
                return t
            },
            home: function() {
                var e = D.common.old.getComponent("select").index
                  , t = D.common.old.getComponent("select").type
                  , n = this.getIndex(t)
                  , o = cc.instantiate(this.endPre);
                o.getComponent("select2").resetInfo(t, e);
                var i = D.common.startBg.children;
                if (o.parent = i[n + 1].children[0],
                D.allpic) {
                    var c = D.allpic[n];
                    for (var s in c)
                        c[s] == e && c.splice(s, 1)
                }
                D.common.game.active = !1,
                this.node.active = !1,
                this.allBg.active = !0,
                cc.find("Canvas/startCamera").active = !0,
                this.allBtn.active = !1,
                D.common.old.destroy();
                var a = cc.instantiate(this.endPre);
                a.getComponent("select2").resetInfo(t, e, !0),
                a.parent = this.endP,
                console.log("D.common.startBg.children[n + 1].name", D.common.startBg.children[n + 1].name),
                D.common.startBg.children[n + 1].getComponent("testPoxX").creatorChild(t, 3);
                for (var r = 1; r < this.hbg.children.length; r++)
                    this.hbg.children[r].getComponent("testPoxX").reset()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    pageView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d5ed0Qci6ZCNqLQh3PV0Rls", "pageView"),
        cc.Class({
            extends: cc.Component,
            properties: {
                p1: cc.Node,
                p2: cc.Node,
                p3: cc.Node
            },
            pageEvent: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    "polyglot.min": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        (function(e, i) {
            "function" == typeof define && define.amd ? define([], function() {
                return i(e)
            }) : "object" == (void 0 === n ? "undefined" : o(n)) ? t.exports = i(e) : e.Polyglot = i(e)
        }
        )(void 0, function(e) {
            function t(e) {
                e = e || {},
                this.phrases = {},
                this.extend(e.phrases || {}),
                this.currentLocale = e.locale || "en",
                this.allowMissing = !!e.allowMissing,
                this.warn = e.warn || c
            }
            function n(e, t, n) {
                var o, c;
                return null != n && e ? o = function(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                }((c = e.split(s))[i(t, n)] || c[0]) : o = e,
                o
            }
            function i(e, t) {
                return a[function(e) {
                    var t = function(e) {
                        var t, n, o, i = {};
                        for (t in e)
                            if (e.hasOwnProperty(t))
                                for (o in n = e[t])
                                    i[n[o]] = t;
                        return i
                    }(r);
                    return t[e] || t.en
                }(e)](t)
            }
            function c(t) {
                e.console && e.console.warn && e.console.warn("WARNING: " + t)
            }
            t.VERSION = "0.4.3",
            t.prototype.locale = function(e) {
                return e && (this.currentLocale = e),
                this.currentLocale
            }
            ,
            t.prototype.extend = function(e, t) {
                var n;
                for (var i in e)
                    e.hasOwnProperty(i) && (n = e[i],
                    t && (i = t + "." + i),
                    "object" == (void 0 === n ? "undefined" : o(n)) ? this.extend(n, i) : this.phrases[i] = n)
            }
            ,
            t.prototype.clear = function() {
                this.phrases = {}
            }
            ,
            t.prototype.replace = function(e) {
                this.clear(),
                this.extend(e)
            }
            ,
            t.prototype.t = function(e, t) {
                var o, i;
                return "number" == typeof (t = null == t ? {} : t) && (t = {
                    smart_count: t
                }),
                "string" == typeof this.phrases[e] ? o = this.phrases[e] : "string" == typeof t._ ? o = t._ : this.allowMissing ? o = e : (this.warn('Missing translation for key: "' + e + '"'),
                i = e),
                "string" == typeof o && (t = function(e) {
                    var t = {};
                    for (var n in e)
                        t[n] = e[n];
                    return t
                }(t),
                i = function(e, t) {
                    for (var n in t)
                        "_" !== n && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}","g"), t[n]));
                    return e
                }(i = n(o, this.currentLocale, t.smart_count), t)),
                i
            }
            ,
            t.prototype.has = function(e) {
                return e in this.phrases
            }
            ;
            var s = "||||"
              , a = {
                chinese: function(e) {
                    return 0
                },
                german: function(e) {
                    return 1 !== e ? 1 : 0
                },
                french: function(e) {
                    return e > 1 ? 1 : 0
                },
                russian: function(e) {
                    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                czech: function(e) {
                    return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
                },
                polish: function(e) {
                    return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                icelandic: function(e) {
                    return e % 10 != 1 || e % 100 == 11 ? 1 : 0
                }
            }
              , r = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
            return t
        }),
        cc._RF.pop()
    }
    , {}],
    rect: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "569favTOjVIlpHN6IFQ9vwO", "rect"),
        cc._RF.pop()
    }
    , {}],
    resumeBuy: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dd784MfqSdC8L6KP6kYUiIq", "resumeBuy"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            back: function() {
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    rool: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d32a0JXkNRMPL6qlQtT8b4v", "rool"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.node.on("touchmove", this.ontouchmove1, this),
                this.node.on("touchend", this.ontouchend1, this),
                this.node.on("touchcancel", this.ontouchcancel1, this),
                this.node.on("touchstart", this.ontouchstarts, this),
                this.all = cc.find("Canvas/allBg")
            },
            ontouchstarts: function(e) {
                this.svPos = e.getLocation(),
                console.log("ontouchstarts")
            },
            ontouchmove1: function(e) {
                if (this.svPos || (this.svPos = e.getLocation()),
                2 != this.drawend) {
                    var t = e.getLocation();
                    Math.abs(this.svPos.x - t.x) > Math.abs(this.svPos.y - t.y) || (D.SC.rool(t.y - this.svPos.y),
                    this.svPos = t)
                }
            },
            ontouchend1: function(e) {
                this.svPos = e.getLocation(),
                console.log("ontouchend1")
            },
            ontouchcancel1: function(e) {
                this.svPos = e.getLocation(),
                console.log("ontouchcancel1")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    runtime: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9f936qOhklGA7qfP8rz7y63", "runtime");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = function(e) {
            var t, n = Object.prototype, i = n.hasOwnProperty, c = "function" == typeof Symbol ? Symbol : {}, s = c.iterator || "@@iterator", a = c.asyncIterator || "@@asyncIterator", r = c.toStringTag || "@@toStringTag";
            function l(e, t, n, o) {
                var i = t && t.prototype instanceof m ? t : m
                  , c = Object.create(i.prototype)
                  , s = new R(o || []);
                return c._invoke = function(e, t, n) {
                    var o = p;
                    return function(i, c) {
                        if (o === g)
                            throw new Error("Generator is already running");
                        if (o === f) {
                            if ("throw" === i)
                                throw c;
                            return T()
                        }
                        for (n.method = i,
                        n.arg = c; ; ) {
                            var s = n.delegate;
                            if (s) {
                                var a = F(s, n);
                                if (a) {
                                    if (a === u)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === p)
                                    throw o = f,
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            o = g;
                            var r = h(e, t, n);
                            if ("normal" === r.type) {
                                if (o = n.done ? f : d,
                                r.arg === u)
                                    continue;
                                return {
                                    value: r.arg,
                                    done: n.done
                                }
                            }
                            "throw" === r.type && (o = f,
                            n.method = "throw",
                            n.arg = r.arg)
                        }
                    }
                }(e, n, s),
                c
            }
            function h(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = l;
            var p = "suspendedStart"
              , d = "suspendedYield"
              , g = "executing"
              , f = "completed"
              , u = {};
            function m() {}
            function v() {}
            function x() {}
            var C = {};
            C[s] = function() {
                return this
            }
            ;
            var y = Object.getPrototypeOf
              , b = y && y(y(L([])));
            b && b !== n && i.call(b, s) && (C = b);
            var D = x.prototype = m.prototype = Object.create(C);
            function w(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }
            function S(e) {
                var t;
                this._invoke = function(n, c) {
                    function s() {
                        return new Promise(function(t, s) {
                            (function t(n, c, s, a) {
                                var r = h(e[n], e, c);
                                if ("throw" !== r.type) {
                                    var l = r.arg
                                      , p = l.value;
                                    return p && "object" === (void 0 === p ? "undefined" : o(p)) && i.call(p, "__await") ? Promise.resolve(p.__await).then(function(e) {
                                        t("next", e, s, a)
                                    }, function(e) {
                                        t("throw", e, s, a)
                                    }) : Promise.resolve(p).then(function(e) {
                                        l.value = e,
                                        s(l)
                                    }, function(e) {
                                        return t("throw", e, s, a)
                                    })
                                }
                                a(r.arg)
                            }
                            )(n, c, t, s)
                        }
                        )
                    }
                    return t = t ? t.then(s, s) : s()
                }
            }
            function F(e, n) {
                var o = e.iterator[n.method];
                if (o === t) {
                    if (n.delegate = null,
                    "throw" === n.method) {
                        if (e.iterator.return && (n.method = "return",
                        n.arg = t,
                        F(e, n),
                        "throw" === n.method))
                            return u;
                        n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var i = h(o, e.iterator, n.arg);
                if ("throw" === i.type)
                    return n.method = "throw",
                    n.arg = i.arg,
                    n.delegate = null,
                    u;
                var c = i.arg;
                return c ? c.done ? (n[e.resultName] = c.value,
                n.next = e.nextLoc,
                "return" !== n.method && (n.method = "next",
                n.arg = t),
                n.delegate = null,
                u) : c : (n.method = "throw",
                n.arg = new TypeError("iterator result is not an object"),
                n.delegate = null,
                u)
            }
            function k(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function I(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function R(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(k, this),
                this.reset(!0)
            }
            function L(e) {
                if (e) {
                    var n = e[s];
                    if (n)
                        return n.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , c = function n() {
                            for (; ++o < e.length; )
                                if (i.call(e, o))
                                    return n.value = e[o],
                                    n.done = !1,
                                    n;
                            return n.value = t,
                            n.done = !0,
                            n
                        };
                        return c.next = c
                    }
                }
                return {
                    next: T
                }
            }
            function T() {
                return {
                    value: t,
                    done: !0
                }
            }
            return v.prototype = D.constructor = x,
            x.constructor = v,
            x[r] = v.displayName = "GeneratorFunction",
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x,
                r in e || (e[r] = "GeneratorFunction")),
                e.prototype = Object.create(D),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            w(S.prototype),
            S.prototype[a] = function() {
                return this
            }
            ,
            e.AsyncIterator = S,
            e.async = function(t, n, o, i) {
                var c = new S(l(t, n, o, i));
                return e.isGeneratorFunction(n) ? c : c.next().then(function(e) {
                    return e.done ? e.value : c.next()
                })
            }
            ,
            w(D),
            D[r] = "Generator",
            D[s] = function() {
                return this
            }
            ,
            D.toString = function() {
                return "[object Generator]"
            }
            ,
            e.keys = function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var o = t.pop();
                        if (o in e)
                            return n.value = o,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            e.values = L,
            R.prototype = {
                constructor: R,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(I),
                    !e)
                        for (var n in this)
                            "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var n = this;
                    function o(o, i) {
                        return a.type = "throw",
                        a.arg = e,
                        n.next = o,
                        i && (n.method = "next",
                        n.arg = t),
                        !!i
                    }
                    for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                        var s = this.tryEntries[c]
                          , a = s.completion;
                        if ("root" === s.tryLoc)
                            return o("end");
                        if (s.tryLoc <= this.prev) {
                            var r = i.call(s, "catchLoc")
                              , l = i.call(s, "finallyLoc");
                            if (r && l) {
                                if (this.prev < s.catchLoc)
                                    return o(s.catchLoc, !0);
                                if (this.prev < s.finallyLoc)
                                    return o(s.finallyLoc)
                            } else if (r) {
                                if (this.prev < s.catchLoc)
                                    return o(s.catchLoc, !0)
                            } else {
                                if (!l)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < s.finallyLoc)
                                    return o(s.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var c = o;
                            break
                        }
                    }
                    c && ("break" === e || "continue" === e) && c.tryLoc <= t && t <= c.finallyLoc && (c = null);
                    var s = c ? c.completion : {};
                    return s.type = e,
                    s.arg = t,
                    c ? (this.method = "next",
                    this.next = c.finallyLoc,
                    u) : this.complete(s)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    u
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            I(n),
                            u
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var o = n.completion;
                            if ("throw" === o.type) {
                                var i = o.arg;
                                I(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, n, o) {
                    return this.delegate = {
                        iterator: L(e),
                        resultName: n,
                        nextLoc: o
                    },
                    "next" === this.method && (this.arg = t),
                    u
                }
            },
            e
        }("object" === (void 0 === t ? "undefined" : o(t)) ? t.exports : {});
        try {
            regeneratorRuntime = i
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(i)
        }
        window.D.runtime = i,
        cc._RF.pop()
    }
    , {}],
    saveAndroid: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "705bbfUyy1L7ZawpxWbrnpF", "saveAndroid"),
        cc.Class({
            extends: e("./textureRenderUtils"),
            properties: {
                _width: 0,
                _height: 0,
                text: cc.Sprite,
                label3: cc.Label,
                label2: cc.Label
            },
            onPic: function() {
                var e = this;
                console.log("onPic"),
                this.init(),
                this.scheduleOnce(function() {
                    var t = e.initImage();
                    return e.showSprite(t),
                    e.saveFile(t)
                }, .1)
            },
            initImage: function() {
                var e = this.texture.readPixels();
                return this._width = this.texture.width,
                this._height = this.texture.height,
                this.filpYImage(e, this._width, this._height)
            },
            showSprite: function(e) {
                console.log("SHOW SPRITE");
                var t = new cc.Texture2D;
                t.initWithData(e, 32, this._width, this._height);
                var n = new cc.SpriteFrame;
                n.setTexture(t),
                (new cc.Node).addComponent(cc.Sprite).spriteFrame = n
            },
            saveFile: function(e) {
                console.log("saveFile", e)
            },
            filpYImage: function(e, t, n) {
                for (var o = new Uint8Array(t * n * 4), i = 4 * t, c = 0; c < n; c++)
                    for (var s = (n - 1 - c) * t * 4, a = c * t * 4, r = 0; r < i; r++)
                        o[a + r] = e[s + r];
                return o
            }
        }),
        cc._RF.pop()
    }
    , {
        "./textureRenderUtils": "textureRenderUtils"
    }],
    select2: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "82532TTyhxLqqRIEFYbxq+G", "select2"),
        cc.Class({
            extends: cc.Component,
            properties: {
                type: "",
                index: "",
                icon: cc.Sprite
            },
            loadIcon: function() {
                var e = this;
                cc.loader.loadRes(this.type + "/p" + this.type + "e" + this.index, cc.SpriteFrame, function(t, n) {
                    t ? console.log("err select2  777", t) : e.icon.spriteFrame = n
                })
            },
            start: function() {
                this.loadIcon()
            },
            change: function() {
                this.control || (this.control = cc.find("Canvas/control").getComponent("control")),
                1 == this.endShow ? (console.log("\u753b\u4f5c\u4e2d\u88ab\u70b9\u51fb"),
                this.control.drawShow(this.type, this.index)) : (console.log("\u662f\u8fd9\u91cc\u5417\uff1f\uff1f\uff1f"),
                this.control.showOver(this.type, this.index))
            },
            resetInfo: function(e, t, n) {
                this.type = e,
                this.index = t,
                n && (this.endShow = !0)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    select: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9f1ebGNtulOIIw3PxXGhDFn", "select"),
        cc.Class({
            extends: cc.Component,
            properties: {
                g: cc.Node,
                longTp: !1,
                drawend: 0,
                gps: e("Gps"),
                type: "",
                index: "",
                loadPre: cc.Prefab,
                lines: [],
                lock: "",
                lockIcon: cc.Node,
                iconNode: cc.Node,
                icon: cc.Sprite,
                chu: !0
            },
            loadJson: function() {
                cc.loader.loadRes("configs/npc", function(e, t) {
                    loadNpc(t.json)
                })
            },
            drawLine: function(e) {
                e ? this.gps.drawLine(e) : this.gps.drawLine()
            },
            start: function() {
                this.checkIcon()
            },
            updateIndex: function(e) {
                for (var t = !0, n = 0; n < e.length; n++)
                    if (e[n].c && e[n].d.length > 0 && e[n].c && e[n].d.length > 0) {
                        var o = cc.instantiate(this.control.Index.prefab);
                        o.parent = D.common.iParent;
                        var i = o.getComponent("index");
                        i.changeColor(n + 1, e[n].c),
                        t && (i.ontouchstart(),
                        t = !1),
                        n == e.length - 1 && (t = !0)
                    }
            },
            loading: function() {
                this.loadBox ? this.loadBox.active = !0 : (this.loadBox = cc.instantiate(this.loadPre),
                this.loadBox.parent = cc.find("Canvas"))
            },
            loadClose: function() {
                var e = this;
                setTimeout(function() {
                    e.loadBox.active = !1
                }, 200)
            },
            getItem: function(e) {
                return !!cc.sys.localStorage.getItem(e) && cc.sys.localStorage.getItem(e)
            },
            loadIcon: function() {
                var e = this;
                cc.loader.loadRes(this.type + "/p" + this.type + this.index, cc.SpriteFrame, function(t, n) {
                    t ? console.log("err select loadIcon", t) : e.icon.spriteFrame = n
                })
            },
            checkIcon: function() {
                this.Label1 = cc.find("Canvas/Label1").getComponent(cc.Label);
                var e = this;
                this.end && cc.loader.loadRes(this.type + "/p" + this.type + "e" + this.index, cc.SpriteFrame, function(t, n) {
                    t ? console.log("err select777", t) : (e.icon.spriteFrame = n,
                    e.iconNode.active = !0)
                }),
                this.chu && !this.end ? this.loadIcon() : this.open(!0)
            },
            seeVideo: function() {
                0
            },
            onPic: function(e, t) {
                this.cap || (this.cap = cc.find("Canvas").getComponent("saveAndroid")),
                this.cap.onPic(e, t)
            },
            open: function(e) {
                0 == e && console.log("selest open false"),
                this.iconNode.active = !e,
                this.g.active = e
            },
            change: function() {
                "endParent" == this.node.parent.name && (console.log("\u7236\u8282\u70b9\u662f endParent"),
                this.father = "endParent"),
                "content" == this.node.parent.name && (console.log("\u7236\u8282\u70b9\u662f content"),
                this.father = "content"),
                this.control || (this.control = cc.find("Canvas/control").getComponent("control")),
                this.lock ? (D.type = this.type,
                D.index = this.index,
                D.addNum = !1,
                this.control.callJava()) : this.comeToGame()
            },
            changeEndIcon: function() {
                this.end = !0,
                this.drawend = 4
            },
            comeToGame: function() {
                if (0 == this.drawend) {
                    this.open(!0),
                    cc.find("Canvas/list") && (cc.find("Canvas/list").active = !1),
                    this.control.gameShow(),
                    cc.find("Canvas/uiCamera").active = !0,
                    D.common.pCamera.active = !0,
                    this.loading();
                    var e = this;
                    e.lines.length > 0 ? D.common.lines = e.lines : cc.loader.loadRes(e.gps.type + "/l" + e.gps.type + e.gps.index, function(e, t) {
                        e && console.log("change l err", e),
                        D.common.lines = t.json
                    }),
                    D.gps = e.g;
                    var t = e.gps;
                    t.drawNumber(),
                    0 == t.long && (e.longTp = !0);
                    var n = t.date;
                    if (n) {
                        if (e.gps.date3)
                            D.common.date = e.gps.date3;
                        else {
                            D.common.date = [];
                            for (var o = 0; o < n.length; o++)
                                if (n[o].t)
                                    e.longTp && (t.long += n[o].d.length),
                                    D.common.date.push(n[o]);
                                else if (o > 1) {
                                    e.longTp = !1;
                                    break
                                }
                        }
                        D.common.long = t.long,
                        e.updateIndex(D.common.date),
                        D.common.old = e.node,
                        e.bar || (e.bar = cc.find("Canvas/game/topBtn/barBg").getComponent(cc.ProgressBar),
                        e.bartext = cc.find("Canvas/game/topBtn/num").getComponent(cc.Label));
                        var i = e.gps.nIndex / t.long;
                        e.bar.progress = i || 0,
                        e.bartext.string = parseInt(i ? 100 * i : 0) + "%",
                        D.common.all.active = !1,
                        D.common.game.active = !0,
                        e.g.parent = D.common.game.getChildByName("ontouch"),
                        e.g.x = 0,
                        e.g.scale = 1,
                        e.g.y = 80,
                        e.loadBox && e.loadClose()
                    } else
                        console.log("\u8fd8\u6ca1\u6709\u83b7\u53d6\u5230\u52a0\u8f7d\u7684\u6570\u636e"),
                        e.callback = function() {
                            if (e.gps.date) {
                                var n = e.gps.date;
                                if (console.log(" \u83b7\u53d6\u5230\u52a0\u8f7d\u7684\u6570\u636e"),
                                e.unschedule(e.callback),
                                e.gps.date3)
                                    D.common.date = e.gps.date3;
                                else {
                                    D.common.date = [];
                                    for (var o = 0; o < n.length; o++)
                                        if (n[o].t)
                                            e.longTp && (t.long += n[o].d.length),
                                            D.common.date.push(n[o]);
                                        else if (o > 1) {
                                            e.longTp = !1;
                                            break
                                        }
                                }
                                D.common.long = t.long,
                                e.updateIndex(D.common.date),
                                D.common.old = e.node,
                                e.bar || (e.bar = cc.find("Canvas/game/topBtn/barBg").getComponent(cc.ProgressBar),
                                e.bartext = cc.find("Canvas/game/topBtn/num").getComponent(cc.Label));
                                var i = e.gps.nIndex / t.long;
                                console.log("num", i || 0),
                                e.bar.progress = i || 0,
                                e.bartext.string = parseInt(i ? 100 * i : 0) + "%",
                                D.common.all.active = !1,
                                D.common.game.active = !0,
                                e.g.parent = D.common.game.getChildByName("ontouch"),
                                e.g.x = 0,
                                e.g.scale = 1,
                                e.g.y = 80,
                                e.loadBox && e.loadClose()
                            }
                            console.log("\u7b49\u5f850.1\u79d21")
                        }
                        ,
                        e.schedule(e.callback, .1)
                } else
                    2 == this.drawend ? (D.common.pCamera.active = !1,
                    D.common.all.active = !0,
                    D.common.game && (D.common.game.active = !1),
                    this.gps.record.length > 0 ? D.control.drawShow(this.gps.record, this.type, this.index, this.gps.date, this.gps.bgline) : (console.log("this.gps.record.length <= 0"),
                    D.control.drawShow(this.gps.date, this.type, this.index, !0, this.gps.bgline))) : 4 == this.drawend && (console.log("\u521b\u4f5c\u4f5c\u5185\u70b9\u51fb"),
                    this.control || (this.control = cc.find("Canvas/control").getComponent("control")),
                    this.control.showOver(this.type, this.index))
            },
            resetInfo: function(e, t) {
                this.type = e,
                this.index = t,
                this.gps.type = e,
                this.gps.index = t;
                var n = D.lockdate[this.getIndex(e)];
                for (var o in n)
                    t == n[o] && this.addLock()
            },
            getIndex: function(e) {
                var t = void 0;
                switch (e) {
                case "zgf":
                    t = 1;
                    break;
                case "dw":
                    t = 2;
                    break;
                case "zw":
                    t = 3;
                    break;
                case "rwys":
                    t = 4;
                    break;
                case "mtl":
                    t = 5
                }
                return t - 1
            },
            addLock: function() {
                this.lock = !0,
                this.lockIcon.active = !0
            },
            unLock: function() {
                this.lock = !1,
                this.lockIcon.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {
        Gps: "Gps"
    }],
    set: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ac12asl3+lI8K9zauGIWZ1l", "set"),
        cc.Class({
            extends: cc.Component,
            properties: {
                sharePre: cc.Prefab,
                dingyuePre: cc.Prefab,
                resumeBuyPre: cc.Prefab,
                privacyPre: cc.Prefab,
                makingPre: cc.Prefab,
                icon: [cc.SpriteFrame],
                setInfo: cc.Sprite
            },
            loadResSprite: function(e, t) {
                cc.loader.loadRes(t, cc.SpriteFrame, function(t, n) {
                    t ? console.log("err set", t) : e.getComponent(cc.Sprite).spriteFrame = n
                })
            },
            onLoad: function() {
                this.back = cc.find("Canvas/allBg/endNode"),
                "en" == D.lange ? (console.log("set en"),
                this.setInfo.spriteFrame = this.icon[0]) : (console.log("set cn"),
                this.setInfo.spriteFrame = this.icon[1])
            },
            setBack: function() {
                this.node.active = !1,
                this.back.active = !0
            },
            dingyue: function() {
                console.log("\u8ba2\u9605"),
                this.makingBox ? this.makingBox.active = !0 : (this.makingBox = cc.instantiate(this.makingPre),
                this.makingBox.parent = this.node)
            },
            share: function() {
                console.log("\u5206\u4eab"),
                "en" == D.lange ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shares", "(Ljava/lang/String;Ljava/lang/String;)V", "Easy coloring, rapid decompression, a large number of classic pictures, and more beautiful pictures of Chinese style, so you can start a spiritual yoga journey together!", "https://play.google.com/store/apps/details?id=com.gzyike.painting") : jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shares", "(Ljava/lang/String;Ljava/lang/String;)V", "\u8f7b\u677e\u6d82\u8272\uff0c\u5feb\u901f\u51cf\u538b\uff0c\u6d77\u91cf\u7ecf\u5178\u540d\u8457\u56fe\u7247\uff0c\u66f4\u6709\u4e2d\u56fd\u98ce\u97f5\u5473\u7cbe\u7f8e\u56fe\u7247\u7b49\u4f60\u6d82\u8272\uff0c\u5feb\u6765\u4e00\u8d77\u5f00\u59cb\u4e00\u6bb5\u5fc3\u7075\u745c\u4f3d\u4e4b\u65c5\u5427\uff01", "https://play.google.com/store/apps/details?id=com.gzyike.painting")
            },
            buyAgain: function() {
                console.log("\u518d\u6b21\u8d2d\u4e70"),
                this.makingBox ? this.makingBox.active = !0 : (this.makingBox = cc.instantiate(this.makingPre),
                this.makingBox.parent = this.node)
            },
            privacy: function() {
                console.log("\u9690\u79c1\u653f\u7b56"),
                this.privacyBox ? this.privacyBox.active = !0 : (this.privacyBox = cc.instantiate(this.privacyPre),
                this.privacyBox.parent = this.node)
            },
            appraise: function() {
                console.log("\u8bc4\u5206"),
                this.makingBox ? this.makingBox.active = !0 : (this.makingBox = cc.instantiate(this.makingPre),
                this.makingBox.parent = this.node)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    share: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6e5f5Rws4dO0YXDT1O9AqdJ", "share"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            cancel: function() {
                this.node.active = !1
            },
            wxpyq: function() {
                console.log("\u5206\u4eab\u5fae\u4fe1\u670b\u53cb\u5708")
            },
            wx: function() {
                console.log("\u5206\u4eab\u5fae\u4fe1")
            },
            wb: function() {
                console.log("\u5206\u4eab\u5fae\u535a")
            },
            copyLink: function() {
                console.log("\u590d\u5236\u94fe\u63a5")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    showUITip: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c59f0raHitIWY7hMUnFbqXB", "showUITip"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: [cc.SpriteFrame]
            },
            change: function(e) {
                switch (e) {
                case 1:
                    "en" == D.lange ? this.node.getComponent(cc.Sprite).spriteFrame = this.icon[0] : this.node.getComponent(cc.Sprite).spriteFrame = this.icon[1];
                    break;
                case 2:
                    break;
                case 3:
                    "en" == D.lange ? this.node.getComponent(cc.Sprite).spriteFrame = this.icon[2] : this.node.getComponent(cc.Sprite).spriteFrame = this.icon[3];
                    break;
                case 4:
                    "en" == D.lange ? this.node.getComponent(cc.Sprite).spriteFrame = this.icon[4] : this.node.getComponent(cc.Sprite).spriteFrame = this.icon[5]
                }
            },
            start: function() {
                var e = this;
                setTimeout(function() {
                    e.node.active = !1
                }, 1e3)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    subscribe: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "39cc7tEqs5Ge45905kKrXhF", "subscribe"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            resumeBuy: function() {
                console.log("\u6062\u590d\u8d2d\u4e70")
            },
            sevenDay: function() {
                console.log("\u514d\u8d39\u4e03\u5929")
            },
            oneYear: function() {
                console.log("\u8ba2\u9605\u4e00\u5e74")
            },
            goon: function() {
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    teach1: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "24ebbKuf7pNNqVelvKKOGz0", "teach1"),
        cc.Class({
            extends: cc.Component,
            properties: {
                touch: cc.Node
            },
            loadResSprite: function(e, t) {
                cc.loader.loadRes(t, cc.SpriteFrame, function(t, n) {
                    t && console.log("err ", t),
                    e.getComponent(cc.Sprite).spriteFrame = n
                })
            },
            onLoad: function() {
                "en" == D.lange && this.loadResSprite(this.touch, "info1")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    teach2: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "20c46xStORDPrbAZvjgAku3", "teach2"),
        cc.Class({
            extends: cc.Component,
            properties: {
                touch: cc.Node
            },
            getAtlasInfo: function(e, t) {
                cc.loader.loadRes("res", cc.SpriteAtlas, function(n, o) {
                    var i = o.getSpriteFrame(t);
                    e.getComponent(cc.Sprite).spriteFrame = i
                })
            },
            onLoad: function() {
                "en" == D.lange && this.getAtlasInfo(this.touch, "tip1")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    teach3: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1b27cPidNFBI6O2GR9eG9Vy", "teach3"),
        cc.Class({
            extends: cc.Component,
            properties: {
                touch: cc.Node
            },
            getAtlasInfo: function(e, t) {
                cc.loader.loadRes("res", cc.SpriteAtlas, function(n, o) {
                    var i = o.getSpriteFrame(t);
                    e.getComponent(cc.Sprite).spriteFrame = i
                })
            },
            onLoad: function() {
                "en" == D.lange && this.getAtlasInfo(this.touch, "tip21")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    teach4: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6da9eqL/6ZKeabNlQIbYl/l", "teach4"),
        cc.Class({
            extends: cc.Component,
            properties: {
                touch: cc.Node
            },
            onLoad: function() {
                "en" == D.lange && (this.touch.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    teach: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ad5fbefyptJMZMXKZPBjXez", "teach"),
        cc.Class({
            extends: cc.Component,
            properties: {
                target: cc.Prefab
            },
            next: function() {
                (this.node.active = !1,
                this.target) && (cc.instantiate(this.target).parent = cc.find("Canvas"))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    testPosY: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ea233iSnVtEL5nDhNzNPh1v", "testPosY"),
        cc.Class({
            extends: cc.Component,
            properties: {
                sc: cc.ScrollView,
                hBgParent: cc.Node,
                hbg: cc.Prefab,
                all: cc.Node
            },
            testCback: function() {
                this.all.active = !1,
                this.all.active = !0
            },
            rool2: function() {
                var e = this.sc.getScrollOffset();
                this.sc.scrollToOffset(cc.v2(0, e.y + 0), 0),
                this.test()
            },
            rool: function(e) {
                var t = this.sc.getMaxScrollOffset()
                  , n = this.sc.getScrollOffset();
                this.now = n.y,
                this.roolTest = !0,
                this.roolNum = 0,
                n.y + e > t ? e = t : n.y + e < 0 && (e = 0),
                this.sc.scrollToOffset(cc.v2(0, n.y + e), 0),
                this.test()
            },
            roolOver: function() {},
            init: function() {
                this.callback = function() {
                    if (this.sc.content.children.length > 0) {
                        var e = this.sc.content;
                        this.oneHeight = e.children[0].height + e.getComponent(cc.Layout).spacingY,
                        this.allHeight = this.sc.content.height,
                        this.node.getChildByName("view") ? this.boxY = this.node.getChildByName("view").height : this.boxY = this.node.getChildByName("content").height,
                        this.allChild = e.children,
                        this.unschedule(this.callback)
                    }
                }
                ,
                this.schedule(this.callback, 1)
            },
            start: function() {
                this.init(),
                D.SC = this
            },
            rooLBottom: function() {
                var e = this.sc.getMaxScrollOffset()
                  , t = this.sc.getScrollOffset();
                t.y >= e.y && (this.sc.scrollToBottom(),
                console.log("\u6eda\u52a8\u5230\u5e95\u90e8")),
                t.y <= 0 && (this.sc.scrollToTop(),
                console.log("\u6eda\u52a8\u5230\u9876\u90e8"))
            },
            onEnable: function() {
                this.enable ? this.test() : this.enable = !0
            },
            duibi: function(e, t) {
                if (this.allChild)
                    for (var n = 0; n < this.allChild.length; n++) {
                        var o = new cc.v2;
                        o.x = n * this.oneHeight,
                        o.y = n * this.oneHeight + this.oneHeight,
                        o.x <= t && o.y > e ? this.allChild[n].opacity = 255 : this.allChild[n].opacity = 0
                    }
            },
            onLoad: function() {
                this.one = 3
            },
            chooseType: function(e) {
                var t = void 0;
                switch (e) {
                case 0:
                    t = "zgf";
                    break;
                case 1:
                    t = "dw";
                    break;
                case 2:
                    t = "zw";
                    break;
                case 3:
                    t = "rwys";
                    break;
                case 4:
                    t = "mtl"
                }
                return t
            },
            creatorHbg: function(e) {
                var t = this
                  , n = cc.instantiate(this.hbg);
                switch (n.parent = this.all,
                console.log("nnn", e),
                e) {
                case 4:
                    D.allpic ? (n.getComponent("hbg").creator(D.allpic[3][0], "rwys"),
                    n.getComponent("hbg").creator(D.allpic[3][1], "rwys"),
                    n.getComponent("hbg").creator(D.allpic[3][2], "rwys")) : (n.getComponent("hbg").creator(1, "rwys"),
                    n.getComponent("hbg").creator(2, "rwys"),
                    n.getComponent("hbg").creator(3, "rwys")),
                    n.getComponent("more").index = 3,
                    n.getComponent("hbg").change(this.chooseType(3));
                    break;
                case 5:
                    D.allpic ? (n.getComponent("hbg").creator(D.allpic[4][0], "mtl"),
                    n.getComponent("hbg").creator(D.allpic[4][1], "mtl"),
                    n.getComponent("hbg").creator(D.allpic[4][2], "mtl")) : (n.getComponent("hbg").creator(1, "mtl"),
                    n.getComponent("hbg").creator(2, "mtl"),
                    n.getComponent("hbg").creator(3, "mtl")),
                    n.getComponent("more").index = 4,
                    n.getComponent("hbg").change(this.chooseType(4))
                }
                setTimeout(function() {
                    t.creator = !1
                }, 500)
            },
            test: function() {
                var e = new cc.v2
                  , t = this.sc.getMaxScrollOffset();
                this.sc.getScrollOffset().y / t.y > .9 && this.one <= 4 && (this.creator || (this.one++,
                this.creator = !0,
                this.creatorHbg(this.one))),
                e.x = this.sc.getScrollOffset().y,
                e.y = this.sc.getScrollOffset().y + this.boxY,
                this.duibi(e.x, e.y),
                console.log("testYYY")
            },
            update: function(e) {}
        }),
        cc._RF.pop()
    }
    , {}],
    testPoxX: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1d809H+wNpFRZ51ycbcnB+a", "testPoxX"),
        cc.Class({
            extends: cc.Component,
            properties: {
                sc: cc.ScrollView,
                item: cc.Prefab,
                content: cc.Node
            },
            init: function() {
                this.callback = function() {
                    if (this.sc.content.children.length > 0) {
                        var e = this.sc.content;
                        this.oneHeight = e.children[0].width + e.getComponent(cc.Layout).spacingX,
                        this.allHeight = this.sc.content.width,
                        this.boxY = this.node.width,
                        this.allChild = e.children,
                        this.unschedule(this.callback)
                    }
                }
                ,
                this.schedule(this.callback, 1)
            },
            start: function() {
                this.init(),
                this.one = 2
            },
            duibi: function(e, t) {
                if (this.allChild)
                    for (var n = 0; n < this.allChild.length; n++) {
                        var o = new cc.v2;
                        o.x = n * -this.oneHeight,
                        o.y = n * -this.oneHeight,
                        o.x < t && o.y >= e ? this.allChild[n].opacity = 255 : this.allChild[n].opacity = 0
                    }
            },
            reset: function() {
                console.log("\u66f4\u65b0\u4f4d\u7f6e"),
                this.sc.scrollToLeft(),
                this.test()
            },
            creatorChild: function(e, t) {
                var n = this;
                if (!this.lock) {
                    if (parseInt(t) < D.allpic[this.getIndex(e)].length) {
                        var o = D.allpic[this.getIndex(e)][parseInt(t)]
                          , i = D.common.startBg.children[this.getIndex(e) + 1].children[0].children
                          , c = !0;
                        for (var s in i)
                            if (i[s].getComponent("select")) {
                                if (i[s].getComponent("select").index == o || i[s].getComponent("select").index == o.index) {
                                    c = !1;
                                    break
                                }
                            } else if (i[s].getComponent("select2") && (i[s].getComponent("select2").index == o || i[s].getComponent("select2").index == o.index)) {
                                c = !1;
                                break
                            }
                        if (c) {
                            if (o) {
                                console.log("\u521b\u5efa\u4e00\u4e2a\u5c0f\u6807");
                                var a = cc.instantiate(this.item);
                                a.parent = this.content,
                                o.index ? (a.getComponent("select").resetInfo(e, o.index),
                                a.getComponent("select").gps.date3 = o.date2,
                                a.getComponent("select").gps.nIndex = o.nIndex,
                                a.getComponent("select").gps.long = o.long,
                                a.getComponent("select").gps.bgline = o.bgline,
                                a.getComponent("select").gps.againDraw(o.bgline, o.date, o.date2),
                                a.getComponent("select").lines = o.lines) : a.getComponent("select").resetInfo(e, D.allpic[this.getIndex(e)][parseInt(t)])
                            }
                        } else
                            console.log("\u6709\u91cd\u590d\u7684")
                    } else
                        console.log("\u8d85\u51fa\u4e0b\u6807");
                    setTimeout(function() {
                        n.creator = !1
                    }, 200)
                }
            },
            test: function() {
                var e = this.sc.getMaxScrollOffset();
                if (this.sc.getScrollOffset().x / e.x < -.7) {
                    var t = this.node.getComponent("hbg").type;
                    this.one < D.allpic[this.getIndex(t)].length && (this.creator || this.lock || (console.log("\u5f00\u59cb \u521b\u5efa ---"),
                    this.one++,
                    this.creator = !0,
                    this.creatorChild(t, this.one),
                    this.one == D.allpic[this.getIndex(t)].length - 1 && (this.lock = !0,
                    console.log("\u5f00\u59cb \u4e0a\u9501"))))
                }
                var n = new cc.v2;
                n.x = this.sc.getScrollOffset().x + this.oneHeight,
                n.y = this.sc.getScrollOffset().x - this.boxY,
                this.duibi(n.y, n.x)
            },
            getIndex: function(e) {
                var t = void 0;
                switch (e) {
                case "zgf":
                    t = 0;
                    break;
                case "dw":
                    t = 1;
                    break;
                case "zw":
                    t = 2;
                    break;
                case "rwys":
                    t = 3;
                    break;
                case "mtl":
                    t = 4
                }
                return t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    test: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1bec1b5OLBHooHiYjl9Y4ZF", "test"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    textureRenderUtils: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a2763ZulL1K1qOIvCAoJ3Vs", "textureRenderUtils"),
        cc.Class({
            extends: cc.Component,
            properties: {
                camera: cc.Camera,
                label: cc.Label,
                _canvas: null,
                tex: cc.Sprite
            },
            init: function() {
                this.label.string = "";
                var e = new cc.RenderTexture
                  , t = cc.game._renderContext;
                e.initWithSize(750, 750, t.STENCIL_INDEX8),
                this.camera.targetTexture = e,
                this.texture = e
            },
            initImage: function() {
                var e = this._canvas.toDataURL("image/png")
                  , t = document.createElement("img");
                return t.src = e,
                t
            },
            createSprite: function() {
                var e = this.texture.width
                  , t = this.texture.height;
                this._canvas ? this.clearCanvas() : (this._canvas = document.createElement("canvas"),
                this._canvas.width = e,
                this._canvas.height = t);
                var n = this._canvas.getContext("2d");
                this.camera.render();
                for (var o = this.texture.readPixels(), i = 4 * e, c = 0; c < t; c++) {
                    for (var s = t - 1 - c, a = n.createImageData(e, 1), r = s * e * 4, l = 0; l < i; l++)
                        a.data[l] = o[r + l];
                    n.putImageData(a, 0, c)
                }
                return this._canvas
            },
            showSprite: function(e) {
                var t = this
                  , n = new cc.Texture2D;
                n.initWithElement(e);
                var o = new cc.SpriteFrame;
                o.setTexture(n);
                var i = new cc.Node;
                i.addComponent(cc.Sprite).spriteFrame = o,
                i.zIndex = cc.macro.MAX_ZINDEX,
                i.parent = cc.director.getScene();
                var c = cc.winSize.width
                  , s = cc.winSize.height;
                i.x = c / 2,
                i.y = s / 2,
                i.on(cc.Node.EventType.TOUCH_START, function() {
                    i.parent = null,
                    t.label.string = "",
                    i.destroy()
                }),
                this.captureAction(i, c, s)
            },
            captureAction: function(e, t, n) {
                var o = cc.scaleTo(1, .3)
                  , i = cc.v2(t - t / 6, n / 4)
                  , c = cc.moveTo(1, i)
                  , s = cc.spawn(o, c);
                e.runAction(s);
                var a = cc.blink(.1, 1);
                this.node.runAction(a)
            },
            clearCanvas: function() {
                this._canvas.getContext("2d").clearRect(0, 0, this._canvas.width, this._canvas.height)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    yisi: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1db9bfrNldAFYhM9ZKIWJMD", "yisi"),
        cc.Class({
            extends: cc.Component,
            properties: {
                item2: cc.Node,
                item3: cc.Node,
                item4: cc.Node,
                item5: cc.Node,
                item6: cc.Node,
                item7: cc.Node
            },
            getAtlasInfo: function(e, t) {
                cc.loader.loadRes("res", cc.SpriteAtlas, function(n, o) {
                    var i = o.getSpriteFrame(t);
                    e.getComponent(cc.Sprite).spriteFrame = i
                })
            },
            onLoad: function() {
                D.lange
            },
            onEnable: function() {
                var e = this;
                setTimeout(function() {
                    e.item2.active = !0
                }, 100),
                setTimeout(function() {
                    e.item3.active = !0
                }, 200),
                setTimeout(function() {
                    e.item4.active = !0
                }, 300),
                setTimeout(function() {
                    e.item5.active = !0
                }, 400),
                setTimeout(function() {
                    e.item6.active = !0
                }, 500),
                setTimeout(function() {
                    e.item7.active = !0
                }, 600)
            },
            onDisable: function() {
                this.item2.active = !1,
                this.item3.active = !1,
                this.item4.active = !1,
                this.item5.active = !1,
                this.item6.active = !1,
                this.item7.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}]
}, {}, ["LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "Canvas", "Gps", "drawShow", "Document", "antiAlias", "bezier", "common", "runtime", "hbg", "language", "list", "listChange", "listNode", "loading", "async", "control", "gPoint", "index", "ontouch", "teach", "making", "num", "over", "over2", "rect", "rool", "saveAndroid", "select", "select2", "showUITip", "test", "testPosY", "testPoxX", "textureRenderUtils", "mainBtn", "more", "pageView", "resumeBuy", "set", "share", "subscribe", "teach1", "teach2", "teach3", "teach4", "yisi"]);
