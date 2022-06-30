import './search-box.styles.css'
const SearchBox=({className,placeHolder,onChangeHandler})=>
(
<input
        className={className}
        type={"search"}
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
)








/* 
class SearchBox extends Component {
  render() {
    return (
      
    );
  }
} */
export default SearchBox;
