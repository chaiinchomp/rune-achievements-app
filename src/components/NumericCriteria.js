import React, { useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";
import CriteriaHeader from "./CriteriaHeader";
import {
    getNumericTaskCount,
    setNumericTaskCount
} from "../util/LocalStorageClient";
import { setAchievementCompleted } from "../util/CompletionUtils";

NumericCriteria.propTypes = {
    uuid: PropTypes.string.isRequired,
    criteria: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    seriesId: PropTypes.string,
    seriesOrdinal: PropTypes.number
};

export default function NumericCriteria({
    uuid,
    criteria,
    onChange,
    seriesId,
    seriesOrdinal
}) {
    const [editMode, setEditMode] = useState(false);
    const [completedCount, setCompletedCount] = useState(
        getNumericTaskCount(criteria.uuid)
    );

    const requiredCount = criteria.count;

    const enableEditModeCallback = () => {
        setEditMode(true);
    };

    const saveChangesCallback = () => {
        setNumericTaskCount(criteria.uuid, completedCount);
        setEditMode(false);

        const newAchievementState = setAchievementCompleted(
            uuid,
            completedCount >= requiredCount,
            seriesId,
            seriesOrdinal
        );
        onChange(newAchievementState, {});
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
