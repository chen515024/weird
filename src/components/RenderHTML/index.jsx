import './renderHTML.css';

export function createMarkup (template) {
  return { __html: template };
}

const RenderHTMLComponent = props => {
  const { template } = props;
  const renderTemplate = typeof template === 'string' ? template : '';

  return <div dangerouslySetInnerHTML={createMarkup(renderTemplate)} className='render-content'></div>
}

export default RenderHTMLComponent;
