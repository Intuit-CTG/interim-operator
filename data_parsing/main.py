import sys, getopt

import config

def main():
# parse command line options
    try:
        opts, args = getopt.getopt(sys.argv[1:], "h", ["help"])
    except getopt.error, msg:
        print msg
        print "for help use --help"
        sys.exit(2)
# TODO: process options
    for o, a in opts:
        if o in ("-h", "--help"):
            print __doc__
            sys.exit(0)
# TODO: process arguments
    datafile = None
    try:
        datafile = file(config.abs_path + "/" + config.processed_file, 'r+')
    except IOError:
        print "There is no file."
    print "Loading data files..."
    values = {}
    if datafile:
        for line in datafile.readlines():
            values[line[:line.index(':')]] = line[line.index(':')+1:]
    print "Done."
    print "Sorting...."
    blogset = [(values[i], i) for i in values.keys() if 'b' in i]
    blognumbers = [i[1] for i in sorted(blogset)[:config.number_of_posts]]
    print "Done."

# TODO: Return results here

if __name__ == "__main__":
    main()
