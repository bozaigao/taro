/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Type,
} from './components/icon/icon';
import {
  Mode,
} from './components/image/image';
import {
  Fields,
  Mode as Mode1,
} from './components/picker/picker';
import {
  Nodes,
} from './components/rich-text/rich-text';
import {
  Conf,
} from './components/tabbar/tabbar';
import {
  Danmu,
} from './components/video/video-danmu';

export namespace Components {
  interface TaroAudioCore {
    'autoplay': boolean;
    'controls': boolean;
    'loop': boolean;
    'muted': boolean;
    'src': string;
  }
  interface TaroBlockCore {}
  interface TaroButtonCore {
    'disabled': boolean;
    'formType': 'submit' | 'reset' | null;
    'hoverClass': string;
    'hoverStartTime': number;
    'hoverStayTime': number;
    'loading': boolean;
    'plain': boolean;
    'size': string;
    'type': string;
  }
  interface TaroCameraCore {}
  interface TaroCanvasCore {
    'canvasId': string;
    'type': string;
  }
  interface TaroCheckboxCore {
    'checked': boolean;
    'color': string;
    'id': string;
    'name': string;
    'value': string;
  }
  interface TaroCheckboxGroupCore {
    'name': any;
  }
  interface TaroCoverImageCore {}
  interface TaroCoverViewCore {}
  interface TaroFormCore {}
  interface TaroIconCore {
    'color': string;
    'size': string | number;
    'type': Type;
  }
  interface TaroImageCore {
    'lazyLoad': boolean;
    'mode': Mode;
    'src': string;
  }
  interface TaroInputCore {
    'autoFocus': boolean;
    'confirmType': string;
    'disabled': boolean;
    'maxlength': number;
    'name': string;
    'password': boolean;
    'placeholder': string;
    'type': string;
    'value': string;
  }
  interface TaroLabelCore {
    'for': string;
  }
  interface TaroMoveableAreaCore {}
  interface TaroMoveableViewCore {}
  interface TaroNavigatorCore {
    'delta': number;
    'hoverClass': string;
    'isHover': boolean;
    'openType': string;
    'url': string;
  }
  interface TaroOpenDataCore {}
  interface TaroPickerCore {
    'disabled': boolean;
    'end': string;
    'fields': Fields;
    'mode': Mode;
    'name': string;
    'range': any[];
    'rangeKey': string;
    'start': string;
    'value': number | number[] | string;
  }
  interface TaroPickerGroup {
    'columnId': string;
    'height': number;
    'mode': 'time' | 'date';
    'onColumnChange': (height: number, columnId: string) => void;
    'range': any[];
    'rangeKey': string;
    'updateDay': (value: number, fields: number) => void;
    'updateHeight': (height: number, columnId: string, needRevise?: boolean) => void;
  }
  interface TaroPickerViewColumnCore {}
  interface TaroPickerViewCore {}
  interface TaroProgressCore {
    'active': boolean;
    'activeColor': string;
    'backgroundColor': string;
    'borderRadius': number | string;
    'fontSize': number | string;
    'percent': number;
    'showInfo': boolean;
    'strokeWidth': number | string;
  }
  interface TaroPullToRefresh {
    'damping': number;
    'distanceToRefresh': number;
    'indicator': { activate: string; deactivate: string; release: string; finish: string; };
    'prefixCls': string;
  }
  interface TaroRadioCore {
    'checked': boolean;
    'id': string;
    'name': string;
    'value': string;
  }
  interface TaroRadioGroupCore {
    'name': any;
  }
  interface TaroRichTextCore {
    'nodes': Nodes;
  }
  interface TaroScrollViewCore {
    'lowerThreshold': number | string;
    'mpScrollIntoView': string;
    'mpScrollLeft': number | string;
    'mpScrollTop': number | string;
    'scrollWithAnimation': boolean;
    'scrollX': boolean;
    'scrollY': boolean;
    'upperThreshold': number | string;
  }
  interface TaroSliderCore {
    'activeColor': string;
    'backgroundColor': string;
    'blockColor': string;
    'blockSize': number;
    'disabled': boolean;
    'max': number;
    'min': number;
    'name': string;
    'showValue': boolean;
    'step': number;
    'value': number | null;
  }
  interface TaroSwiperCore {
    /**
    * 是否自动切换
    */
    'autoplay': boolean;
    /**
    * 是否采用衔接滑动
    */
    'circular': boolean;
    /**
    * 当前所在滑块的 index
    */
    'current': number;
    /**
    * 同时显示的滑块数量
    */
    'displayMultipleItems': number;
    /**
    * 滑动动画时长
    */
    'duration': number;
    /**
    * 给 prewviewImage API 使用，全屏显示 swiper
    */
    'full': boolean;
    /**
    * 当前选中的指示点颜色
    */
    'indicatorActiveColor': string;
    /**
    * 指示点颜色
    */
    'indicatorColor': string;
    /**
    * 是否显示面板指示点
    */
    'indicatorDots': boolean;
    /**
    * 自动切换时间间隔
    */
    'interval': number;
    /**
    * 前边距，可用于露出前一项的一小部分，接受 px 值
    */
    'previousMargin': string;
    /**
    * 滑动方向是否为纵向
    */
    'vertical': boolean;
  }
  interface TaroSwiperItemCore {
    'itemId': string;
  }
  interface TaroSwitchCore {
    'checked': boolean;
    'color': string;
    'name': string;
    'type': string;
  }
  interface TaroTabbar {
    'conf': Conf;
  }
  interface TaroTextCore {
    'selectable': boolean;
  }
  interface TaroTextareaCore {
    'autoFocus': boolean;
    'disabled': boolean;
    'maxlength': number;
    'name': string;
    'placeholder': string;
    'value': string;
  }
  interface TaroVideoControl {
    'controls': boolean;
    'currentTime': number;
    'duration': number;
    'getIsDraggingProgressBall': () => Promise<boolean>;
    'isPlaying': boolean;
    'pauseFunc': () => void;
    'playFunc': () => void;
    'seekFunc': (position: number) => void;
    'setCurrentTime': (time: number) => Promise<void>;
    'setProgressBall': (percentage: number) => Promise<void>;
    'showPlayBtn': boolean;
    'showProgress': boolean;
    'toggleVisibility': (nextVisible?: boolean | undefined) => Promise<void>;
  }
  interface TaroVideoCore {
    /**
    * 是否自动播放
    */
    'autoplay': boolean;
    /**
    * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
    */
    'controls': boolean;
    /**
    * 是否显示弹幕按钮
    */
    'danmuBtn': boolean;
    /**
    * 弹幕列表
    */
    'danmuList': [];
    /**
    * 指定视频时长
    */
    'duration': number;
    /**
    * 是否展示弹幕
    */
    'enableDanmu': boolean;
    /**
    * 是否开启播放手势，即双击切换播放/暂停
    */
    'enablePlayGesture': boolean;
    /**
    * 是否开启控制进度的手势
    */
    'enableProgressGesture': boolean;
    /**
    * 指定视频初始播放位置
    */
    'initialTime': number;
    /**
    * 是否循环播放
    */
    'loop': boolean;
    /**
    * 是否静音播放
    */
    'muted': boolean;
    /**
    * 当视频大小与 video 容器大小不一致时，视频的表现形式
    */
    'objectFit': 'contain' | 'fill' | 'cover';
    /**
    * 视频封面的图片网络资源地址或云文件ID（2.3.0）。若 controls 属性值为 false 则设置 poster 无效
    */
    'poster': string;
    /**
    * 是否显示视频中间的播放按钮
    */
    'showCenterPlayBtn': boolean;
    /**
    * 是否显示全屏按钮
    */
    'showFullscreenBtn': boolean;
    /**
    * 是否显示静音按钮
    */
    'showMuteBtn': boolean;
    /**
    * 是否显示视频底部控制栏的播放按钮
    */
    'showPlayBtn': boolean;
    'showProgress': boolean;
    /**
    * 要播放视频的资源地址
    */
    'src': string;
    /**
    * 在非全屏模式下，是否开启亮度与音量调节手势
    */
    'vslideGesture': boolean;
    /**
    * 在全屏模式下，是否开启亮度与音量调节手势
    */
    'vslideGestureInFullscreen': boolean;
  }
  interface TaroVideoDanmu {
    'enable': boolean;
    'sendDanmu': (danmuList?: Partial<Danmu> | Partial<Danmu>[]) => Promise<void>;
    'tick': (currentTime: number) => Promise<void>;
  }
  interface TaroViewCore {
    'hoverClass': string;
    'hoverStartTime': number;
    'hoverStayTime': number;
  }
  interface TaroWebViewCore {
    'src': string;
  }
}

