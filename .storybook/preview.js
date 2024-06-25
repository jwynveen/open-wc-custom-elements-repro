import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json' with { type: "json" };
setCustomElementsManifest(customElements);
