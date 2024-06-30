import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface TaskPaginationProps {
  tasksPerPage: number;
  totalTasks: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const TaskPagination = ({
  tasksPerPage,
  totalTasks,
  paginate,
  currentPage,
}: TaskPaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent className="md:space-x-2">
        <PaginationItem>
          <PaginationPrevious
            size={"sm"}
            className="bg-primary-gradient text-white hover:text-gray-300"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
          />
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              isActive={number === currentPage}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            size={"sm"}
            className="bg-primary-gradient text-white hover:text-gray-300"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < pageNumbers.length) {
                paginate(currentPage + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TaskPagination;
