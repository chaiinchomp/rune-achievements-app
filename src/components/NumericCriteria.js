import React, { useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";
import CriteriaHeader from "./CriteriaHeader";
import {
    getNumericTaskCount,
    setNumericTaskCount,
    setAchievementComplete
} from "../util/LocalStorageClient";

NumericCriteria.propTypes = {
    achievementId: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired
};

export default function NumericCriteria({ achievementId, criteria }) {
    const [editMode, setEditMode] = useState(false);
    const [completedCount, setCompletedCount] = useState(
        getNumericTaskCount(criteria.taskId)
    );
    const requiredCount = criteria.count;

    const enableEditModeCallback = () => {
        setEditMode(true);
    };

    const saveChangesCallback = () => {
        setNumericTaskCount(criteria.taskId, completedCount);
        setEditMode(false);
        setAchievementComplete(
            achievementId,
            completedCount >= criteria.requiredCount
        );
    };

    return (
        <React.Fragment>
            <CriteriaHeader
                completedCount={completedCount}
                requiredCount={requiredCount}
                enableEditModeCallback={enableEditModeCallback}
                saveChangesCallback={saveChangesCallback}
                isEditMode={editMode}
                showEditButton
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
