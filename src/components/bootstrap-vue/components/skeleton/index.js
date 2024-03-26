import { pluginFactory } from '../../utils/plugins';
import { BSkeleton } from './skeleton';
import { BSkeletonImg } from './skeleton-img';
import { BSkeletonTable } from './skeleton-table';
import { BSkeletonWrapper } from './skeleton-wrapper';

const SkeletonPlugin = /*#__PURE__*/ pluginFactory({
    components: {
        BSkeleton,
        BSkeletonImg,
        BSkeletonTable,
        BSkeletonWrapper
    }
});

export { SkeletonPlugin, BSkeleton, BSkeletonImg, BSkeletonTable, BSkeletonWrapper };
