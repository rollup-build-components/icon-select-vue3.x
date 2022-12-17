'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var components = require('@ant-design/icons-vue');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var components__namespace = /*#__PURE__*/_interopNamespaceDefault(components);

/**
 * 图标库映射
 */
var icons = [
    {
        key: 'Directional',
        title: '方向性图标',
        icons: [
            'step-backward',
            'step-forward',
            'fast-backward',
            'fast-forward',
            'shrink',
            'arrows-alt',
            'down',
            'up',
            'left',
            'right',
            'caret-up',
            'caret-down',
            'caret-left',
            'caret-right',
            'up-circle',
            'down-circle',
            'left-circle',
            'right-circle',
            'double-right',
            'double-left',
            'vertical-left',
            'vertical-right',
            'vertical-align-top',
            'vertical-align-middle',
            'vertical-align-bottom',
            'forward',
            'backward',
            'rollback',
            'enter',
            'retweet',
            'swap',
            'swap-left',
            'swap-right',
            'arrow-up',
            'arrow-down',
            'arrow-left',
            'arrow-right',
            'play-circle',
            'up-square',
            'down-square',
            'left-square',
            'right-square',
            'login',
            'logout',
            'menu-fold',
            'menu-unfold',
            'border-bottom',
            'border-horizontal',
            'border-inner',
            'border-outer',
            'border-left',
            'border-right',
            'border-top',
            'border-verticle',
            'pic-center',
            'pic-left',
            'pic-right',
            'radius-bottomleft',
            'radius-bottomright',
            'radius-upleft',
            'radius-upright',
            'fullscreen',
            'fullscreen-exit'
        ]
    },
    {
        key: 'Suggested',
        title: '提示建议性图标',
        icons: [
            'question',
            'question-circle',
            'plus',
            'plus-circle',
            'pause',
            'pause-circle',
            'minus',
            'minus-circle',
            'plus-square',
            'minus-square',
            'info',
            'info-circle',
            'exclamation',
            'exclamation-circle',
            'close',
            'close-circle',
            'close-square',
            'check',
            'check-circle',
            'check-square',
            'clock-circle',
            'warning',
            'issues-close',
            'stop'
        ]
    },
    {
        key: 'Editor',
        title: '编辑类图标',
        icons: [
            'edit',
            'form',
            'copy',
            'scissor',
            'delete',
            'snippets',
            'diff',
            'highlight',
            'align-center',
            'align-left',
            'align-right',
            'bg-colors',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'redo',
            'undo',
            'zoom-in',
            'zoom-out',
            'font-colors',
            'font-size',
            'line-height',
            'dash',
            'small-dash',
            'sort-ascending',
            'sort-descending',
            'drag',
            'ordered-list',
            'unordered-list',
            'radius-setting',
            'column-width',
            'column-height'
        ]
    },
    {
        key: 'Data',
        title: '数据类图标',
        icons: [
            'area-chart',
            'pie-chart',
            'bar-chart',
            'dot-chart',
            'line-chart',
            'radar-chart',
            'heat-map',
            'fall',
            'rise',
            'stock',
            'box-plot',
            'fund',
            'sliders'
        ]
    },
    {
        key: 'Brand',
        title: '网站通用图标',
        icons: [
            'android',
            'apple',
            'windows',
            'ie',
            'chrome',
            'github',
            'aliwangwang',
            'dingding',
            'weibo-square',
            'weibo-circle',
            'taobao-circle',
            'html5',
            'weibo',
            'twitter',
            'wechat',
            'youtube',
            'alipay-circle',
            'taobao',
            'skype',
            'qq',
            'medium-workmark',
            'gitlab',
            'medium',
            'linkedin',
            'google-plus',
            'dropbox',
            'facebook',
            'codepen',
            'code-sandbox',
            'amazon',
            'google',
            'codepen-circle',
            'alipay',
            'ant-design',
            'ant-cloud',
            'aliyun',
            'zhihu',
            'slack',
            'slack-square',
            'behance',
            'behance-square',
            'dribbble',
            'dribbble-square',
            'instagram',
            'yuque',
            'alibaba',
            'yahoo',
            'reddit',
            'sketch'
        ]
    },
    {
        key: 'Application',
        title: '品牌和标识',
        icons: [
            'account-book',
            'alert',
            'api',
            'appstore',
            'audio',
            'bank',
            'bell',
            'book',
            'bug',
            'bulb',
            'calculator',
            'build',
            'calendar',
            'camera',
            'car',
            'carry-out',
            'cloud',
            'code',
            'compass',
            'contacts',
            'container',
            'control',
            'credit-card',
            'crown',
            'customer-service',
            'dashboard',
            'database',
            'dislike',
            'environment',
            'experiment',
            'eye-invisible',
            'eye',
            'file-add',
            'file-excel',
            'file-exclamation',
            'file-image',
            'file-markdown',
            'file-pdf',
            'file-ppt',
            'file-text',
            'file-unknown',
            'file-word',
            'file-zip',
            'file',
            'filter',
            'fire',
            'flag',
            'folder-add',
            'folder',
            'folder-open',
            'frown',
            'funnel-plot',
            'gift',
            'hdd',
            'heart',
            'home',
            'hourglass',
            'idcard',
            'insurance',
            'interaction',
            'layout',
            'like',
            'lock',
            'mail',
            'medicine-box',
            'meh',
            'message',
            'mobile',
            'money-collect',
            'pay-circle',
            'notification',
            'phone',
            'picture',
            'play-square',
            'printer',
            'profile',
            'project',
            'pushpin',
            'property-safety',
            'read',
            'reconciliation',
            'red-envelope',
            'rest',
            'rocket',
            'safety-certificate',
            'save',
            'schedule',
            'security-scan',
            'setting',
            'shop',
            'shopping',
            'skin',
            'smile',
            'sound',
            'star',
            'switcher',
            'tablet',
            'tag',
            'tags',
            'tool',
            'thunderbolt',
            'trophy',
            'unlock',
            'usb',
            'video-camera',
            'wallet',
            'apartment',
            'audit',
            'barcode',
            'bars',
            'block',
            'border',
            'branches',
            'ci',
            'cloud-download',
            'cloud-server',
            'cloud-sync',
            'cloud-upload',
            'cluster',
            'coffee',
            'copyright',
            'deployment-unit',
            'desktop',
            'disconnect',
            'dollar',
            'download',
            'ellipsis',
            'euro',
            'error',
            'export',
            'file-done',
            'file-jpg',
            'file-protect',
            'file-sync',
            'file-search',
            'fork',
            'gateway',
            'global',
            'gold',
            'history',
            'import',
            'inbox',
            'key',
            'laptop',
            'link',
            'line',
            'loading-3-quarters',
            'loading',
            'man',
            'menu',
            'monitor',
            'more',
            'number',
            'percentage',
            'paper-clip',
            'pound',
            'poweroff',
            'pull-request',
            'qrcode',
            'reload',
            'safety',
            'robot',
            'scan',
            'search',
            'select',
            'shake',
            'share-alt',
            'shopping-cart',
            'solution',
            'sync',
            'table',
            'team',
            'to-top',
            'trademark',
            'transaction',
            'upload',
            'user-add',
            'user-delete',
            'usergroup-add',
            'user',
            'usergroup-delete',
            'wifi',
            'woman'
        ]
    }
];