declare global {


  interface HTMLTaroAudioCoreElement extends Components.TaroAudioCore, HTMLStencilElement {}
  var HTMLTaroAudioCoreElement: {
    prototype: HTMLTaroAudioCoreElement;
    new (): HTMLTaroAudioCoreElement;
  };

  interface HTMLTaroBlockCoreElement extends Components.TaroBlockCore, HTMLStencilElement {}
  var HTMLTaroBlockCoreElement: {
    prototype: HTMLTaroBlockCoreElement;
    new (): HTMLTaroBlockCoreElement;
  };

  interface HTMLTaroButtonCoreElement extends Components.TaroButtonCore, HTMLStencilElement {}
  var HTMLTaroButtonCoreElement: {
    prototype: HTMLTaroButtonCoreElement;
    new (): HTMLTaroButtonCoreElement;
  };

  interface HTMLTaroCameraCoreElement extends Components.TaroCameraCore, HTMLStencilElement {}
  var HTMLTaroCameraCoreElement: {
    prototype: HTMLTaroCameraCoreElement;
    new (): HTMLTaroCameraCoreElement;
  };

  interface HTMLTaroCanvasCoreElement extends Components.TaroCanvasCore, HTMLStencilElement {}
  var HTMLTaroCanvasCoreElement: {
    prototype: HTMLTaroCanvasCoreElement;
    new (): HTMLTaroCanvasCoreElement;
  };

  interface HTMLTaroCheckboxCoreElement extends Components.TaroCheckboxCore, HTMLStencilElement {}
  var HTMLTaroCheckboxCoreElement: {
    prototype: HTMLTaroCheckboxCoreElement;
    new (): HTMLTaroCheckboxCoreElement;
  };

  interface HTMLTaroCheckboxGroupCoreElement extends Components.TaroCheckboxGroupCore, HTMLStencilElement {}
  var HTMLTaroCheckboxGroupCoreElement: {
    prototype: HTMLTaroCheckboxGroupCoreElement;
    new (): HTMLTaroCheckboxGroupCoreElement;
  };

  interface HTMLTaroCoverImageCoreElement extends Components.TaroCoverImageCore, HTMLStencilElement {}
  var HTMLTaroCoverImageCoreElement: {
    prototype: HTMLTaroCoverImageCoreElement;
    new (): HTMLTaroCoverImageCoreElement;
  };

  interface HTMLTaroCoverViewCoreElement extends Components.TaroCoverViewCore, HTMLStencilElement {}
  var HTMLTaroCoverViewCoreElement: {
    prototype: HTMLTaroCoverViewCoreElement;
    new (): HTMLTaroCoverViewCoreElement;
  };

  interface HTMLTaroFormCoreElement extends Components.TaroFormCore, HTMLStencilElement {}
  var HTMLTaroFormCoreElement: {
    prototype: HTMLTaroFormCoreElement;
    new (): HTMLTaroFormCoreElement;
  };

  interface HTMLTaroIconCoreElement extends Components.TaroIconCore, HTMLStencilElement {}
  var HTMLTaroIconCoreElement: {
    prototype: HTMLTaroIconCoreElement;
    new (): HTMLTaroIconCoreElement;
  };

  interface HTMLTaroImageCoreElement extends Components.TaroImageCore, HTMLStencilElement {}
  var HTMLTaroImageCoreElement: {
    prototype: HTMLTaroImageCoreElement;
    new (): HTMLTaroImageCoreElement;
  };

  interface HTMLTaroInputCoreElement extends Components.TaroInputCore, HTMLStencilElement {}
  var HTMLTaroInputCoreElement: {
    prototype: HTMLTaroInputCoreElement;
    new (): HTMLTaroInputCoreElement;
  };

  interface HTMLTaroLabelCoreElement extends Components.TaroLabelCore, HTMLStencilElement {}
  var HTMLTaroLabelCoreElement: {
    prototype: HTMLTaroLabelCoreElement;
    new (): HTMLTaroLabelCoreElement;
  };

  interface HTMLTaroMoveableAreaCoreElement extends Components.TaroMoveableAreaCore, HTMLStencilElement {}
  var HTMLTaroMoveableAreaCoreElement: {
    prototype: HTMLTaroMoveableAreaCoreElement;
    new (): HTMLTaroMoveableAreaCoreElement;
  };

  interface HTMLTaroMoveableViewCoreElement extends Components.TaroMoveableViewCore, HTMLStencilElement {}
  var HTMLTaroMoveableViewCoreElement: {
    prototype: HTMLTaroMoveableViewCoreElement;
    new (): HTMLTaroMoveableViewCoreElement;
  };

  interface HTMLTaroNavigatorCoreElement extends Components.TaroNavigatorCore, HTMLStencilElement {}
  var HTMLTaroNavigatorCoreElement: {
    prototype: HTMLTaroNavigatorCoreElement;
    new (): HTMLTaroNavigatorCoreElement;
  };

  interface HTMLTaroOpenDataCoreElement extends Components.TaroOpenDataCore, HTMLStencilElement {}
  var HTMLTaroOpenDataCoreElement: {
    prototype: HTMLTaroOpenDataCoreElement;
    new (): HTMLTaroOpenDataCoreElement;
  };

  interface HTMLTaroPickerCoreElement extends Components.TaroPickerCore, HTMLStencilElement {}
  var HTMLTaroPickerCoreElement: {
    prototype: HTMLTaroPickerCoreElement;
    new (): HTMLTaroPickerCoreElement;
  };

  interface HTMLTaroPickerGroupElement extends Components.TaroPickerGroup, HTMLStencilElement {}
  var HTMLTaroPickerGroupElement: {
    prototype: HTMLTaroPickerGroupElement;
    new (): HTMLTaroPickerGroupElement;
  };

  interface HTMLTaroPickerViewColumnCoreElement extends Components.TaroPickerViewColumnCore, HTMLStencilElement {}
  var HTMLTaroPickerViewColumnCoreElement: {
    prototype: HTMLTaroPickerViewColumnCoreElement;
    new (): HTMLTaroPickerViewColumnCoreElement;
  };

  interface HTMLTaroPickerViewCoreElement extends Components.TaroPickerViewCore, HTMLStencilElement {}
  var HTMLTaroPickerViewCoreElement: {
    prototype: HTMLTaroPickerViewCoreElement;
    new (): HTMLTaroPickerViewCoreElement;
  };

  interface HTMLTaroProgressCoreElement extends Components.TaroProgressCore, HTMLStencilElement {}
  var HTMLTaroProgressCoreElement: {
    prototype: HTMLTaroProgressCoreElement;
    new (): HTMLTaroProgressCoreElement;
  };

  interface HTMLTaroPullToRefreshElement extends Components.TaroPullToRefresh, HTMLStencilElement {}
  var HTMLTaroPullToRefreshElement: {
    prototype: HTMLTaroPullToRefreshElement;
    new (): HTMLTaroPullToRefreshElement;
  };

  interface HTMLTaroRadioCoreElement extends Components.TaroRadioCore, HTMLStencilElement {}
  var HTMLTaroRadioCoreElement: {
    prototype: HTMLTaroRadioCoreElement;
    new (): HTMLTaroRadioCoreElement;
  };

  interface HTMLTaroRadioGroupCoreElement extends Components.TaroRadioGroupCore, HTMLStencilElement {}
  var HTMLTaroRadioGroupCoreElement: {
    prototype: HTMLTaroRadioGroupCoreElement;
    new (): HTMLTaroRadioGroupCoreElement;
  };

  interface HTMLTaroRichTextCoreElement extends Components.TaroRichTextCore, HTMLStencilElement {}
  var HTMLTaroRichTextCoreElement: {
    prototype: HTMLTaroRichTextCoreElement;
    new (): HTMLTaroRichTextCoreElement;
  };

  interface HTMLTaroScrollViewCoreElement extends Components.TaroScrollViewCore, HTMLStencilElement {}
  var HTMLTaroScrollViewCoreElement: {
    prototype: HTMLTaroScrollViewCoreElement;
    new (): HTMLTaroScrollViewCoreElement;
  };

  interface HTMLTaroSliderCoreElement extends Components.TaroSliderCore, HTMLStencilElement {}
  var HTMLTaroSliderCoreElement: {
    prototype: HTMLTaroSliderCoreElement;
    new (): HTMLTaroSliderCoreElement;
  };

  interface HTMLTaroSwiperCoreElement extends Components.TaroSwiperCore, HTMLStencilElement {}
  var HTMLTaroSwiperCoreElement: {
    prototype: HTMLTaroSwiperCoreElement;
    new (): HTMLTaroSwiperCoreElement;
  };

  interface HTMLTaroSwiperItemCoreElement extends Components.TaroSwiperItemCore, HTMLStencilElement {}
  var HTMLTaroSwiperItemCoreElement: {
    prototype: HTMLTaroSwiperItemCoreElement;
    new (): HTMLTaroSwiperItemCoreElement;
  };

  interface HTMLTaroSwitchCoreElement extends Components.TaroSwitchCore, HTMLStencilElement {}
  var HTMLTaroSwitchCoreElement: {
    prototype: HTMLTaroSwitchCoreElement;
    new (): HTMLTaroSwitchCoreElement;
  };

  interface HTMLTaroTabbarElement extends Components.TaroTabbar, HTMLStencilElement {}
  var HTMLTaroTabbarElement: {
    prototype: HTMLTaroTabbarElement;
    new (): HTMLTaroTabbarElement;
  };

  interface HTMLTaroTextCoreElement extends Components.TaroTextCore, HTMLStencilElement {}
  var HTMLTaroTextCoreElement: {
    prototype: HTMLTaroTextCoreElement;
    new (): HTMLTaroTextCoreElement;
  };

  interface HTMLTaroTextareaCoreElement extends Components.TaroTextareaCore, HTMLStencilElement {}
  var HTMLTaroTextareaCoreElement: {
    prototype: HTMLTaroTextareaCoreElement;
    new (): HTMLTaroTextareaCoreElement;
  };

  interface HTMLTaroVideoControlElement extends Components.TaroVideoControl, HTMLStencilElement {}
  var HTMLTaroVideoControlElement: {
    prototype: HTMLTaroVideoControlElement;
    new (): HTMLTaroVideoControlElement;
  };

  interface HTMLTaroVideoCoreElement extends Components.TaroVideoCore, HTMLStencilElement {}
  var HTMLTaroVideoCoreElement: {
    prototype: HTMLTaroVideoCoreElement;
    new (): HTMLTaroVideoCoreElement;
  };

  interface HTMLTaroVideoDanmuElement extends Components.TaroVideoDanmu, HTMLStencilElement {}
  var HTMLTaroVideoDanmuElement: {
    prototype: HTMLTaroVideoDanmuElement;
    new (): HTMLTaroVideoDanmuElement;
  };

  interface HTMLTaroViewCoreElement extends Components.TaroViewCore, HTMLStencilElement {}
  var HTMLTaroViewCoreElement: {
    prototype: HTMLTaroViewCoreElement;
    new (): HTMLTaroViewCoreElement;
  };

  interface HTMLTaroWebViewCoreElement extends Components.TaroWebViewCore, HTMLStencilElement {}
  var HTMLTaroWebViewCoreElement: {
    prototype: HTMLTaroWebViewCoreElement;
    new (): HTMLTaroWebViewCoreElement;
  };
  interface HTMLElementTagNameMap {
    'taro-audio-core': HTMLTaroAudioCoreElement;
    'taro-block-core': HTMLTaroBlockCoreElement;
    'taro-button-core': HTMLTaroButtonCoreElement;
    'taro-camera-core': HTMLTaroCameraCoreElement;
    'taro-canvas-core': HTMLTaroCanvasCoreElement;
    'taro-checkbox-core': HTMLTaroCheckboxCoreElement;
    'taro-checkbox-group-core': HTMLTaroCheckboxGroupCoreElement;
    'taro-cover-image-core': HTMLTaroCoverImageCoreElement;
    'taro-cover-view-core': HTMLTaroCoverViewCoreElement;
    'taro-form-core': HTMLTaroFormCoreElement;
    'taro-icon-core': HTMLTaroIconCoreElement;
    'taro-image-core': HTMLTaroImageCoreElement;
    'taro-input-core': HTMLTaroInputCoreElement;
    'taro-label-core': HTMLTaroLabelCoreElement;
    'taro-moveable-area-core': HTMLTaroMoveableAreaCoreElement;
    'taro-moveable-view-core': HTMLTaroMoveableViewCoreElement;
    'taro-navigator-core': HTMLTaroNavigatorCoreElement;
    'taro-open-data-core': HTMLTaroOpenDataCoreElement;
    'taro-picker-core': HTMLTaroPickerCoreElement;
    'taro-picker-group': HTMLTaroPickerGroupElement;
    'taro-picker-view-column-core': HTMLTaroPickerViewColumnCoreElement;
    'taro-picker-view-core': HTMLTaroPickerViewCoreElement;
    'taro-progress-core': HTMLTaroProgressCoreElement;
    'taro-pull-to-refresh': HTMLTaroPullToRefreshElement;
    'taro-radio-core': HTMLTaroRadioCoreElement;
    'taro-radio-group-core': HTMLTaroRadioGroupCoreElement;
    'taro-rich-text-core': HTMLTaroRichTextCoreElement;
    'taro-scroll-view-core': HTMLTaroScrollViewCoreElement;
    'taro-slider-core': HTMLTaroSliderCoreElement;
    'taro-swiper-core': HTMLTaroSwiperCoreElement;
    'taro-swiper-item-core': HTMLTaroSwiperItemCoreElement;
    'taro-switch-core': HTMLTaroSwitchCoreElement;
    'taro-tabbar': HTMLTaroTabbarElement;
    'taro-text-core': HTMLTaroTextCoreElement;
    'taro-textarea-core': HTMLTaroTextareaCoreElement;
    'taro-video-control': HTMLTaroVideoControlElement;
    'taro-video-core': HTMLTaroVideoCoreElement;
    'taro-video-danmu': HTMLTaroVideoDanmuElement;
    'taro-view-core': HTMLTaroViewCoreElement;
    'taro-web-view-core': HTMLTaroWebViewCoreElement;
  }
}

