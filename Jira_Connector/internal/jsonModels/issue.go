package jsonModels

type IssuesSearchResult struct {
	Issues     []Issue `json:"issues" structs:"issues"`
	StartAt    int     `json:"startAt" structs:"startAt"`
	MaxResults int     `json:"maxResults" structs:"maxResults"`
	Total      int     `json:"total" structs:"total"`
}

type Issue struct {
	ID     string      `json:"id,omitempty" structs:"id,omitempty"`
	Self   string      `json:"self,omitempty" structs:"self,omitempty"`
	Key    string      `json:"key,omitempty" structs:"key,omitempty"`
	Fields IssueFields `json:"fields,omitempty" structs:"fields,omitempty"`
	//Changelog *Changelog   `json:"changelog,omitempty" structs:"changelog,omitempty"`
}

type IssueFields struct {
	Priority Priority  `json:"priority" structs:"priority"`
	Status   Status    `json:"status,omitempty" structs:"status,omitempty"`
	Type     IssueType `json:"issuetype,omitempty" structs:"issuetype,omitempty"`
	Project  Project   `json:"project,omitempty" structs:"project,omitempty"`
	Creator  User      `json:"Creator,omitempty" structs:"Creator,omitempty"`
	Assignee User      `json:"assignee,omitempty" structs:"assignee,omitempty"`
	//CreatedTime Time      `json:"createdtime,omitempty" structs:"createdtime,omitempty"`
	//UpdatedTime Time      `json:"updatedtime,omitempty" structs:"updatedtime,omitempty"`
	TimeSpent   int    `json:"timespent,omitempty" structs:"timespent,omitempty"`
	Description string `json:"description,omitempty" structs:"description,omitempty"`
	Summary     string `json:"summary,omitempty" structs:"summary,omitempty"`
}

type Priority struct {
	Name string `json:"name,omitempty" structs:"name,omitempty"`
	ID   string `json:"id,omitempty" structs:"id,omitempty"`
}

type Status struct {
	Name string `json:"name" structs:"name"`
	ID   string `json:"id" structs:"id"`
}

type IssueType struct {
	ID   string `json:"id,omitempty" structs:"id,omitempty"`
	Name string `json:"name,omitempty" structs:"name,omitempty"`
}

