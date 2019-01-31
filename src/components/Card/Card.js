/**
 * Components: Card.
 *
 * @since 3.20.0
 */
import React from 'react';

const Card = ({
  show,
  title,
  icons,
  children
}) => (
  <figure className={'wl-card-' + show}>
    <figcaption>
      <i class="dashicons dashicons-editor-help" /><strong>{title}</strong>
      { icons ? <i class="wl-icon-woorank" /> : '' }
    </figcaption>
    <p>
      {children}
    </p>
  </figure>
);

export default Card;