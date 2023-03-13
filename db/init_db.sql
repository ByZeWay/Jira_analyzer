/* create tables */

CREATE TABLE "Projects" (
	"projectId" SERIAL PRIMARY KEY,
  	"name" TEXT NOT NULL
);

CREATE TABLE "Authors" (
	"authorId" SERIAL PRIMARY KEY,
  	"name" TEXT NOT NULL
);

CREATE TABLE "Issues" (
	"issueId" SERIAL PRIMARY KEY,
  	"projectId" INT NOT NULL
				REFERENCES "Projects"
				ON DELETE RESTRICT,
  	"authorId" INT NOT NULL
			   REFERENCES "Authors"
			   ON DELETE RESTRICT,
  	"assigneeId" INT NOT NULL
				 REFERENCES "Authors"
				 ON DELETE RESTRICT,
  	"key" TEXT NOT NULL,
  	"summary" TEXT NOT NULL,
  	"description" TEXT NOT NULL,
  	"type" TEXT NOT NULL,
  	"priority" TEXT NOT NULL,
  	"status" TEXT NOT NULL,
	"createdTime" TIMESTAMP NOT NULL,
	"closedTime" TIMESTAMP NOT NULL,
	"updatedTime" TIMESTAMP NOT NULL,
	"timeSpent" INT NOT NULL
);

CREATE TABLE "StatusChanges" (
	"issueId" INT NOT NULL
			  REFERENCES "Issues"
			  ON DELETE RESTRICT,
  	"authorId" INT NOT NULL
			   REFERENCES "Authors"
			   ON DELETE RESTRICT,
	"changeTime" TIMESTAMP NOT NULL,
	"fromStatus" TEXT,
	"toStatus" TEXT
);

CREATE TABLE "ComplexityTaskTime" (
	"projectId" INT NOT NULL
			 	REFERENCES "Projects"
			 	ON DELETE RESTRICT,
  	"creationTime" TIMESTAMP NOT NULL,
	"data" JSON NOT NULL
);

CREATE TABLE "TaskPriorityCount" (
	"projectId" INT NOT NULL
			 	REFERENCES "Projects"
			 	ON DELETE RESTRICT,
  	"creationTime" TIMESTAMP NOT NULL,
	"state" TEXT NOT NULL,
	"data" JSON NOT NULL
);

CREATE TABLE "OpenTaskTime" (
	"projectId" INT NOT NULL
			 	REFERENCES "Projects"
			 	ON DELETE RESTRICT,
  	"creationTime" TIMESTAMP NOT NULL,
	"data" JSON NOT NULL
);

CREATE TABLE "TaskStateTime" (
	"projectId" INT NOT NULL
			 	REFERENCES "Projects"
			 	ON DELETE RESTRICT,
  	"creationTime" TIMESTAMP NOT NULL,
	"state" TEXT NOT NULL,
	"data" JSON NOT NULL
);

CREATE TABLE "ActivityByTask" (
	"projectId" INT NOT NULL
			 	REFERENCES "Projects"
			 	ON DELETE RESTRICT,
  	"creationTime" TIMESTAMP NOT NULL,
	"state" TEXT NOT NULL,
	"data" JSON NOT NULL
);
