import React, { useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";
import CriteriaHeader from "./CriteriaHeader";

NumericCriteria.propTypes = {
    criteria: PropTypes.object.isRequired
};

export default function NumericCriteria({ criteria }) {
    const [editMode, setEditMode] = useState(false);
    const [completedCount, setCompletedCount] = useState(0);
    const requiredCount = criteria.count;

    const enableEditModeCallback = () => {
        setEditMode(true);
    };

    const disableEditModeCallback = () => {
        setEditMode(false);
    };

    return (
        <React.Fragment>
            <CriteriaHeader
                completedCount={completedCount}
                requiredCount={requiredCount}
                enableEditModeCallback={enableEditModeCallback}
                disableEditModeCallback={disableEditModeCallback}
                isEditMode={editMode}
            />
            <ProgressBar
                striped
                variant="info"
                now={(completedCount / requiredCount) * 100}
            />
            {editMode && (
                <Form>
                    <Form.Text className="mt-2">Enter new value:</Form.Text>
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder={completedCount}
                        onChange={e => setCompletedCount(e.target.value)}
                    />
                </Form>
            )}
        </React.Fragment>
    );
}
