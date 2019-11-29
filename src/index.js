const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.editor;
const { ColorPalette, PanelBody, TextControl } = wp.components;
const el = wp.element.createElement;

const block_group_icon = el('svg', { width: 20, height: 20, viewBox: '0 0 512 512' },
  el('path', { d: "M 64 0 C 28.544 0 0 28.544 0 64 L 0 448 C 0 483.456 28.544 512 64 512 L 448 512 C 483.456 512 512 483.456 512 448 L 512 64 C 512 28.544 483.456 0 448 0 L 64 0 z M 46 46 L 466 46 L 466 466 L 46 466 L 46 46 z M 106.14258 99.998047 A 10.001 10.001 0 1 0 106.14258 119.99805 L 405.85742 119.99805 A 10.001 10.001 0 1 0 405.85742 99.998047 L 106.14258 99.998047 z M 124 152 C 108.488 152 96 164.488 96 180 L 96 324 C 96 339.512 108.488 352 124 352 L 388 352 C 403.512 352 416 339.512 416 324 L 416 180 C 416 164.488 403.512 152 388 152 L 124 152 z M 106.14258 391.99805 A 10.001 10.001 0 1 0 106.14258 411.99805 L 405.85742 411.99805 A 10.001 10.001 0 1 0 405.85742 391.99805 L 106.14258 391.99805 z " } )
);

const palette = [ {name: 'black', color: '#000'}, {name: 'white', color: '#FFF'} ];
 
registerBlockType( 'blind-mystics/block-group', {
    title: 'Block Group',
    description: 'Group a number of blocks together.',
    icon: block_group_icon,
    category: 'layout',
    attributes: {
      backgroundColor: {
        type: 'string',
        default: 'none',
      }
    },
    
    edit: ( props ) => {
      return (
        <div>
          {
            <InspectorControls>
              <PanelBody title={ 'Background Color' }>
                <ColorPalette
                  colors={ palette }
                  value={ props.attributes.backgroundColor }
                  onChange={ function (color) {
                    props.setAttributes({ backgroundColor: color });
                  } }
                />
              </PanelBody>
            </InspectorControls>
          }
          <hr/>
          <InnerBlocks />
          <hr/>
        </div>
      );
    },

    save: ( props ) => {
      var blockStyle = {
        backgroundColor: props.attributes.backgroundColor
      };

      return (
        <div style={ blockStyle } className="wp-block-group">
          <InnerBlocks.Content />
        </div>
      );
    },
    deprecated: [
      {
        save: () => <div className="wp-block-group"><InnerBlocks.Content /></div>
      }
    ]
});

registerBlockType( 'blind-mystics/block-group-linked', {
  title: 'Block Group Linked',
  description: 'Group a number of blocks together as one link.',
  icon: block_group_icon,
  category: 'layout',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: 'none'
    },
    linkAddress: {
      type: 'string',
      default: ''
    }
  },
  
  edit: ( props ) => {
    return (
      <div>
        {
          <InspectorControls>
            <PanelBody title={ 'Background Color' }>
              <ColorPalette
                colors={ palette }
                value={ props.attributes.backgroundColor }
                onChange={ function (color) {
                  props.setAttributes({ backgroundColor: color });
                } }
              />
            </PanelBody>
            <PanelBody title={ 'Link Address' }>
              <TextControl
                  onChange={ function (url) {
                    props.setAttributes({ linkAddress: url });
                  } }
                  value={ props.attributes.linkAddress }
              />               
            </PanelBody>
          </InspectorControls>
        }
        <hr/>
        <InnerBlocks />
        <hr/>
      </div>
    );
  },

  save: ( props ) => {
    var blockStyle = {
      backgroundColor: props.attributes.backgroundColor
    };

    return (
      <a href={ props.attributes.linkAddress } style={ blockStyle } className="wp-block-group wp-block-group-link">
          <InnerBlocks.Content />
      </a>
    );
  }
});