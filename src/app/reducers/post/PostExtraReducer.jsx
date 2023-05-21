import { getCourses, getCourse } from '@/app/reducers/post/PostThunk';
import { set } from 'lodash';

/**
 * getCourses Reducer
 * @param builder
 * @returns {*}
 * @constructor
 */
const PostGetCoursesReducer = (builder) => {
  return builder
    .addCase(getCourses.pending, (state) => {
      set(state, 'courses.loading', true);
    })
    .addCase(getCourses.fulfilled, (state, action) => {
      set(state, 'courses.data', action.payload.data || []);
      set(state, 'courses.loading', false);
    })
    .addCase(getCourses.rejected, (state, action) => {
      set(state, 'courses.loading', false);
      set(state, 'courses.error', true);
      set(state, 'courses.message', action.payload);
    });
};

const PostGetCourseReducer = (builder) => {
  return builder
    .addCase(getCourse.pending, (state) => {
      set(state, 'course.loading', true);
    })
    .addCase(getCourse.fulfilled, (state, action) => {
      set(state, 'course.data', action.payload.data || []);
      set(state, 'course.loading', false);
    })
    .addCase(getCourse.rejected, (state, action) => {
      set(state, 'course.loading', false);
      set(state, 'course.error', true);
      set(state, 'course.message', action.payload);
    });
};

export const PostExtraReducer = (builder) => {
  PostGetCoursesReducer(builder);
  PostGetCourseReducer(builder);
};
