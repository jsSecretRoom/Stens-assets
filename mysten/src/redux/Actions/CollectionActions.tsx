import { CollectionAction } from '../TS-STATE';

export const setGradeCount = (addCollection: number[]): CollectionAction => ({
    type: 'GET_GRADE_COUNT',
    payload: addCollection,
});
