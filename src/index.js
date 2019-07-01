const { registerBlockType } = wp.blocks;

import { InnerBlocks } from '@wordpress/editor';
 
registerBlockType( 'blind-mystics/block-group', {
    title: 'Block Group',
    description: 'Group a number of blocks together.',
    icon: 'smiley',
    category: 'layout',
    edit: () => <div><InnerBlocks /></div>,
    save: () => <div class="wp-block-group"><InnerBlocks.Content /></div>,
});