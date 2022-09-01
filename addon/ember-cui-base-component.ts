/**
 * @module EmberCuiBaseComponent
 * @class EmberCuiBaseComponent
 */
/// <reference types="bootstrap" />
// import '@glint/environment-ember-loose';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
// import { Popover } from 'bootstrap';
import { get } from '@ember/object'
import { htmlSafe } from '@ember/template';
import { SafeString } from '@ember/template/-private/handlebars';


export interface EmberCuiBaseComponentArgs {
    /**
     * The model to pass into the component
     * @argument model
     * @type unknown
     * @public
     */
    model?: unknown;

    /**
     * This is the primary class that the rendered classes are derived from.
     * @argument primaryClass
     * @type string | undefined
     * @private
     */
    primaryClass?: string;

    /**
     * Some components have an alternate appearance and need separate classes rendered for them when that alternate appearance is rendered.
     * This allows you to provide custom classes for that 'alt' appearance.
     * @argument altClass
     * @type {string}
     */
    altClass?: string;

    /**
     * This is the default DOM tag the component will use to contain itself.
     * @argument defaultTag
     * @type {string}
     * @hide
     */
    defaultTag?: string;

    /**
     * The tag the component should be rendered with.
     * @argument tagName
     * @type {string}
     * @public
     */
    tagName?: string;

    /**
     * The function to be called when a click is triggered.
     * This is only used if the component is configured to use it.
     * @argument clickAction
     * @type Function
     */
    clickAction?: Function;

    
    /**
     * The internal name of the component.
     * @argument componentName
     * @type string | undefined
     * @hide
     */
    componentName?: string | undefined;
    
    /**
     * This is the link to the related the spec
     * @argument specificationReference
     * @type string | undefined
     * @hide
     */
    specificationReference?: string | undefined;

    /**
     * Custom classes the component instance should use when being rendered
     * @property class
     * @argument class
     * @type string
     */
    class?: string;


    /**
     * A string value representing the level of hover emboss to implement. Adds a degree of drop-shadow to the element on-hover.
     * 
     * @property hoverEmboss
     * @argument hoverEmboss
     * @type string
     * @default false
     * @optional true
     */
    hoverEmboss?: string;

    /**
     * A string value representing the level of hover engrave to implement. Adds a degree of inner drop-shadow to the element on-hover.
     * 
     * @property hoverEngrave
     * @argument hoverEngrave
     * @type string
     * @default false
     * @optional true
     */
    hoverEngrave?: string;

    /**
     * A string value representing the level of opacity to apply to the element.
     * 
     * ```hbs
     * example value = "10" -> "10%"
     * ```
     * @property opacity
     * @argument opacity
     * @type string
     * @default false
     */
    opacity?: string;

    /**
     * A string value representing the level of rotation to apply to the element.
     * 
     * ```hbs
     * example value = "30" -> "30 deg"
     * ```
     * **Possible Values:** `30, 45, 60, 90, 135, 180, 225, 270, 315`
     * @property rotate
     * @argument rotate
     * @type string
     * @default false
     * @optional true
     * @example "10"
     */
    rotate?: string;


    /**
     * A string value representing the text content of the tooltip to apply to the element on hover.
     * 
     * @property tooltipContent
     * @argument tooltipContent
     * @type Promise<string> | string
     * @default false
     * @optional true
     */
    tooltipContent?: Promise<string> | string | SafeString;

    /**
     * A string value representing the positioning of the tooltip in relation to the element on hover.
     * 
     * 
     * **Possible Values:** `top, right, bottom, left`
     * @property tooltipPosition
     * @argument tooltipPosition
     * @type string
     * @default false
     * @optional true
     */
    tooltipPosition?: string;

    /**
     * A string value representing the size (width) of the tooltip added to the element on hover.
     * 
     * 
     * **Possible Values:** `small, medium, large, xlarge, fitted`
     * @property tooltipSize
     * @argument tooltipSize
     * @type string
     * @default false
     * @optional true
     */
    tooltipSize?: string;


