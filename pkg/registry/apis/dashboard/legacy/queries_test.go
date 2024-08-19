package legacy

import (
	"testing"
	"text/template"

	"github.com/grafana/grafana/pkg/storage/legacysql"
	"github.com/grafana/grafana/pkg/storage/unified/sql/sqltemplate"
	"github.com/grafana/grafana/pkg/storage/unified/sql/sqltemplate/mocks"
)

func TestQueries(t *testing.T) {
	// prefix tables with grafana
	nodb := &legacysql.LegacyDatabaseHelper{
		Table: func(n string) string {
			return "grafana." + n
		},
	}

	getQuery := func(q *DashboardQuery) sqltemplate.SQLTemplate {
		v := newQueryReq(nodb, q)
		v.SQLTemplate = mocks.NewTestingSQLTemplate()
		return &v
	}

	mocks.CheckQuerySnapshots(t, mocks.TemplateTestSetup{
		RootDir: "testdata",
		Templates: map[*template.Template][]mocks.TemplateTestCase{
			sqlQueryDashboards: {
				{
					Name: "history_uid",
					Data: getQuery(&DashboardQuery{
						OrgID: 2,
						UID:   "UUU",
					}),
				},
				{
					Name: "history_uid_at_version",
					Data: getQuery(&DashboardQuery{
						OrgID:   2,
						UID:     "UUU",
						Version: 3,
					}),
				},
				{
					Name: "history_uid_second_page",
					Data: getQuery(&DashboardQuery{
						OrgID:  2,
						UID:    "UUU",
						LastID: 7,
					}),
				},
				{
					Name: "dashboard",
					Data: getQuery(&DashboardQuery{
						OrgID: 2,
					}),
				},
				{
					Name: "dashboard_next_page",
					Data: getQuery(&DashboardQuery{
						OrgID:  2,
						LastID: 22,
					}),
				},
			},
		},
	})
}
