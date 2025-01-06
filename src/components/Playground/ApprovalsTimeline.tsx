import clsx from "clsx";

import Icon from "~/components/Icon";

// type ReviewActionEnum = "Approve" | "Deny";

// type Reviewer = {
//   id?: string;
//   name: string;
//   path?: string;
// };

type Group = {
  id?: string;
  name: string;
  path?: string;
};

interface ApprovalNeededProps {
  // adminOverrideReviewer: Reviewer;
  /** Groups the item needs approval from.

      Uses the Group item props to build approval buttons. */
  approvalGroups?: Group[];
  /** A list of `Groups` the user can review as. */
  canReviewAsGroups?: Group[];
  /** Allows you to pass custom styles to the outermost div of the component.. */
  className?: string;
  /** When `true`, disables all actions. */
  disableActions?: boolean;
  /** The total number of approvals needed for row.

      Defaults to 1. */
  numberOfApprovals?: number;
  /** Action fired when reviewing as a given group. */
  // onReview?: (
  //   reviewAction: ReviewActionEnum,
  //   reviewAsGroupId: string | null,
  //   reviewerId: string | null,
  // ) => void;
  /** Current reviewer id needing approval. */
  // reviewerId?: string;
}

/** Renders the number of approvals needed and who those approvals are needed from. [Documentation](http://localhost:6006/?path=/story/playground-approvalstimeline-approvalstimeline--primary) */
export function ApprovalNeeded({
  // adminOverrideReviewer,
  approvalGroups,
  // canReviewAsGroups,
  className,
  // disableActions = false,
  numberOfApprovals = 1,
  // onReview,
  // reviewerId,
}: ApprovalNeededProps) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <Icon
        iconName="time_40_s"
        className="relative mr-2.5 inline-block shrink-0 text-gray-400"
      />
      {numberOfApprovals} Approval needed from
      {approvalGroups &&
        approvalGroups.map((group, index) => (
          <div key={index}>{group.name}</div>
        ))}
    </div>
  );
}

ApprovalsTimeline.displayName = "ApprovalsTimeline";
interface ApprovalsTimelineProps {
  /** Prop description. */
  propName?: string;
}

/** JSDoc description for the item. [Documentation]() */
export function ApprovalsTimeline({ propName }: ApprovalsTimelineProps) {
  return <div>{propName}ApprovalsTimeline</div>;
}

ApprovalsTimeline.displayName = "ApprovalsTimeline";
