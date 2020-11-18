const renderItem = item => (
  <div class="flex-grid__item preview">
    <h2 className="ta--center">{ item.title }</h2>
    <p>{ item.content }</p>
  </div>
)

const Body = ({
  notes
}) => (
  <div id="body">
    <div class="content-wrapper">
      <div class="flex-grid">
        { notes.map(item => renderItem(item)) }
      </div>
    </div>
  </div>
)

export default Body
