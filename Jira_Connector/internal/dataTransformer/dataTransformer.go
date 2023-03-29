package dataTransformer

import (
	"Jira_Connector/internal/jsonModels"
	"encoding/json"
	"log"
)

func ProjectsInBytesToStruct(bytes []byte) []jsonModels.Project {
	var projects []jsonModels.Project
	err := json.Unmarshal(bytes, &projects)
	if err != nil {
		log.Fatal(err)
	}
	return projects
}

func IssuesInBytesToStruct(bytes []byte) jsonModels.IssuesSearchResult {
	var issues jsonModels.IssuesSearchResult
	err := json.Unmarshal(bytes, &issues)
	if err != nil {
		log.Fatal(err)
	}
	return issues
}