    /**
     * @property popover
     * @argument popover
     * @private
     * @hide
     */
    popover?: any | undefined;

    /**
     * A string value representing the contents of the popover applied to the element.
     * 
     * 
     * <small>["Popover"](https://getbootstrap.com/docs/5.1/components/popovers/) is a general component used in conjunction with others, provided by Bootstrap</small>
     * @property popoverContent
     * @argument popoverContent
     * @type Promise<string> | string
     * @default false
     * @optional true
     */
    popoverContent?: Promise<string> | string | SafeString;

    /**
     * Delay showing and hiding the popover (ms).
     * 
     * 
     * <small>["Popover"](https://getbootstrap.com/docs/5.1/components/popovers/) is a general component used in conjunction with others, provided by Bootstrap</small>
     * @property popoverDelay
     * @argument popoverDelay
     * @type number | any
     * @default false
     * @optional true
     */
    popoverDelay?: number | any;

    /**
     * How to position the popover.
     * 
     * 
     * <small>["Popover"](https://getbootstrap.com/docs/5.1/components/popovers/) is a general component used in conjunction with others, provided by Bootstrap</small>
     * 
     * **Possible Values:** `auto | top | bottom | left | right`
     * 
     * When auto is specified, it will dynamically reorient the popover.
     * @property popoverPlacement
     * @argument popoverPlacement
     * @type string
     * @default false
     * @optional true
     */
    popoverPlacement?: string;

    /**
     * Base HTML to use when creating the popover.
     * 
     * 
     * <small>["Popover"](https://getbootstrap.com/docs/5.1/components/popovers/) is a general component used in conjunction with others, provided by Bootstrap</small>
     * 
     * **Default value:**
     * ```hbs
     * <div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>
     * ```
     * @property popoverTemplate
     * @argument popoverTemplate
     * @type string
     * @default false
     * @optional true
     */
    popoverTemplate?: string;

    /**
     * Default title value if title attribute isn't present..
     * 
     * 
     * <small>["Popover"](https://getbootstrap.com/docs/5.1/components/popovers/) is a general component used in conjunction with others, provided by Bootstrap</small>
     * 
     * @property popoverTitle
     * @argument popoverTitle
     * @type string
     * @default false
     * @optional true
     */
    popoverTitle?: string;

    /**
     * How popover is triggered
     * 
     * 
     * <small>["Popover"](https://getbootstrap.com/docs/5.1/components/popovers/) is a general component used in conjunction with others, provided by Bootstrap</small>
     * 
     * **Possible Values:** `click | hover | focus | manual`
     * @property popoverTrigger
     * @argument popoverTrigger
     * @type string | 'click'
     * @default false
     * @optional true
     */
    popoverTrigger?: string | 'click';

    /**
     * If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added.
     * 
     * 
     * <small>["Popover"](https://getbootstrap.com/docs/5.1/components/popovers/) is a general component used in conjunction with others, provided by Bootstrap</small>
     * 
     * @property popoverSelector
     * @argument popoverSelector
     * @type string
     * @default false
     * @optional true
     */
    popoverSelector?: string;

    /**
     * Appends the popover to a specific element.
     * 
     * 
     * <small>["Popover"](https://getbootstrap.com/docs/5.1/components/popovers/) is a general component used in conjunction with others, provided by Bootstrap</small>
     * 
     * @property popoverContainer
     * @argument popoverContainer
     * @type string | undefined
     * @default false
     * @optional true
     */
    popoverContainer?: string | undefined;

    /**
     * @method validateAttribute
     * @hide
     */
    validateAttribute?: any | undefined;
    /**
     * @method extendedSetup
     * @hide
     */
    extendedSetup?: any | undefined;
    /**
     * @method setupTooltip
     * @hide
     */
    setupTooltip?: any | undefined;
    /**
     * @method setupPopover
     * @hide
     */
    setupPopover?: any | undefined;
    /**
     * @method generateGenericClassStringFromArguments
     * @hide
     */
    generateGenericClassStringFromArguments?: any | undefined;
    /**
     * @method generateClassStringFromArguments
     * @hide
     */
    generateClassStringFromArguments?: any | undefined;

