import {
    extend,
    mergeData,
    NAME_SKELETON,
    PROP_TYPE_STRING,
    makePropsConfigurable,
    makeProp
} from '../utils';
import './skeleton.scss';
// --- Props ---
export const props = makePropsConfigurable(
    {
        animation: makeProp(PROP_TYPE_STRING, 'wave'),
        height: makeProp(PROP_TYPE_STRING),
        size: makeProp(PROP_TYPE_STRING),
        type: makeProp(PROP_TYPE_STRING, 'text'),
        variant: makeProp(PROP_TYPE_STRING),
        width: makeProp(PROP_TYPE_STRING)
    },
    NAME_SKELETON
);

// --- Main component ---

// @vue/component
export const BSkeleton = /*#__PURE__*/ extend({
    name: NAME_SKELETON,
    functional: true,
    props,
    render(h, { data, props }) {
        const { size, animation, variant } = props;

        return h(
            'div',
            mergeData(data, {
                staticClass: 'b-skeleton',
                style: {
                    width: size || props.width,
                    height: size || props.height
                },
                class: {
                    [`b-skeleton-${props.type}`]: true,
                    [`b-skeleton-animate-${animation}`]: animation,
                    [`bg-${variant}`]: variant
                }
            })
        );
    }
});