const _hoisted_1 = {
  style: {
    "font-size": "14px"
  }
};
const _hoisted_2 = {
  class: "s-icon-dropdown-hidden",
  style: {
    "padding": "0 3px",
    "font-size": "12px",
    "vertical-align": "middle"
  }
};
const __default__ = {
  name: 'IconSelect'
};
var script = /*#__PURE__*/vue.defineComponent({
  ...__default__,
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    allowClear: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: undefined
    }
  },
  emits: ["update:modelValue"],
  setup(__props, {
    emit: emitChange
  }) {
    const groups = vue.computed(() => {
      return icons.map(group => {
        return {
          key: group.key,
          title: group.title,
          children: group.icons.map(icon => ({
            key: icon,
            label: icon,
            value: icon
          }))
        };
      });
    });
    const getComponent = name => {
      const upperCase = name.replaceAll(/(^|-)(\w)/g, (t1, t2, t3) => t3 && t3.toUpperCase());
      return components__namespace[upperCase + 'Outlined'];
    };
    const bindChange = emitChange.bind(null, 'update:modelValue');
    return (_ctx, _cache) => {
      const _component_a_select_option = vue.resolveComponent("a-select-option");
      const _component_a_select_opt_group = vue.resolveComponent("a-select-opt-group");
      const _component_a_select = vue.resolveComponent("a-select");
      return vue.openBlock(), vue.createBlock(_component_a_select, {
        virtual: false,
        value: __props.modelValue,
        disabled: __props.disabled,
        showSearch: __props.showSearch,
        allowClear: __props.allowClear,
        placeholder: __props.placeholder,
        style: {
          "width": "100%"
        },
        optionFilterProp: "label",
        dropdownClassName: "s-icon-dropdown-wrapper",
        onChange: vue.unref(bindChange)
      }, {
        default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(groups), group => {
          return vue.openBlock(), vue.createBlock(_component_a_select_opt_group, {
            key: group.key,
            label: group.title
          }, {
            label: vue.withCtx(() => [vue.createElementVNode("span", _hoisted_1, vue.toDisplayString(group.title), 1 /* TEXT */)]),

            default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(group.children, item => {
              return vue.openBlock(), vue.createBlock(_component_a_select_option, {
                key: item.key,
                value: item.value,
                title: item.label,
                label: item.label
              }, {
                default: vue.withCtx(() => [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(getComponent(item.value)), {
                  style: {
                    "font-size": "18px",
                    "vertical-align": "middle"
                  }
                })), vue.createElementVNode("span", _hoisted_2, vue.toDisplayString(item.label), 1 /* TEXT */)]),

                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value", "title", "label"]);
            }), 128 /* KEYED_FRAGMENT */))]),

            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"]);
        }), 128 /* KEYED_FRAGMENT */))]),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["value", "disabled", "showSearch", "allowClear", "placeholder", "onChange"]);
    };
  }
});

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".s-icon-dropdown-wrapper .rc-virtual-list {\n  padding-left: 8px !important;\n  margin-bottom: 4px !important;\n}\n.s-icon-dropdown-wrapper .rc-virtual-list .rc-virtual-list-holder-inner {\n  display: block !important;\n}\n.s-icon-dropdown-wrapper .rc-virtual-list .ant-select-item-option-grouped {\n  padding-left: 0 !important;\n}\n.s-icon-dropdown-wrapper .rc-virtual-list .ant-select-item-option-selected {\n  background-color: #b1d6fe;\n}\n.s-icon-dropdown-wrapper .rc-virtual-list .ant-select-item-option {\n  margin: 3px 5px !important;\n  padding: 5px 7px !important;\n  line-height: 18px !important;\n  display: inline-block !important;\n}\n.s-icon-dropdown-wrapper .rc-virtual-list .ant-select-item-option .s-icon-dropdown-hidden {\n  display: none !important;\n}\n";
styleInject(css_248z);

script.__file = "src/index.vue";

exports.default = script;