    /**
     * @argument args
     * @hide
     */
    // args?: unknown;
    /**
     * @argument debugName
     * @private
     */
    debugName?: string;
    /**
     * @method didInsertElement
     * @hide
     */
    didInsertElement?: any;
    /**
     * @property didUpdate
     * @hide
     */
    didUpdate?: any;
    /**
     * @property bounds
     * @hide
     */
    bounds?: any;
    // /**
    //  * @argument element
    //  * @hide
    //  */
    // element?: Element;
    /**
     * @method isDestroying
     * @hide
     */
    isDestroying?: any;
    /**
     * @property isDestroyed
     * @hide
     */
    isDestroyed?: any;
    /**
     * @method willDestroy
     * @hide
     */
    willDestroy?: any;

    /**
     * The value to be used in the name property for accessibility purposes
     * @argument buttonAccessibilityName
     * @type string
     */
    buttonAccessibilityName?: string;

    style?: string;
}


export interface EmberCuiBaseComponentSignature {
    Element: HTMLElement;
    Args: EmberCuiBaseComponentArgs;
    Blocks: {
        default: [elementId: string]
    }
}

/**
 * The base component for all Ember-CUI components
 * 
 * @class EmberCuiBaseComponent
 * @main EmberCuiBaseComponent
 * @extends Ember.Component
 * @interface EmberCuiBaseComponentArgs
 * @export default
 * @public
 */
export default class EmberCuiBaseComponent<Signature extends EmberCuiBaseComponentSignature> extends Component<Signature> {
    declare primaryClass: string;
    declare altClass: string;
    defaultTag: string;
    componentName: string | undefined;
    specificationReference: string | undefined;
    popover: any | undefined;
    // declare popoverContent: Promise<string> | string;
    declare popoverDelay: number | any;
    declare popoverPlacement: string;
    declare popoverTemplate: string;
    declare popoverTitle: string;
    declare popoverTrigger: string | 'click';
    declare popoverSelector: string;
    declare popoverContainer: string | undefined;
    model: any;
    // declare tooltipContent: Promise<string> | string;
    declare tooltipSize: string;
    declare buttonAccessibilityName: string;

    /* istanbul ignore next */
    constructor(owner: any, args: EmberCuiBaseComponentArgs) {
        super(owner, args);
        this.defaultTag = 'div';
    }

    /**
     * Used by the component's template to render the class string
     * @accessor class()
     * @type string
     * @private
     */
    get class(): string {
        return this.generateClassStringFromArguments([], (this.args as EmberCuiBaseComponentArgs).class || '').join(
            ' '
        );
    }


    /**
     * Used by the component's template to determine the DOM tag to use when rendering
     * @accessor tagName()
     * @type string
     * @private
     */
    get tagName(): string {
        let args:EmberCuiBaseComponentArgs = this.args;

        return args.tagName ? args.tagName : this.defaultTag;
    }

    /**
     * Checks the provided value of a given argument to ensure it is a valid and handled value.
     * 
     * @method validateAttribute
     * @param {string} keyName - The property name to validate
     * @param {any} value - The value to check
     * @param {any[]} _possibleOptions - The values allowed to be validated against
     * @return {Promise} any - An awaitable promise
     */
    validateAttribute(
        keyName: string,
        value: any,
        _possibleOptions: any[]
    ): any {
        if (value && !_possibleOptions.includes(value)) {
            /* istanbul ignore next */
            let errorText = `${
                this.componentName
            } error: "${value}" isn't a value (or values) we're expecting for "${keyName}". The possible options are: "${_possibleOptions.join(
                ', '
            )}". Ref: ${this.specificationReference}`;

            // console.error(
            //     errorText    
            // );

            throw new Error(errorText);
        }
    }


