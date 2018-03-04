import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';

import SearchTab from './SearchTab'
import TermSearchPanel from './TermSearchPanel'

const TERM_SEARCH_MODE = 'term'
const GENE_SEARCH_MODE = 'gene'


class SearchPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchMode: GENE_SEARCH_MODE
    }
  }

  onActive = tab => {
    this.setState({
      searchMode: tab.props.value
    })
  }

  render() {
    // Check show or hide
    const uiState = this.props.uiState

    if (!uiState.get('showSearchWindow')) {
      return (<div></div>)
    }

    const style = {
      width: '450px',
      height: '100%',
      maxWidth: '450px',
      zIndex: 990,
      backgroundColor: 'rgba(255, 255, 255, 0.7)'
    };

    const tabStyle = {
      fontSize: '0.7em'
    }

    const searchStyle = {
      background: 'white',
      padding: '0.5em',
    }

    const tabTitleStyle = {
      fontSize: '1em'
    }


    return (
      <div style={style}>
        <SearchTab
          {...this.props}
          searchMode={this.state.searchMode}
          currentNetwork={this.props.currentNetwork}
          style={searchStyle}
          search={this.props.search}
          searchActions={this.props.searchActions}
          uiStateActions={this.props.uiStateActions}
          backendServices={this.props.backendServices}
          queryGenesActions={this.props.queryGenesActions}
          queryGenes={this.props.queryGenes}
          commandActions={this.props.commandActions}
        />
      </div>
    )
  }
}

export default SearchPanel