declare namespace LocalJSX {
  interface TaroAudioCore {
    'autoplay'?: boolean;
    'controls'?: boolean;
    'loop'?: boolean;
    'muted'?: boolean;
    'onEnded'?: (event: CustomEvent<any>) => void;
    'onError'?: (event: CustomEvent<any>) => void;
    'onPause'?: (event: CustomEvent<any>) => void;
    'onPlay'?: (event: CustomEvent<any>) => void;
    'onTimeupdate'?: (event: CustomEvent<any>) => void;
    'src'?: string;
  }
  interface TaroBlockCore {}
  interface TaroButtonCore {
    'disabled'?: boolean;
    'formType'?: 'submit' | 'reset' | null;
    'hoverClass'?: string;
    'hoverStartTime'?: number;
    'hoverStayTime'?: number;
    'loading'?: boolean;
    'onTarobuttonreset'?: (event: CustomEvent<any>) => void;
    'onTarobuttonsubmit'?: (event: CustomEvent<any>) => void;
    'plain'?: boolean;
    'size'?: string;
    'type'?: string;
  }
  interface TaroCameraCore {}
  interface TaroCanvasCore {
    'canvasId'?: string;
    'onLongtap'?: (event: CustomEvent<any>) => void;
    'type'?: string;
  }
  interface TaroCheckboxCore {
    'checked'?: boolean;
    'color'?: string;
    'id'?: string;
    'name'?: string;
    'onCheckboxchange'?: (event: CustomEvent<any>) => void;
    'value'?: string;
  }
  interface TaroCheckboxGroupCore {
    'name'?: any;
    'onChange'?: (event: CustomEvent<any>) => void;
  }
  interface TaroCoverImageCore {}
  interface TaroCoverViewCore {}
  interface TaroFormCore {
    'onSubmit'?: (event: CustomEvent<any>) => void;
  }
  interface TaroIconCore {
    'color'?: string;
    'size'?: string | number;
    'type'?: Type;
  }
  interface TaroImageCore {
    'lazyLoad'?: boolean;
    'mode'?: Mode;
    'onError'?: (event: CustomEvent<any>) => void;
    'onLoad'?: (event: CustomEvent<any>) => void;
    'src'?: string;
  }
  interface TaroInputCore {
    'autoFocus'?: boolean;
    'confirmType'?: string;
    'disabled'?: boolean;
    'maxlength'?: number;
    'name'?: string;
    'onBlur'?: (event: CustomEvent<any>) => void;
    'onChange'?: (event: CustomEvent<any>) => void;
    'onConfirm'?: (event: CustomEvent<any>) => void;
    'onFocus'?: (event: CustomEvent<any>) => void;
    'onInput'?: (event: CustomEvent<any>) => void;
    'onKeydown'?: (event: CustomEvent<any>) => void;
    'password'?: boolean;
    'placeholder'?: string;
    'type'?: string;
    'value'?: string;
  }
  interface TaroLabelCore {
    'for'?: string;
  }
  interface TaroMoveableAreaCore {}
  interface TaroMoveableViewCore {}
  interface TaroNavigatorCore {
    'delta'?: number;
    'hoverClass'?: string;
    'isHover'?: boolean;
    'onComplete'?: (event: CustomEvent<any>) => void;
    'onCuccess'?: (event: CustomEvent<any>) => void;
    'onFail'?: (event: CustomEvent<any>) => void;
    'openType'?: string;
    'url'?: string;
  }
  interface TaroOpenDataCore {}
  interface TaroPickerCore {
    'disabled'?: boolean;
    'end'?: string;
    'fields'?: Fields;
    'mode'?: Mode;
    'name'?: string;
    'onCancel'?: (event: CustomEvent<any>) => void;
    'onChange'?: (event: CustomEvent<any>) => void;
    'onColumnchange'?: (event: CustomEvent<any>) => void;
    'range'?: any[];
    'rangeKey'?: string;
    'start'?: string;
    'value'?: number | number[] | string;
  }
  interface TaroPickerGroup {
    'columnId'?: string;
    'height'?: number;
    'mode'?: 'time' | 'date';
    'onColumnChange'?: (height: number, columnId: string) => void;
    'range'?: any[];
    'rangeKey'?: string;
    'updateDay'?: (value: number, fields: number) => void;
    'updateHeight'?: (height: number, columnId: string, needRevise?: boolean) => void;
  }
  interface TaroPickerViewColumnCore {}
  interface TaroPickerViewCore {}
  interface TaroProgressCore {
    'active'?: boolean;
    'activeColor'?: string;
    'backgroundColor'?: string;
    'borderRadius'?: number | string;
    'fontSize'?: number | string;
    'percent'?: number;
    'showInfo'?: boolean;
    'strokeWidth'?: number | string;
  }
  interface TaroPullToRefresh {
    'damping'?: number;
    'distanceToRefresh'?: number;
    'indicator'?: { activate: string; deactivate: string; release: string; finish: string; };
    'onRefresh'?: (event: CustomEvent<any>) => void;
    'prefixCls'?: string;
  }
  interface TaroRadioCore {
    'checked'?: boolean;
    'id'?: string;
    'name'?: string;
    'onRadiochange'?: (event: CustomEvent<any>) => void;
    'value'?: string;
  }
  interface TaroRadioGroupCore {
    'name'?: any;
    'onChange'?: (event: CustomEvent<any>) => void;
  }
  interface TaroRichTextCore {
    'nodes'?: Nodes;
  }
  interface TaroScrollViewCore {
    'lowerThreshold'?: number | string;
    'mpScrollIntoView'?: string;
    'mpScrollLeft'?: number | string;
    'mpScrollTop'?: number | string;
    'onScroll'?: (event: CustomEvent<any>) => void;
    'onScrolltolower'?: (event: CustomEvent<any>) => void;
    'onScrolltoupper'?: (event: CustomEvent<any>) => void;
    'scrollWithAnimation'?: boolean;
    'scrollX'?: boolean;
    'scrollY'?: boolean;
    'upperThreshold'?: number | string;
  }
  interface TaroSliderCore {
    'activeColor'?: string;
    'backgroundColor'?: string;
    'blockColor'?: string;
    'blockSize'?: number;
    'disabled'?: boolean;
    'max'?: number;
    'min'?: number;
    'name'?: string;
    'onChange'?: (event: CustomEvent<any>) => void;
    'onChanging'?: (event: CustomEvent<any>) => void;
    'showValue'?: boolean;
    'step'?: number;
    'value'?: number | null;
  }
  interface TaroSwiperCore {
    /**
    * 是否自动切换
    */
    'autoplay'?: boolean;
    /**
    * 是否采用衔接滑动
    */
    'circular'?: boolean;
    /**
    * 当前所在滑块的 index
    */
    'current'?: number;
    /**
    * 同时显示的滑块数量
    */
    'displayMultipleItems'?: number;
    /**
    * 滑动动画时长
    */
    'duration'?: number;
    /**
    * 给 prewviewImage API 使用，全屏显示 swiper
    */
    'full'?: boolean;
    /**
    * 当前选中的指示点颜色
    */
    'indicatorActiveColor'?: string;
    /**
    * 指示点颜色
    */
    'indicatorColor'?: string;
    /**
    * 是否显示面板指示点
    */
    'indicatorDots'?: boolean;
    /**
    * 自动切换时间间隔
    */
    'interval'?: number;
    'onAnimationfinish'?: (event: CustomEvent<any>) => void;
    'onChange'?: (event: CustomEvent<any>) => void;
    /**
    * 前边距，可用于露出前一项的一小部分，接受 px 值
    */
    'previousMargin'?: string;
    /**
    * 滑动方向是否为纵向
    */
    'vertical'?: boolean;
  }
  interface TaroSwiperItemCore {
    'itemId'?: string;
  }
  interface TaroSwitchCore {
    'checked'?: boolean;
    'color'?: string;
    'name'?: string;
    'onChange'?: (event: CustomEvent<any>) => void;
    'type'?: string;
  }
  interface TaroTabbar {
    'conf'?: Conf;
    'onLongpress'?: (event: CustomEvent<any>) => void;
  }
  interface TaroTextCore {
    'selectable'?: boolean;
  }
  interface TaroTextareaCore {
    'autoFocus'?: boolean;
    'disabled'?: boolean;
    'maxlength'?: number;
    'name'?: string;
    'onBlur'?: (event: CustomEvent<any>) => void;
    'onChange'?: (event: CustomEvent<any>) => void;
    'onFocus'?: (event: CustomEvent<any>) => void;
    'onInput'?: (event: CustomEvent<any>) => void;
    'placeholder'?: string;
    'value'?: string;
  }
  interface TaroVideoControl {
    'controls'?: boolean;
    'currentTime'?: number;
    'duration'?: number;
    'isPlaying'?: boolean;
    'pauseFunc'?: () => void;
    'playFunc'?: () => void;
    'seekFunc'?: (position: number) => void;
    'showPlayBtn'?: boolean;
    'showProgress'?: boolean;
  }
  interface TaroVideoCore {
    /**
    * 是否自动播放
    */
    'autoplay'?: boolean;
    /**
    * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
    */
    'controls'?: boolean;
    /**
    * 是否显示弹幕按钮
    */
    'danmuBtn'?: boolean;
    /**
    * 弹幕列表
    */
    'danmuList'?: [];
    /**
    * 指定视频时长
    */
    'duration'?: number;
    /**
    * 是否展示弹幕
    */
    'enableDanmu'?: boolean;
    /**
    * 是否开启播放手势，即双击切换播放/暂停
    */
    'enablePlayGesture'?: boolean;
    /**
    * 是否开启控制进度的手势
    */
    'enableProgressGesture'?: boolean;
    /**
    * 指定视频初始播放位置
    */
    'initialTime'?: number;
    /**
    * 是否循环播放
    */
    'loop'?: boolean;
    /**
    * 是否静音播放
    */
    'muted'?: boolean;
    /**
    * 当视频大小与 video 容器大小不一致时，视频的表现形式
    */
    'objectFit'?: 'contain' | 'fill' | 'cover';
    'onEnded'?: (event: CustomEvent<any>) => void;
    'onError'?: (event: CustomEvent<any>) => void;
    'onFullscreenchange'?: (event: CustomEvent<any>) => void;
    'onLoadedmetadata'?: (event: CustomEvent<any>) => void;
    'onPause'?: (event: CustomEvent<any>) => void;
    'onPlay'?: (event: CustomEvent<any>) => void;
    'onProgress'?: (event: CustomEvent<any>) => void;
    'onTimeupdate'?: (event: CustomEvent<any>) => void;
    /**
    * 视频封面的图片网络资源地址或云文件ID（2.3.0）。若 controls 属性值为 false 则设置 poster 无效
    */
    'poster'?: string;
    /**
    * 是否显示视频中间的播放按钮
    */
    'showCenterPlayBtn'?: boolean;
    /**
    * 是否显示全屏按钮
    */
    'showFullscreenBtn'?: boolean;
    /**
    * 是否显示静音按钮
    */
    'showMuteBtn'?: boolean;
    /**
    * 是否显示视频底部控制栏的播放按钮
    */
    'showPlayBtn'?: boolean;
    'showProgress'?: boolean;
    /**
    * 要播放视频的资源地址
    */
    'src'?: string;
    /**
    * 在非全屏模式下，是否开启亮度与音量调节手势
    */
    'vslideGesture'?: boolean;
    /**
    * 在全屏模式下，是否开启亮度与音量调节手势
    */
    'vslideGestureInFullscreen'?: boolean;
  }
  interface TaroVideoDanmu {
    'enable'?: boolean;
  }
  interface TaroViewCore {
    'hoverClass'?: string;
    'hoverStartTime'?: number;
    'hoverStayTime'?: number;
    'onLongpress'?: (event: CustomEvent<any>) => void;
  }
  interface TaroWebViewCore {
    'onError'?: (event: CustomEvent<any>) => void;
    'onLoad'?: (event: CustomEvent<any>) => void;
    'src'?: string;
  }

