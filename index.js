function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    try {
        // Data validation: Check if assignment group belongs to its course
        if (assignmentGroup.course_id !== courseInfo.id) {
            throw new Error("Invalid input: AssignmentGroup does not belong to the specified CourseInfo.");
        }

        let learnerScores = {}; // To store scores for each learner
        let learnerCount = {}; // To count assignments for each learner
        let totalPoints = {}; // To store total points possible for each learner

        // Iterate over assignment groups
        assignmentGroup.assignments.forEach(assignment => {})
            
      
                if (submission.assignment_id === assignment.id) {
                    // Check if submission is before due date
                    let dueDate = new Date(assignment.due_at);
                    let submittedDate = new Date(submission.submission.submitted_at);
                    let lateSubmission = submittedDate > dueDate;
                    
                    // Skip late submissions
                    if (lateSubmission) {
                        
                        let deduction = assignment.points_possible * 0.1;
                        submission.submission.score -= deduction;
                    }

                    // Check if submission is before or on due date
                    if (submittedDate <= dueDate) {
                        // Data validation: Ensure points_possible is not 0
                        if (assignment.points_possible === 0) {
                            throw new Error("Invalid input: points_possible cannot be 0.");
                        }

                        // Initialize learner score if not exists
                        if (!learnerScores[submission.learner_id]) {
                            learnerScores[submission.learner_id] = 0;
                            learnerCount[submission.learner_id] = 0;
                            totalPoints[submission.learner_id] = 0;
                        }
