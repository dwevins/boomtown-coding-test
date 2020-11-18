const handleAddNewClick = () => {
  console.log('adding new note!');
}

const renderItem = (item, index) => (
  <div className="flex-grid__item preview" key={ index }>
    <h2 className="ta--center">{ item.title }</h2>
    <p>{ item.content }</p>
  </div>
)

const Body = ({
  notes
}) => (
  <div id="body">
    <div className="content-wrapper">
      <div className="flex-grid">
          <div className="flex-grid__item preview flex--center" onClick={handleAddNewClick}>
            <i className="fas fa-plus"></i>
          </div>
        { notes.map((item, index) => renderItem(item, index)) }
      </div>
    </div>
  </div>
)

export default Body