  interface IntrinsicElements {
    'taro-audio-core': TaroAudioCore;
    'taro-block-core': TaroBlockCore;
    'taro-button-core': TaroButtonCore;
    'taro-camera-core': TaroCameraCore;
    'taro-canvas-core': TaroCanvasCore;
    'taro-checkbox-core': TaroCheckboxCore;
    'taro-checkbox-group-core': TaroCheckboxGroupCore;
    'taro-cover-image-core': TaroCoverImageCore;
    'taro-cover-view-core': TaroCoverViewCore;
    'taro-form-core': TaroFormCore;
    'taro-icon-core': TaroIconCore;
    'taro-image-core': TaroImageCore;
    'taro-input-core': TaroInputCore;
    'taro-label-core': TaroLabelCore;
    'taro-moveable-area-core': TaroMoveableAreaCore;
    'taro-moveable-view-core': TaroMoveableViewCore;
    'taro-navigator-core': TaroNavigatorCore;
    'taro-open-data-core': TaroOpenDataCore;
    'taro-picker-core': TaroPickerCore;
    'taro-picker-group': TaroPickerGroup;
    'taro-picker-view-column-core': TaroPickerViewColumnCore;
    'taro-picker-view-core': TaroPickerViewCore;
    'taro-progress-core': TaroProgressCore;
    'taro-pull-to-refresh': TaroPullToRefresh;
    'taro-radio-core': TaroRadioCore;
    'taro-radio-group-core': TaroRadioGroupCore;
    'taro-rich-text-core': TaroRichTextCore;
    'taro-scroll-view-core': TaroScrollViewCore;
    'taro-slider-core': TaroSliderCore;
    'taro-swiper-core': TaroSwiperCore;
    'taro-swiper-item-core': TaroSwiperItemCore;
    'taro-switch-core': TaroSwitchCore;
    'taro-tabbar': TaroTabbar;
    'taro-text-core': TaroTextCore;
    'taro-textarea-core': TaroTextareaCore;
    'taro-video-control': TaroVideoControl;
    'taro-video-core': TaroVideoCore;
    'taro-video-danmu': TaroVideoDanmu;
    'taro-view-core': TaroViewCore;
    'taro-web-view-core': TaroWebViewCore;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'taro-audio-core': LocalJSX.TaroAudioCore & JSXBase.HTMLAttributes<HTMLTaroAudioCoreElement>;
      'taro-block-core': LocalJSX.TaroBlockCore & JSXBase.HTMLAttributes<HTMLTaroBlockCoreElement>;
      'taro-button-core': LocalJSX.TaroButtonCore & JSXBase.HTMLAttributes<HTMLTaroButtonCoreElement>;
      'taro-camera-core': LocalJSX.TaroCameraCore & JSXBase.HTMLAttributes<HTMLTaroCameraCoreElement>;
      'taro-canvas-core': LocalJSX.TaroCanvasCore & JSXBase.HTMLAttributes<HTMLTaroCanvasCoreElement>;
      'taro-checkbox-core': LocalJSX.TaroCheckboxCore & JSXBase.HTMLAttributes<HTMLTaroCheckboxCoreElement>;
      'taro-checkbox-group-core': LocalJSX.TaroCheckboxGroupCore & JSXBase.HTMLAttributes<HTMLTaroCheckboxGroupCoreElement>;
      'taro-cover-image-core': LocalJSX.TaroCoverImageCore & JSXBase.HTMLAttributes<HTMLTaroCoverImageCoreElement>;
      'taro-cover-view-core': LocalJSX.TaroCoverViewCore & JSXBase.HTMLAttributes<HTMLTaroCoverViewCoreElement>;
      'taro-form-core': LocalJSX.TaroFormCore & JSXBase.HTMLAttributes<HTMLTaroFormCoreElement>;
      'taro-icon-core': LocalJSX.TaroIconCore & JSXBase.HTMLAttributes<HTMLTaroIconCoreElement>;
      'taro-image-core': LocalJSX.TaroImageCore & JSXBase.HTMLAttributes<HTMLTaroImageCoreElement>;
      'taro-input-core': LocalJSX.TaroInputCore & JSXBase.HTMLAttributes<HTMLTaroInputCoreElement>;
      'taro-label-core': LocalJSX.TaroLabelCore & JSXBase.HTMLAttributes<HTMLTaroLabelCoreElement>;
      'taro-moveable-area-core': LocalJSX.TaroMoveableAreaCore & JSXBase.HTMLAttributes<HTMLTaroMoveableAreaCoreElement>;
      'taro-moveable-view-core': LocalJSX.TaroMoveableViewCore & JSXBase.HTMLAttributes<HTMLTaroMoveableViewCoreElement>;
      'taro-navigator-core': LocalJSX.TaroNavigatorCore & JSXBase.HTMLAttributes<HTMLTaroNavigatorCoreElement>;
      'taro-open-data-core': LocalJSX.TaroOpenDataCore & JSXBase.HTMLAttributes<HTMLTaroOpenDataCoreElement>;
      'taro-picker-core': LocalJSX.TaroPickerCore & JSXBase.HTMLAttributes<HTMLTaroPickerCoreElement>;
      'taro-picker-group': LocalJSX.TaroPickerGroup & JSXBase.HTMLAttributes<HTMLTaroPickerGroupElement>;
      'taro-picker-view-column-core': LocalJSX.TaroPickerViewColumnCore & JSXBase.HTMLAttributes<HTMLTaroPickerViewColumnCoreElement>;
      'taro-picker-view-core': LocalJSX.TaroPickerViewCore & JSXBase.HTMLAttributes<HTMLTaroPickerViewCoreElement>;
      'taro-progress-core': LocalJSX.TaroProgressCore & JSXBase.HTMLAttributes<HTMLTaroProgressCoreElement>;
      'taro-pull-to-refresh': LocalJSX.TaroPullToRefresh & JSXBase.HTMLAttributes<HTMLTaroPullToRefreshElement>;
      'taro-radio-core': LocalJSX.TaroRadioCore & JSXBase.HTMLAttributes<HTMLTaroRadioCoreElement>;
      'taro-radio-group-core': LocalJSX.TaroRadioGroupCore & JSXBase.HTMLAttributes<HTMLTaroRadioGroupCoreElement>;
      'taro-rich-text-core': LocalJSX.TaroRichTextCore & JSXBase.HTMLAttributes<HTMLTaroRichTextCoreElement>;
      'taro-scroll-view-core': LocalJSX.TaroScrollViewCore & JSXBase.HTMLAttributes<HTMLTaroScrollViewCoreElement>;
      'taro-slider-core': LocalJSX.TaroSliderCore & JSXBase.HTMLAttributes<HTMLTaroSliderCoreElement>;
      'taro-swiper-core': LocalJSX.TaroSwiperCore & JSXBase.HTMLAttributes<HTMLTaroSwiperCoreElement>;
      'taro-swiper-item-core': LocalJSX.TaroSwiperItemCore & JSXBase.HTMLAttributes<HTMLTaroSwiperItemCoreElement>;
      'taro-switch-core': LocalJSX.TaroSwitchCore & JSXBase.HTMLAttributes<HTMLTaroSwitchCoreElement>;
      'taro-tabbar': LocalJSX.TaroTabbar & JSXBase.HTMLAttributes<HTMLTaroTabbarElement>;
      'taro-text-core': LocalJSX.TaroTextCore & JSXBase.HTMLAttributes<HTMLTaroTextCoreElement>;
      'taro-textarea-core': LocalJSX.TaroTextareaCore & JSXBase.HTMLAttributes<HTMLTaroTextareaCoreElement>;
      'taro-video-control': LocalJSX.TaroVideoControl & JSXBase.HTMLAttributes<HTMLTaroVideoControlElement>;
      'taro-video-core': LocalJSX.TaroVideoCore & JSXBase.HTMLAttributes<HTMLTaroVideoCoreElement>;
      'taro-video-danmu': LocalJSX.TaroVideoDanmu & JSXBase.HTMLAttributes<HTMLTaroVideoDanmuElement>;
      'taro-view-core': LocalJSX.TaroViewCore & JSXBase.HTMLAttributes<HTMLTaroViewCoreElement>;
      'taro-web-view-core': LocalJSX.TaroWebViewCore & JSXBase.HTMLAttributes<HTMLTaroWebViewCoreElement>;
    }
  }
}


