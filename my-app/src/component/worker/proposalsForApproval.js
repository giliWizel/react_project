import React, { createRef } from "react";
import { connect } from 'react-redux'
import { actionsStore } from '../../redux/actions/actions'
function mapStateToProps(state) {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch) => ({


})
export default connect(mapStateToProps, mapDispatchToProps)(function ProposalsForApproval(props) {

    return (
        <>
            <h1>הצעות לאישור</h1>
        </>
    )
})