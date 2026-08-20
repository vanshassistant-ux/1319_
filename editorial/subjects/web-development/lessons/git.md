# Git

## In 30 Seconds

Git is a distributed version-control system for recording a project's history. In a local repository, you edit files in a working tree, choose the changes for the next snapshot in the staging area, and create a commit. A commit records the staged project state and points back to earlier commits. Branches are named references that let a project develop lines of history without turning a branch into a separate copy of every file.

## Why This Matters

Web projects change in small, sometimes risky steps. Git gives those steps a reviewable local history, so a developer can inspect what changed and make a focused commit instead of relying on folders named "final-final." In coursework, Git also makes it easier to explain an assignment's state: which files are modified, which edits are ready to record, and which snapshot is current. This lesson stays local; collaboration services, remotes, and conflict recovery belong in later lessons.

## Learning Objectives

- Define version control, repository, working tree, staging area, commit, and branch.
- Distinguish modified, staged, and committed file states.
- Explain how a commit relates to the staging area and earlier history.
- Use Git status information to choose the next local step.
- Explain why a branch is a movable name for a line of commits rather than a backup folder.

## The College Version

### Git records project history as snapshots

Version control records changes to files over time so earlier versions can be inspected or recovered. Git is a distributed version-control system: a repository on a developer's computer contains the project's history as well as the files currently checked out for work. That local history is useful even before anyone shares code. A developer can compare a new edit with an earlier commit, see what is still unrecorded, and make a small, intentional record of one change. A repository is therefore more than a project folder. It includes Git's stored objects and references in addition to the files a person normally opens in an editor.

Git is often described as storing snapshots rather than a permanent list of line-by-line edits. At a commit, Git records the project state represented by the staged files and links the commit to its parent or parents. Git can later calculate a difference between commits, which is why diff views are useful, but the central mental model is a history of connected snapshots. A first commit has no parent; an ordinary later commit normally has one. Commit records also contain metadata such as a message and author/committer information. The message should explain the change's purpose in the project's context, not merely repeat a filename.

This model does not make a commit a magical backup of every possible file on a computer. Git records content that has been placed under version control and selected for a commit. It also does not require a network connection for ordinary local history operations. A hosting service can store a copy of a repository and add collaboration features, but Git itself and a particular hosting service are separate things. Keeping that boundary clear prevents the common error of calling every Git command a "GitHub command."

### The working tree, staging area, and commit answer different questions

The working tree is the checked-out set of project files that a developer edits. After changing a tracked file, that change is modified: it exists in the working tree but is not yet selected for the next commit. The staging area, also called the index, is Git's proposed contents for the next commit. Running `git add path` updates the staging area with the current version of that path. Staging is a deliberate selection step, not a synonym for saving a file in an editor. It lets a developer make a focused commit when several unrelated edits are present.

`git commit` creates a new commit from the current contents of the index and a log message. This means a file can be modified in the working tree while an earlier version of that file is staged, or a change can be staged while other changes remain unstaged. `git status` is the usual place to examine these distinctions: it reports files that differ between the working tree, staging area, and current commit. When the status says a new file is untracked, Git has not yet been told to include it in version control. `git add` can stage it, but learners should inspect the intended paths rather than blindly staging an entire directory.

A short local workflow follows from these roles: inspect with `git status`; edit a file; inspect again; stage the intended path with `git add`; inspect the staged set; then create a commit with a meaningful message. This lesson does not teach destructive repair commands, because their right choice depends on whether a change is untracked, modified, staged, or committed. The safer introductory habit is to inspect state before acting and to make a small commit only when its contents form one coherent change.

### History and branches organize, rather than duplicate, work

A Git history is a chain or graph of commits. `git log` displays commits so a developer can inspect recent records and their messages. The working tree usually reflects the commit currently named by `HEAD`, plus any local modifications. `HEAD` normally identifies the current branch. A branch is a reference that names the newest commit in a line of history. When a new commit is made while that branch is current, Git updates the branch name to point at the new commit. Thus a branch is lightweight bookkeeping around commits, not a separate archive that copies the whole project each time it is created.

Creating a branch before an experiment can make the experiment's local history distinguishable from another line of work. At this level, the important idea is the named pointer and the history it reaches—not sophisticated merge procedures. A branch is not a guarantee that work is safe, complete, or shared with anyone. It remains a local reference until a later workflow deliberately connects it to another repository. Nor does a branch replace clear commits: a vague branch containing several unrelated changes is still difficult to review or understand.

