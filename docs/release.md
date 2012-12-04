---
siteroot: ..
layout: master
menu-documentation: selected
title: Multigraph - Creating a Release
---

Creating a Release of Multigraph
================================

1. Be absolutely sure that you're ready to create a release; deleting a release is difficult.  Do
   all of the after this one at the same time; don't start the process and leave some of the steps
   undone.  Before you start, be sure to:
   * make sure your copy of the js-multigraph repo is on the master branch
   * make sure your copy of the js-multigraph repo is up to date with the latest commits, or,
     if you want to create a release that is not at the head of the master branch, that
     it is positioned at the commit where you want to create the release 
   * make sure that any submodules (jermaine, error-display) are present in your 
     js-multigraph and positioned at the correct commit for the release
   * run all jasmine tests
   * view all graphics tests

1. Decide on a version number for the release; this is usually done by incrementing the
   minor verison number (the part after the decimal) by one.  You can view a list of all
   the release tags in the repository by running the "tags" script in the top level
   of the js-multigraph project.

        cd js-multigraph
        ./tags

1. Edit the file ReleaseNotes.md in the top level directory of the js-multigraph project,
   to add whatever notes are pertinent to the new release.  Be sure to include mention
   of the specific version number.  Commit the change.
   
        emacs ReleaseNotes.md
        git commit -m 'updates ReleaseNotes.md in preparation for release 4.1'
        
1. Run 'ant minify' to rebuild the built versions of Multigraph in the project; commit the results.

        ant minify
        git commit -m 'runs ant minify'

1. Tag the release with the tag "vM.N", where M.N is the version number, and with a log message
   using the -m option.  For example:

        git tag -a v4.1 -m 'Release 4.1'
        
1. Push the master branch and the new tag to github
        
        git push origin master
        git push origin v4.1

1. In the multigraph.github.com repo, run the <code>update-releases</code> script

        cd multigraph-github.com
        ./update-releases

   This script updates the files in the 'download' directory by creating new ones called
   multigraph-4.1.js and multigraph-min-4.1.js, and copies of them called 'multigraph.js'
   and 'multigraph-min.js'.  It also updates various pages on the site with links to these
   files.
   
1. Commit the changes and push to github

        git commit -m 'releases v4.1'
        git push


Deleting a Release of Multigraph
================================

In general you should NOT delete a release, especially if it has been
out long enough for anyone to have downloaded it.  If you've decided
that a particular release of Multigraph is bad for some reason and needs
to be removed from the web so that no one will download it any more,
you can flag it as bad.

Flagging a Release as Bad
-------------------------

This process keeps the release tag in the repository, so there is
still a record of it, but removes mention of that release from the web
site, and prevents the <code>update-releases</code> script from ever including it again.

1. In the js-multigraph repo, create an additional tag for the release, whose
   name is the release tag followed by the suffix "-bad", and push the new tag
   to github.

        cd js-multigraph
        git tag -a -m 'tags v4.1 as bad' v4.1-bad v4.1 
        git push origin v4.1-bad
        
   Note that it's important to use the full release tag name; for example, if the
   bad tag is "v4.1", you should create a tag named "v4.1-bad", not "4.1-bad".
   
1. In the multigraph.github.com repo, delete the download files associated with
   the bad release, and re-run the <code>update-releases</code> script.

        cd multigraph-github.com
        rm download/*-4.1.*
        ./update-releases

1. Commit the changes and push to github

        git commit -m 'releases v4.1'
        git push
