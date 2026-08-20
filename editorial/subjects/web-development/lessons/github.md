# GitHub

## In 30 Seconds

GitHub is a web-based service for hosting repositories, collaborating on work, and tracking changes over time. Git provides the version-control system underneath; GitHub provides hosted repositories and collaboration features around it. A team can use issues to record work, a branch to isolate a proposed change, and a pull request to discuss and review that change before it joins a base branch. Access is governed by account and repository permissions.

## Why This Matters

Web projects are rarely maintained by one person forever. GitHub gives a team a shared place to see project files and history, discuss a task, propose a focused change, and review it before merging. Understanding the platform boundary prevents a common confusion: Git records versions, while GitHub hosts repositories and adds collaboration tools. It also helps a new contributor choose a responsible workflow—read project guidance, work within the permissions granted, and make a clear pull request rather than editing unrelated work.

## Learning Objectives

- Distinguish GitHub's hosted collaboration role from Git's version-control role.
- Explain how repositories, remotes, and local copies relate at a high level.
- Describe how issues can plan and track work.
- Trace a focused pull request from a branch through review to a possible merge.
- Explain why repository permissions shape what a contributor can do.

## The College Version

### GitHub hosts collaboration around Git repositories

GitHub is a web-based application that hosts files in repositories, supports collaboration, and tracks changes to files over time. Its version tracking is powered by Git, an open-source version-control system. The distinction matters. Git is the system that records a repository's history through commits and branches; GitHub is one platform that can host a Git repository and add a web interface, issue tracking, pull-request discussion, permissions, and other collaboration features. A Git repository can exist locally without being on GitHub, and a developer can use GitHub through a browser, desktop application, editor integration, or command-line tools.

A repository is the project container: it can hold files and the revision history that explains how those files changed. A local clone is a copy of that repository on a developer's computer. A remote is a named connection to a repository hosted elsewhere; in a common GitHub workflow, the remote points to the GitHub-hosted repository so locally made commits can be shared and collaborators can fetch changes. The remote is not a magical backup of every file on a computer, and GitHub is not another name for the local repository. It is a shared destination and collaboration surface for a particular repository.

This separation helps when diagnosing a problem. A change can be saved locally in a commit yet not be visible to teammates until it reaches the shared repository. Conversely, seeing a project on GitHub does not automatically grant every visitor authority to change it. Whether someone can view, comment on, push to, or administer a repository depends on its visibility and the permission model that applies. This lesson uses the platform-level view; local Git commands and conflict resolution belong in the Git lesson.

### Issues turn work into visible, discussable units

GitHub Issues can be used to plan, discuss, and track work. An issue may record a bug report, a feature idea, feedback, or another task the team needs to consider. It is not the same thing as a code change. An issue states or explores the work; the eventual implementation can happen in one or more commits, branches, and pull requests. Keeping those roles separate makes a project easier to follow: a reader can understand why work was proposed, while a change set can show exactly what was modified.

Issues can also carry organizing information. GitHub documents labels, milestones, and issue types as examples of metadata used to organize work. A team might label an issue as a documentation problem, assign it to a contributor, or connect it to a milestone. These labels are planning aids, not proof that a problem is resolved. The useful habit is to make the issue specific enough that another person can understand the context, desired outcome, and relevant constraints. A vague title such as “Fix site” gives reviewers little help; a clear issue gives a scoped task a home.

Issues and pull requests can be connected. GitHub notes that mentioning an issue in a pull request creates a reference, and certain closing keywords can automatically close an associated issue when the pull request is merged. That convenience should not replace human review. Before closing an issue, a team still needs to confirm that the change actually addresses the stated work. The key idea is traceability: an issue can explain the need, while a pull request can present a proposed response to that need.

### Pull requests create a reviewable proposal within permission boundaries

A pull request proposes changes from one branch into a base branch so that people can review them before a merge. A focused change normally begins in an isolated branch. The contributor edits and commits there, then opens a pull request that identifies the base branch, the branch containing the proposal, and an explanation of what changed and why. Further commits pushed to that same branch are added to the pull request, allowing the proposal to evolve without losing the conversation around it. A pull request can be marked as a draft when it is not yet ready for review.

Review is a process, not merely a button. Reviewers may comment, suggest a change, or request changes. The author can respond with new commits, and the pull request updates to include them. Once required reviews and status checks pass, an authorized person may merge the proposal into the base branch. Requirements differ by repository, so contributors should read that project's contribution guidance rather than assuming every project permits the same path. A pull request may also be closed without merging if the proposal is no longer appropriate.

Permissions define who can take which actions. GitHub describes a permission as the ability to perform a particular action and a role as a set of permissions assigned to an individual or team. On organization repositories, roles can range from read access through more capable roles, while personal-account repositories have a different model. A contributor should not work around a missing permission. If they lack write access, a fork may provide a separate copy from which they can propose a pull request; if a repository has review requirements, they should wait for the required review. Least-privilege access and clear review records protect both the project and its collaborators.

## Key Vocabulary

- **GitHub:** A web-based platform for hosting repositories and collaborating around work tracked with Git.
- **repository:** A project collection of files and their recorded revision history, hosted locally or on a service.
- **remote:** A named connection from a local Git repository to a repository hosted at another location.
- **issue:** A trackable record used to discuss, plan, or organize a task, bug, idea, or feedback.
- **pull request:** A proposal to merge changes from one branch into another after discussion and review.
- **base branch:** The target branch that a pull request proposes to change through a merge.
- **permission:** Authorization to perform a particular action on an account, repository, or other resource.
- **role:** A defined collection of permissions assigned to a person or team for a resource.