For a personal web exercise, one sound pattern is to initialize a repository, make one commit for an initial page, revise the page, then make a second commit describing that revision. `git log` will show two records in order, and a branch made at the second commit names that point in history. This history helps answer a precise question—what did the project look like after the first page?—without pretending that Git eliminates the need for testing, backups, or careful review.

## Key Vocabulary

- **version control:** a system that records changes to files over time so earlier versions can be inspected or recovered.
- **repository:** a Git-managed project and its stored history, objects, and references.
- **working tree:** the checked-out project files on disk that a developer can edit.
- **staging area:** Git's selected set of file contents for the next commit; also called the index.
- **commit:** a recorded snapshot made from the staging area, with a message and links to earlier history.
- **branch:** a movable reference that names the latest commit in a line of history.
- **HEAD:** Git's reference to the current branch or, in a detached state, directly to a commit.

## Eli-10

Think of a school project with a notebook that keeps dated snapshots. Your desk is the working tree: you change the page there. Before taking a snapshot, you put only the pages you want to include into a tray. That tray is the staging area. Taking the snapshot is a commit, and its note says what changed. Git can later show the snapshots in order, so you do not have to guess which folder called "new version" is actually newer.

## Eli's Analogy

The working tree is your desk, the staging area is the tray of pages chosen for the next photograph, and a commit is the labeled photograph. A branch is a bookmark pointing at one photograph in a sequence.

The analogy has limits: Git does not photograph paper pages, and the staging area can select individual file contents more precisely than a physical tray. A branch also points into a connected history; it is not simply a duplicate notebook.

## Worked Example

This local example was run in a disposable directory with Git. First, `git init` created a repository. After writing `index.html`, `git add index.html` made `git status --short` mark the file as staged for the first commit. `git commit -m "Add first page"` recorded that snapshot. The example then changed the heading; status identified `index.html` as modified in the working tree but not staged. After staging and committing the revision, `git log --oneline --max-count=2` showed `Revise heading` above `Add first page`. Finally, `git branch lesson-copy` created a second local branch name at the latest commit; `git branch --format=%(refname:short)` listed both `lesson-copy` and `main`.

## Common Mistakes

- **Mistake:** Assuming saving a file also stages it. **Correction:** Saving changes the working tree; use `git add` to select the current file content for the next commit.
- **Mistake:** Treating every change visible in `git status` as ready for one commit. **Correction:** Inspect the changes and stage only the paths that belong to the focused change you intend to record.
- **Mistake:** Calling Git and a hosting service the same product. **Correction:** Git manages local version history; a hosting service is a separate service that can store or collaborate around repositories.
- **Mistake:** Thinking a branch is a complete duplicated folder. **Correction:** A branch is a reference to a commit that moves as new commits are made on that branch.

## Compare / Contrast

- **working tree vs. staging area:** The working tree holds files being edited; the staging area holds the selected contents for the next commit.
- **staged vs. committed:** Staged content is proposed for the next snapshot; committed content has been recorded in repository history.
- **Git vs. a repository-hosting service:** Git is the version-control system; a hosting service is a separate platform that may store Git repositories and support collaboration.

## Key Takeaway

Git separates editing, selecting, and recording. Read `git status`, stage the coherent change you intend to record, and make a meaningful commit; branches then provide names for points and lines in that local history.

## Practice Question Bank

1. Which Git area contains the project files a developer is currently editing? **Answer: The working tree.**
2. What is true of a changed tracked file before `git add`? **Answer: It is modified in the working tree but not staged.**
3. What does a plain `git commit` record for a file that was staged and then edited again? **Answer: The version currently in the staging area.**
4. What is a normal Git branch? **Answer: A movable reference to the latest commit in a line of history.**
5. How should a developer prepare a focused commit from unrelated edits? **Answer: Inspect and stage only the files that belong to one coherent change.**

## Sources

- [Pro Git: What is Git?](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)
- [Git: git-commit Documentation](https://git-scm.com/docs/git-commit)
- [Git: gitdatamodel Documentation](https://git-scm.com/docs/gitdatamodel.html)

## Related Topics

GitHub; Web Hosting; Browser Developer Tools; JavaScript Fundamentals; Web Platform.

## Editorial Metadata

Original EliExplains synthesis, source-verified 2026-08-20. Reference-only Git documentation; no source prose adapted. The local Git workflow was executed in a disposable directory.
