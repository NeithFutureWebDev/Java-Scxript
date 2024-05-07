function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    try {
        // Check if assignment group belongs to course
        if (assignmentGroup.course_id !== courseInfo.id) {
            throw new Error("Invalid input: AssignmentGroup does not belong to the specified CourseInfo.");
        }

        let learnerScores = {}; // To store scores for each learner
        let learnerCount = {}; // To count assignments for each learner
        let totalPoints = {}; // To store total points possible for each learner

  
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

                    // Check if submitted on/before due date
                    if (submittedDate <= dueDate) {
                       
                     