    /**
     * Used by the component's class() accessor when determining whether or not to include the effect when rendering the class
     * @accessor hoverEmboss
     * @type string
     * @private
     */
    get hoverEmboss(): string {
        let args:EmberCuiBaseComponentArgs = this.args;

        if (args.hoverEmboss) {
            this.validateAttribute('hoverEmboss', args.hoverEmboss, [
                'small',
                'medium',
                'large',
            ]);
        }
        return args.hoverEmboss
            ? `hover-emboss--${args.hoverEmboss}`
            : '';
    }

    /**
     * Used by the component's class() accessor when determining whether or not to include the effect when rendering the class
     * @accessor hoverEngrave
     * @type string
     * @private
     */
    get hoverEngrave(): string {
        let args:EmberCuiBaseComponentArgs = this.args;

        if (args.hoverEngrave) {
            this.validateAttribute('hoverEngrave', args.hoverEngrave, [
                'small',
                'medium',
                'large',
            ]);
        }
        return args.hoverEngrave
            ? `hover-engrave--${args.hoverEngrave}`
            : '';
    }


    /**
     * Used by the component's class() accessor when determining whether or not to include the effect when rendering the class
     * @accessor opacity
     * @type string
     * @private
     */
    get opacity(): string {
        let args:EmberCuiBaseComponentArgs = this.args;

        if (args.opacity) {
            this.validateAttribute('opacity', args.opacity, [
                '10',
                '20',
                '30',
                '40',
                '50',
                '60',
                '70',
                '80',
                '90',
            ]);
        }
        return args.opacity ? `opacity-${args.opacity}` : '';
    }

    /**
     * Used by the component's class() accessor when determining whether or not to include the effect when rendering the class
     * @accessor rotate
     * @type string
     * @private
     */
    get rotate(): string {
        let args:EmberCuiBaseComponentArgs = this.args;

        if (args.rotate) {
            this.validateAttribute('rotate', args.rotate, [
                '30',
                '45',
                '60',
                '90',
                '135',
                '180',
                '225',
                '270',
                '315',
            ]);
        }
        return args.rotate ? `rotate-${args.rotate}` : '';
    }

    /* istanbul ignore next */
    /**
     * Used by the component's class() accessor when determining whether or not to include the effect when rendering the class
     * @accessor tooltipPosition
     * @type string
     * @private
     */
    get tooltipPosition(): string {
        let args = this.args as EmberCuiBaseComponentArgs;
        return args.tooltipPosition !== undefined && args.tooltipPosition !== null ? args.tooltipPosition : 'up';
    }

    isPromise(p:any) {
        if (typeof p === 'object' && typeof p.then === 'function') {
            return true;
        }
        
        return false;
    }


    get tooltipContent(): string {
        let retVal: string = '';

        let args = this.args as EmberCuiBaseComponentArgs;

        if( args.tooltipContent && this.isPromise(args.tooltipContent) ){
            (args.tooltipContent as Promise<string>).then((result:string)=>retVal = result)     
        }else if( args.tooltipContent && typeof args.tooltipContent === "string" ){
            retVal = args.tooltipContent;
        }

        return retVal;
    }


    get popoverContent(): SafeString {
        let retVal: string = '';

        let args = this.args as EmberCuiBaseComponentArgs;

        if( args.popoverContent && this.isPromise(args.popoverContent) ){
            (args.popoverContent as Promise<string>).then((result:string)=>retVal = result)     
        }else if( args.popoverContent && typeof args.popoverContent === "string" ){
            retVal = args.popoverContent;
        }

        return htmlSafe(retVal);
    }

    get style(): SafeString {
        return htmlSafe((this.args as EmberCuiBaseComponentArgs).style || '')
    }

    /* istanbul ignore next */
    /**
     * Used by the component's template to provide the DOM element an ID value
     * @accessor elementId
     * @type {string}
     */
    get elementId(): string {
        return guidFor(this) as string;
    }


