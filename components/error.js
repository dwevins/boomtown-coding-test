/**
 * Formatted container for displaying errors when no other content is available
 * 
 * @param {string} message 
 */
const Error = ({
  message
}) => (
    <>
      <div id="body">
        <div className="content-wrapper--sm">
          <p className="ta--center">{ message }</p>
        </div>
      </div>
    </>
)

export default Error