## Eli-10

Imagine that a class is building a shared science notebook. Git is the careful history keeper: it remembers each saved version of the notebook. GitHub is the shared classroom shelf and discussion board around that notebook. Everyone who is allowed can see the shared copy, talk about a task, and propose a change without scribbling over the main version immediately.

An issue is like a card that says, “The chart on page three needs a clearer label.” A student makes a copy of the relevant work area, improves the label, and brings the proposed change to the group. That proposal is like a pull request. Other students can read it, leave notes, and ask for a correction. If the group rules are met, the proposal can be added to the main notebook.

Not every student has the same authority. Some may only read, some may comment, and some may merge changes. Those permissions are rules about who can do which action. They are not a judgment about whose ideas matter.

## Eli's Analogy

Git is the notebook's version history, while GitHub is the shared shelf and discussion board that helps a class collaborate around it. The analogy has limits: a real repository contains structured files and exact commit history, not paper pages, and GitHub permissions are configured technical rules rather than a teacher deciding informally. The analogy also omits the mechanics of Git commands and network synchronization.

## Worked Example

A small website team receives a report that the contact page has an outdated email address. They open an issue that states the old address, the intended replacement, and where it appears. A contributor with the appropriate access creates a focused branch, changes only the contact-page content, and opens a pull request against the project's base branch. The pull request links the issue and explains the change. A reviewer checks that the new address is correct and that no unrelated edits are included. After the repository's required review and checks pass, an authorized person merges the pull request. The issue can then be closed because the visible task and the reviewed change are connected. This is a collaboration example, not a substitute for the local Git commands used to make the branch or commit.

## Common Mistakes

- **Using Git and GitHub as if they were the same tool.** Git records version history; GitHub can host Git repositories and provide collaboration features around them.
- **Treating an issue as proof that a code change has been made.** Use an issue to describe and track work, then connect it to the reviewed change that addresses it.
- **Opening a broad pull request with several unrelated changes.** Keep a pull request focused so reviewers can understand, test, and discuss one proposal.
- **Assuming every repository grants the same actions to every contributor.** Check the repository's access and contribution rules; permissions and merge requirements vary.

## Compare / Contrast

| A | B | Distinction |
| --- | --- | --- |
| Git | GitHub | Git is version-control software; GitHub is a hosted platform that can provide repositories and collaboration features around Git. |
| issue | pull request | An issue records or discusses work; a pull request proposes a specific branch's changes for review and possible merge. |
| local clone | remote repository | A local clone is a copy on a developer's machine; a remote repository is a connected repository hosted elsewhere. |
| permission | role | A permission authorizes one action, while a role groups permissions for assignment to people or teams. |

## Key Takeaway

GitHub hosts repositories and adds collaboration tools around Git. A clear issue, a focused pull request, thoughtful review, and appropriate permissions make team changes easier to trace and safer to merge.

## Practice Question Bank

1. **Which statement best distinguishes GitHub from Git?**
   - GitHub is the version-control system, while Git only stores website files.
   - GitHub can host Git repositories and add collaboration features, while Git provides version control.
   - GitHub is required for every local Git repository to exist.
   - GitHub replaces branches and commits with issues.
   - **Answer: B.** Git supplies version control, while GitHub provides hosting and collaboration features.
2. **A team wants a visible place to record a bug report, discuss its scope, and connect it to later work. Which GitHub feature fits that purpose?**
   - A remote name
   - A base branch
   - An issue
   - A local clone
   - **Answer: C.** Issues are used to plan, discuss, and track work.
3. **What does a pull request propose?**
   - Merging changes from one branch into a base branch after review
   - Deleting every branch after a local commit
   - Granting all visitors administrator access
   - Replacing a repository's file history with an issue
   - **Answer: A.** A pull request proposes branch changes for review and a possible merge.
4. **A contributor pushes another commit to the branch already used by an open pull request. What happens to that pull request?**
   - It automatically becomes a new repository.
   - It loses its review conversation permanently.
   - It merges immediately regardless of review requirements.
   - It updates to include the additional commit.
   - **Answer: D.** Later commits on the same branch are added to the pull request.
5. **Why should a contributor check repository permissions before attempting a merge?**
   - Permissions determine the colors used in pull-request comments.
   - Permissions control who is authorized to perform particular actions on resources.
   - Permissions convert every issue into a pull request.
   - Permissions make a local clone identical to all remotes.
   - **Answer: B.** Permissions and roles set the allowed actions for people and teams.

## Sources

- GitHub Docs, [Connecting to GitHub](https://docs.github.com/en/get-started/using-github/connecting-to-github)
- GitHub Docs, [About issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
- GitHub Docs, [Quickstart for pull requests](https://docs.github.com/en/pull-requests/get-started/pull-request-quickstart)
- GitHub Docs, [Access permissions on GitHub](https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github)

## Related Topics

Git; Web Hosting; Web Security Basics; Browser Developer Tools.

## Editorial Metadata

Original EliExplains synthesis. Research status: source-verified. Sources were used reference-only; no source prose was adapted. Researched 2026-08-20. Intended status: READY_TO_PUBLISH, pending orchestrator acceptance.
