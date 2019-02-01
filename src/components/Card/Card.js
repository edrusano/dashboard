/**
 * Components: Card.
 *
 * @since 3.20.0
 */
import React from 'react';

const Card = ({
  show,
  title,
  help,
  notes,
  children
}) => (
  <figure className={show ? "wl-card-" + show : null}>
    <figcaption>{ help && 
      <a href={help}><i class="dashicons dashicons-editor-help" /></a>
      } <strong>{title}</strong> { notes && notes.map((note, index) => (
      <React.Fragment>
        <b>{note.label}</b>
        <i key={index} className={"wl-icon-" + note.type} style={ {backgroundImage: "url(./assets/img/"+note.icon+")"} } />
      </React.Fragment>
      ))}
    </figcaption>
    <p>
      {children}
    </p>
  </figure>
);

export default Card;