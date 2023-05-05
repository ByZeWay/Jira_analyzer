package utils

import (
	"Jira_Connector/internal/jsonModels"
	"strings"
)

func SearchProjects(projects []jsonModels.Project, searchParam string) []jsonModels.Project {
	if searchParam == "" {
		return projects
	}
	var results []jsonModels.Project
	searchParam = strings.ToLower(searchParam)
	for _, p := range projects {
		if strings.Contains(strings.ToLower(p.Key), searchParam) ||
			strings.Contains(strings.ToLower(p.Name), searchParam) {
			results = append(results, p)
		}
	}
	return results
}