    /**
     * Called once the component is rendered in order to perform any post-rendering setup unique to the class of component
     * 
     * **NOTE:** This capability is provided by [ember-render-modifiers](https://github.com/emberjs/ember-render-modifiers)
     * 
     * ```hbs
     * {{did-update this.extendedSetup @active}}
     * {{did-insert this.extendedSetup}}
     * ```
     * @method extendedSetup
     * @param {DOMElement} element - The component's DOM element
     * @return {void}
     */
    @action
    extendedSetup(element?: Element): void {
        if( !element ) { return }
        let args:EmberCuiBaseComponentArgs = this.args;

        if (args.tooltipContent) {
            this.setupTooltip(element);
        }

        if (args.popoverContent) {
            this.setupPopover(element);
        }
    }



    /**
     * Called by `extendedSetup` to setup the tooltip functionality post render IF it's determined by the provided component arguments that it's needed and supported
     * 
     * @method setupTooltip
     * @param {DOMElement} element - The component's DOM element
     * @return {Promise} any - An awaitable promise
     * @private
     */
    async setupTooltip(element?: Element): Promise<any> {
        if( !element ) { return }
        let content: string;
        let args: EmberCuiBaseComponentArgs = this.args;

        if(typeof args.tooltipContent === 'object' && this.isPromise(args.tooltipContent)){
            content = await args.tooltipContent as string;
        }else{
            content = args.tooltipContent as string;
        }
        element.setAttribute('data-balloon', content as string);

        if (args.tooltipPosition !== 'up') {
            this.validateAttribute(
                'tooltipPosition',
                args.tooltipPosition,
                ['up', 'down', 'left', 'right']
            );
        }
        element.setAttribute('data-balloon-pos', this.tooltipPosition);

        if (args.tooltipSize) {
            this.validateAttribute('tooltipSize', args.tooltipSize, [
                'small',
                'medium',
                'large',
                'xlarge',
                'fit',
            ]);
            element.setAttribute('data-balloon-length', args.tooltipSize);
        }

        if (content.indexOf('&#10;') > -1 || content.indexOf('\n') > -1) {
            element.setAttribute('data-balloon-break', '');
        }
    }


    /**
     * Called by `extendedSetup` to setup the Bootstrap popover functionality post render IF it's determined by the provided component arguments that it's needed and supported
     * 
     * @method setupPopover
     * @param {DOMElement} element - The component's DOM element
     * @return {Promise} any - An awaitable promise
     * @private
     */
    async setupPopover(element: Element): Promise<any> {
        if( this.popover ){
            this.popover.dispose()
        }

        let content: string;
        let args:EmberCuiBaseComponentArgs = this.args;

        if(this.isPromise(args.popoverContent)){
            content = await args.popoverContent as string;
        }else{
            content = args.popoverContent as string;
        }
        
        let popOptions:any = {
            /// ..... or should it be poptions... lol
            html: content.match(/<.+?>/g) !== null,
            content: content,
        };

        // @ts-ignore
        const myDefaultAllowList = bootstrap.Tooltip.Default.allowList
        if( popOptions.html ){
            myDefaultAllowList.dl = ['style']
            myDefaultAllowList.dt = ['style']
            myDefaultAllowList.dd = ['style']
        }

        /* istanbul ignore next */
        if (args.popoverContainer) {
            if( args.popoverContainer === "self" )
            {
                popOptions.container = element;
            }
        }

        /* istanbul ignore next */
        if (args.popoverTemplate) {
            popOptions.template = args.popoverTemplate;
        }

        /* istanbul ignore next */
        if (args.popoverDelay) {
            popOptions.delay = args.popoverDelay;
        }

        /* istanbul ignore next */
        if (args.popoverPlacement) {
            popOptions.placement = args.popoverPlacement;
        }

        /* istanbul ignore next */
        if (args.popoverTitle) {
            popOptions.title = args.popoverTitle;
        }

        /* istanbul ignore next */
        if (args.popoverTrigger) {
            popOptions.trigger = args.popoverTrigger;
        }

        /* istanbul ignore next */
        if (args.popoverSelector) {
            popOptions.selector = args.popoverSelector;
        }

        element.setAttribute('data-bs-toggle', 'popover');
        element.setAttribute('data-bs-content', content);
        element.setAttribute('data-bs-html', popOptions.html);
        // @ts-ignore
        this.popover = new bootstrap.Popover(element, popOptions);
    }


