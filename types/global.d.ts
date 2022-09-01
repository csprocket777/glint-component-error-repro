// Types for compiled templates
// declare module 'ember-cui-alt/templates/*' {
//   import { TemplateFactory } from 'htmlbars-inline-precompile';
//   const tmpl: TemplateFactory;
//   export default tmpl;
// }

import '@glint/environment-ember-loose';
import { ComponentLike, HelperLike, ModifierLike } from '@glint/template';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'did-update': ModifierLike<{
      Args: {
        Named: {
          [argName: string]: unknown;
        };
        Positional: unknown[];
      };
      Element: Element;
    }>;

    'did-insert': ModifierLike<{
      Args: {
        Named: {
          [argName: string]: unknown;
        };
        Positional: unknown[];
      };
      Element: Element;
    }>;

    element: HelperLike<{
      Args: { 
        Positional: [
          string
        ] 
      };
      Return: ComponentLike<{
        Element: HTMLElement;
        Blocks: { default:[] }
      }>;
    }>;
  }
}