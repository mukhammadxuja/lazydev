(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [782],
  {
    5464: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/docs/components/alert',
        function () {
          return t(73);
        },
      ]);
    },
    2580: function (e, n, t) {
      'use strict';
      t.d(n, {
        G: function () {
          return r;
        },
      });
      var a = t(5893),
        s = t(7294),
        r = function (e) {
          var n = e.children,
            t = (0, s.useState)(!0),
            r = t[0],
            d = t[1],
            l = function () {
              window.scrollY > 200 ? d(!1) : d(!0);
            };
          return (
            (0, s.useEffect)(function () {
              return (
                window.addEventListener('scroll', l),
                function () {
                  window.removeEventListener('scroll', l);
                }
              );
            }, []),
            (0, a.jsx)('div', {
              children: (0, a.jsx)('div', {
                className: r
                  ? 'fixed z-50 top-[10rem] right-4 duration-300'
                  : 'fixed z-50 top-[7rem] right-4 duration-300',
                children: (0, a.jsx)('div', {
                  className:
                    'flex flex-col text-right text-xs md:text-sm text-primary dark:text-gray-400 dark:hover:text-white space-x-1',
                  children: n,
                }),
              }),
            })
          );
        };
    },
    73: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return f;
          },
          default: function () {
            return y;
          },
          meta: function () {
            return v;
          },
        });
      var a = t(5893),
        s = t(5434),
        r = t(9352),
        d = t(6016),
        l = t(1996),
        o = t(2580),
        i = t(2481),
        c = t(7912),
        m =
          (t(7294),
          function () {
            return (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)('div', {
                className:
                  'p-2 border-l-2 border-blue-600 bg-[#E8EEFF] dark:bg-[#1e2639] text-blue-600 rounded-r-lg mx-8',
                children: (0, a.jsxs)('div', {
                  className: 'mx-4',
                  children: [
                    (0, a.jsx)('h4', {
                      className: 'text-[1rem] py-3 font-semibold',
                      children: 'Lazydev ui component',
                    }),
                    (0, a.jsx)('p', {
                      className: 'text-sm py-2',
                      children:
                        'Lazydev is a copy and paste components to make projects easily and with a Unique and pleasant style, Lazydev is created from scratch and designed for all types of developed from the frontend lover to the backend that wants to easily create your visual approach to the end user',
                    }),
                  ],
                }),
              }),
            });
          }),
        h = function () {
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)('div', {
              className:
                'p-2 border-l-2 border-blue-300 bg-[#1a5cff] text-white rounded-r-lg mx-8',
              children: (0, a.jsxs)('div', {
                className: 'mx-4',
                children: [
                  (0, a.jsx)('h4', {
                    className: 'text-[1rem] py-3 font-semibold',
                    children: 'Lazydev ui component',
                  }),
                  (0, a.jsx)('p', {
                    className: 'text-sm py-2',
                    children:
                      'Lazydev is a copy and paste components to make projects easily and with a Unique and pleasant style, Lazydev is created from scratch and designed for all types of developed from the frontend lover to the backend that wants to easily create your visual approach to the end user',
                  }),
                ],
              }),
            }),
          });
        },
        x = function () {
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)('div', {
              className:
                'p-2 border-2 border-blue-600 bg-transparent text-blue-600 rounded-r-lg mx-8',
              children: (0, a.jsxs)('div', {
                className: 'mx-4',
                children: [
                  (0, a.jsx)('h4', {
                    className: 'text-[1rem] py-3 font-semibold',
                    children: 'Lazydev ui component',
                  }),
                  (0, a.jsx)('p', {
                    className: 'text-sm py-2',
                    children:
                      'Lazydev is a copy and paste components to make projects easily and with a Unique and pleasant style, Lazydev is created from scratch and designed for all types of developed from the frontend lover to the backend that wants to easily create your visual approach to the end user',
                  }),
                ],
              }),
            }),
          });
        },
        p = function (e) {
          var n = e.Icon,
            t = e.iconColor,
            r = e.text,
            d = e.paragraph;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)('div', {
              className:
                'p-4 rounded-lg bg-white shadow-lg dark:bg-[#102a43] w-[15rem] md:w-[25rem] my-2',
              children: [
                (0, a.jsxs)('div', {
                  className: 'flex items-center justify-between',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex items-center',
                      children: [
                        (0, a.jsx)('div', {
                          className:
                            'w-7 h-7 flex items-center justify-center rounded-full mr-3',
                          children: (0, a.jsx)(n, {
                            className: 'text-'.concat(t),
                          }),
                        }),
                        (0, a.jsx)('h4', {
                          className:
                            'text-gray-700 dark:text-white font-semibold',
                          children: r,
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      children: (0, a.jsx)(s.FU5, {
                        className: 'text-gray-700 dark:text-white text-lg',
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)('div', {
                  children: (0, a.jsx)('p', {
                    className: 'ml-10 text-gray-500',
                    children: d,
                  }),
                }),
              ],
            }),
          });
        },
        u = function (e) {
          var n = e.Icon,
            t = e.iconColor,
            r = e.text,
            d = e.paragraph,
            l = e.buttonText,
            o = e.buttonStyle;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)('div', {
              className:
                'p-4 rounded-lg bg-white shadow-lg dark:bg-[#102a43] w-[15rem] md:w-[25rem] my-2',
              children: [
                (0, a.jsxs)('div', {
                  className: 'flex items-center justify-between',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex items-center',
                      children: [
                        (0, a.jsx)('div', {
                          className:
                            'w-7 h-7 flex items-center justify-center rounded-full mr-3',
                          children: (0, a.jsx)(n, {
                            className: 'text-'.concat(t),
                          }),
                        }),
                        (0, a.jsx)('h4', {
                          className:
                            'text-gray-700 dark:text-white font-semibold',
                          children: r,
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      children: (0, a.jsx)(s.FU5, {
                        className: 'text-gray-700 dark:text-white text-lg',
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)('div', {
                  children: (0, a.jsx)('p', {
                    className: 'ml-10 text-gray-500',
                    children: d,
                  }),
                }),
                (0, a.jsx)('div', {
                  className: 'my-2',
                  children: (0, a.jsx)('button', {
                    className: 'btn '.concat(o, ' w-full'),
                    children: l,
                  }),
                }),
              ],
            }),
          });
        },
        f = !0,
        v = { name: 'Alert', title: 'Alert | Lazydev ui components' },
        j = function (e) {
          var n = e.children;
          return (0, a.jsx)(i.j, { name: v.name, title: v.title, children: n });
        };
      var y = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = function () {
            var n = Object.assign(
              { p: 'p', pre: 'pre', code: 'code' },
              e.components
            );
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)(o.G, {
                  children: [
                    (0, a.jsx)('a', {
                      href: '#default',
                      className: 'text-right',
                      children: (0, a.jsx)(n.p, { children: 'Default' }),
                    }),
                    (0, a.jsx)('a', {
                      href: '#solid',
                      className: 'text-right',
                      children: (0, a.jsx)(n.p, { children: 'Solid' }),
                    }),
                    (0, a.jsx)('a', {
                      href: '#border',
                      className: 'text-right',
                      children: (0, a.jsx)(n.p, { children: 'Border' }),
                    }),
                    (0, a.jsx)('a', {
                      href: '#icon',
                      className: 'text-right',
                      children: (0, a.jsx)(n.p, { children: 'Icon' }),
                    }),
                    (0, a.jsx)('a', {
                      href: '#iconWithButton',
                      className: 'text-right',
                      children: (0, a.jsx)(n.p, { children: 'With button' }),
                    }),
                  ],
                }),
                '\n',
                (0, a.jsx)(c.$, {
                  leftPath: '/docs/components/button',
                  rightPath: '/docs/components/loading',
                }),
                '\n',
                (0, a.jsx)('div', { id: 'default' }),
                '\n',
                (0, a.jsx)(d.Z, {
                  name: 'Default',
                  paragraph: 'This is a paragraph',
                  children: (0, a.jsx)(m, {}),
                }),
                '\n',
                (0, a.jsx)(l.E, {
                  children: (0, a.jsx)(n.pre, {
                    children: (0, a.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\n\nexport const Default = () => {\nreturn (\n  <>\n    <div className="p-2 border-l-2 border-blue-600 bg-[#1e2639] text-blue-600 rounded-r-lg">\n      <div className="mx-4">\n        <h4 className="text-[1rem] py-3 font-semibold">\n          Lazydev ui component\n        </h4>\n        <p className="text-sm py-1">\n          Lazydev is a copy and paste components to make projects easily and\n          with a Unique and pleasant style, Lazydev is created from scratch\n          and designed for all types of developed from the frontend lover to\n          the backend that wants to easily create your visual approach to the\n          end user\n        </p>\n      </div>\n    </div>\n  </>\n);\n};\n',
                    }),
                  }),
                }),
                '\n',
                (0, a.jsx)('div', { id: 'solid' }),
                '\n',
                (0, a.jsx)(d.Z, {
                  name: 'Solid',
                  paragraph: 'This is a paragraph',
                  children: (0, a.jsx)(h, {}),
                }),
                '\n',
                (0, a.jsx)(l.E, {
                  children: (0, a.jsx)(n.pre, {
                    children: (0, a.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\n\nexport const Solid = () => {\nreturn (\n  <>\n    <div className="p-2 border-l-2 border-blue-600 bg-[#1a5cff] text-white rounded-r-lg">\n      <div className="mx-4">\n        <h4 className="text-[1rem] py-3 font-semibold">\n          Lazydev ui component\n        </h4>\n        <p className="text-sm py-2">\n          Lazydev is a copy and paste components to make projects easily and\n          with a Unique and pleasant style, Lazydev is created from scratch\n          and designed for all types of developed from the frontend lover to\n          the backend that wants to easily create your visual approach to the\n          end user\n        </p>\n      </div>\n    </div>\n  </>\n);\n};\n',
                    }),
                  }),
                }),
                '\n',
                (0, a.jsx)('div', { id: 'border' }),
                '\n',
                (0, a.jsx)(d.Z, {
                  name: 'Border',
                  paragraph: 'This is a paragraph',
                  children: (0, a.jsx)(x, {}),
                }),
                '\n',
                (0, a.jsx)(l.E, {
                  children: (0, a.jsx)(n.pre, {
                    children: (0, a.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\n\nexport const Border = () => {\nreturn (\n  <>\n    <div className="p-2 border-2 border-blue-600 bg-transparent text-blue-600 rounded-r-lg mx-8">\n      <div className="mx-4">\n        <h4 className="text-[1rem] py-3 font-semibold">\n          Lazydev ui component\n        </h4>\n        <p className="text-sm py-2">\n          Lazydev is a copy and paste components to make projects easily and\n          with a Unique and pleasant style, Lazydev is created from scratch\n          and designed for all types of developed from the frontend lover to\n          the backend that wants to easily create your visual approach to the\n          end user\n        </p>\n      </div>\n    </div>\n  </>\n);\n};\n',
                    }),
                  }),
                }),
                '\n',
                (0, a.jsx)('div', { id: 'icon' }),
                '\n',
                (0, a.jsxs)(d.Z, {
                  name: 'Icon',
                  paragraph: 'This is a paragraph',
                  space: 'space-y-2',
                  children: [
                    (0, a.jsx)(p, {
                      Icon: s.ddU,
                      iconColor: 'green-500',
                      text: 'Uploaded Successful',
                      paragraph: '... was uploaded successfully',
                    }),
                    (0, a.jsx)(p, {
                      Icon: r.j6O,
                      iconColor: 'red-500',
                      text: 'Something went wrong',
                      paragraph: '... do not uploaded',
                    }),
                  ],
                }),
                '\n',
                (0, a.jsx)(l.E, {
                  children: (0, a.jsx)(n.pre, {
                    children: (0, a.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\nimport { MdOutlineDone, MdClose } from \'react-icons/md\';\n\nexport const Icon = () => {\nreturn (\n  <>\n    <div className="p-4 rounded-lg bg-white shadow-lg w-[15rem] md:w-[25rem] my-2">\n      <div className="flex items-center justify-between">\n        <div className="flex items-center">\n          <div className="w-7 h-7 flex items-center justify-center rounded-full mr-3">\n            <MdOutlineDone className="" text-green-500 />\n          </div>\n          <h4 className="text-gray-700 font-semibold">\n            Uploaded Successful\n          </h4>\n        </div>\n        <div>\n          <MdClose className="text-gray-700 text-lg" />\n        </div>\n      </div>\n      <div>\n        <p className="ml-10 text-gray-500">... was uploaded successfully</p>\n      </div>\n    </div>\n  </>\n);\n};\n\n',
                    }),
                  }),
                }),
                '\n',
                (0, a.jsx)('div', { id: 'iconWithButton' }),
                '\n',
                (0, a.jsxs)(d.Z, {
                  name: 'Icon with Button',
                  paragraph: 'This is a paragraph',
                  space: 'space-y-2',
                  children: [
                    (0, a.jsx)(u, {
                      Icon: s.ddU,
                      iconColor: 'green-500',
                      buttonText: 'Everything is ok',
                      buttonStyle: 'btn__primary',
                      text: 'Uploaded Successful',
                      paragraph: '... was uploaded successfully',
                    }),
                    (0, a.jsx)(u, {
                      Icon: r.j6O,
                      iconColor: 'red-500',
                      buttonText: 'Try again',
                      buttonStyle:
                        'btn bg-[#ff4757] text-xs md:text-sm text-white hover:drop-shadow-2xl hover:-translate-y-1',
                      text: 'Something went wrong',
                      paragraph: '... do not uploaded',
                    }),
                  ],
                }),
                '\n',
                (0, a.jsx)(l.E, {
                  children: (0, a.jsx)(n.pre, {
                    children: (0, a.jsx)(n.code, {
                      className: 'language-jsx',
                      children:
                        'import React from \'react\';\nimport { MdOutlineDone, MdClose } from \'react-icons/md\';\n\nexport const IconWithButton = () => {\nreturn (\n  <>\n    <div className="p-4 rounded-lg bg-white shadow-lg w-[15rem] md:w-[25rem] my-2">\n      <div className="flex items-center justify-between">\n        <div className="flex items-center">\n          <div className="w-7 h-7 flex items-center justify-center rounded-full mr-3">\n            <MdOutlineDone className="" text-green-500 />\n          </div>\n          <h4 className="text-gray-700 font-semibold">\n            Uploaded Successful\n          </h4>\n        </div>\n        <div>\n          <MdClose className="text-gray-700 text-lg" />\n        </div>\n      </div>\n      <div>\n        <p className="ml-10 text-gray-500">... was uploaded successfully</p>\n      </div>\n      <div className=\'my-2\'>\n          <button className={`btn ${buttonStyle} w-full`}>{buttonText}</button>\n      </div>\n    </div>\n  </>\n);\n};\n\n',
                    }),
                  }),
                }),
              ],
            });
          };
        return j
          ? (0, a.jsx)(j, Object.assign({}, e, { children: (0, a.jsx)(n, {}) }))
          : n();
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (n = 5464), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