    /**
     * Called internally by each component to generate a list of classes building off the `primaryClass` property value
     * 
     * @method generateClassStringFromArguments
     * @param {any[]} args - ...not used(??)
     * @param {string} argClasses - The classes to consider when constructing the class string
     * @return {string[]} array - An array of strings that can then be joined and expressed
     * @private
     */
    generateClassStringFromArguments(
        args: string[],
        argClasses: string,
        includePrimaryClass: boolean = true
    ): string[] {
        let localArgClasses: string[] = [];
        if(argClasses !== undefined && argClasses !== null){
            localArgClasses = argClasses.split(' ');
        } 
        let classArr: string[] = localArgClasses.length > 0 ? localArgClasses : [];

        if( includePrimaryClass ){
            classArr.push(this.primaryClass);
        }

        args.forEach((attribute: string) => {
            let attrVal = get(this, attribute);
            if (attrVal) {
                classArr.push(`${this.primaryClass}--${attrVal}`);
            }
        });

        classArr = classArr.concat(
            this.generateGenericClassStringFromArguments([
                'hoverEmboss',
                'hoverEngrave',
                'opacity',
                'rotate',
            ])
        );

        return classArr;
    }

    /* TODO: Test with ember-cui-loader */
    /**
     * Called internally by each component to generate a list of classes, to be used in the alternate render form of the component, building off the `primaryClass` property value
     * 
     * @method generateAltClassStringFromArguments
     * @param {any[]} args - ...not used(??)
     * @param {string} argClasses - The classes to consider when constructing the class string
     * @return {string[]} array - An array of strings that can then be joined and expressed
     * @private
     */
    generateAltClassStringFromArguments(
        args: string[],
        argClasses: string
    ): string[] {
        let localArgClasses:string[] = [];
        if(argClasses !== undefined && argClasses !== null){
            localArgClasses = argClasses.split(' ');
        } 
        let classArr: string[] = localArgClasses.length > 0 ? localArgClasses : [];

        classArr.push(this.altClass);

        args.forEach((attribute: string) => {
            let attrVal = get(this, attribute);
            if (attrVal) {
                classArr.push(`${this.altClass}--${attrVal}`);
            }
        });

        classArr = classArr.concat(
            this.generateGenericClassStringFromArguments([
                'hoverEmboss',
                'hoverEngrave',
                'opacity',
                'rotate',
            ])
        );

        return classArr as string[];
    }


    /* TODO: Test with ember-cui-accordion */
    /**
     * Called internally by each component to generate a list of generic class based on the classes being passed in
     * 
     * @method generateGenericClassStringFromArguments
     * @param {any[]} args - ...not used(??)
     * @return {string[]} array - An array of strings that can then be joined and expressed
     * @private
     */
    generateGenericClassStringFromArguments(args: string[]): string[] {
        let classArr: string[] = [];

        args.forEach((attribute: string) => {
            let attrVal = get(this, attribute);
            if (attrVal) {
                classArr.push(`${attrVal}`);
            }
        });

        return classArr;
    }

    /**
     * Used internally to handle the click internally and additionally call the handler passed into the `@clickAction` param 
     *
     * @accessor clickAction()
     * @type any
     * @readOnly
     * @private
     * @return Function
     */
    get clickAction(): Function {
        let args:EmberCuiBaseComponentArgs = this.args;

        return args.clickAction || function () {};
    }

    /* TODO: Test with ember-cui-button */
    /**
     * The click action used in the template of each component
     * @method clickHandler
     * @param {MouseEvent} event 
     */
    @action
    clickHandler(event: MouseEvent | Event): void {
        this.clickAction(event);
    }

    willDestroy(){
        if( this.popover ){
            this.popover.dispose()
        }
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        EmberCuiBaseComponent: typeof EmberCuiBaseComponent;
    }
}